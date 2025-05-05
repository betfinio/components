import type { InitialTableState, OnChangeFn, Row, TableOptions, Table as TanstackTable } from '@tanstack/react-table';
import { type ColumnDef, type TableMeta, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { cva } from 'class-variance-authority';
import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon, Loader } from 'lucide-react';

import { cn, cn as cx } from '@/lib/utils';
import React from 'react';
import { DataTablePagination, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface PaginationState {
	pageIndex: number;
	pageSize: number;
}

type BaseDataTableProps<TData, TValue> = Omit<TableOptions<TData>, 'getCoreRowModel'> & {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	isLoading?: boolean;
	meta?: TableMeta<TData>;
	state?: InitialTableState;
	onRowClick?: (row: TData, __row?: Row<TData>) => void;
	loaderClassName?: string;
	noResultsClassName?: string;
	hidePagination?: boolean;
	tableRef?: React.Ref<TanstackTable<TData>>; // Add tableRef to expose the instance
	enableSorting?: boolean;
	withZebra?: boolean;
	className?: string;
	serverPagination?: boolean;
	t: any;
};

type TableWithClientPaginationProps<TData, TValue> = BaseDataTableProps<TData, TValue> & {
	serverPagination?: false | undefined;
	totalCount?: number;
	pagination?: PaginationState;
	onPaginationChange?: (pagination: PaginationState) => void;
};

type TableWithServerPaginationProps<TData, TValue> = BaseDataTableProps<TData, TValue> & {
	serverPagination: true;
	totalCount: number;
	pagination: PaginationState;
	onPaginationChange: (pagination: PaginationState) => void;
};

export type DataTableProps<TData, TValue> = TableWithClientPaginationProps<TData, TValue> | TableWithServerPaginationProps<TData, TValue>;

export function DataTable<TData, TValue>({
	columns,
	data,
	isLoading = false,
	hidePagination = false,
	meta,
	state = {},
	onRowClick,
	loaderClassName,
	noResultsClassName,
	tableRef,
	enableSorting = false,
	withZebra = true,
	className = '',
	serverPagination = false,
	totalCount,
	pagination: controlledPagination,
	onPaginationChange: controlledOnPaginationChange,

	t,
	...tableProps
}: DataTableProps<TData, TValue>) {
	const [internalPagination, setInternalPagination] = React.useState<PaginationState>({
		pageIndex: 0,
		pageSize: 5,
	});
	const effectivePagination = controlledPagination || internalPagination;

	const handlePaginationChange = React.useCallback(
		(updater: (prev: PaginationState) => PaginationState) => {
			const newPagination = updater(effectivePagination);
			if (serverPagination && controlledOnPaginationChange) {
				controlledOnPaginationChange(newPagination);
			} else {
				setInternalPagination(newPagination);
			}
		},
		[effectivePagination, serverPagination, controlledOnPaginationChange],
	);

	const table = useReactTable({
		...tableProps,
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: serverPagination ? undefined : getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		enableSorting,
		meta,
		manualPagination: serverPagination,
		rowCount: serverPagination && totalCount !== undefined ? totalCount : undefined,
		state: { pagination: effectivePagination },
		onPaginationChange: handlePaginationChange as OnChangeFn<PaginationState>,
		initialState: { pagination: { pageIndex: 0, pageSize: 5 }, ...state },
	});

	React.useImperativeHandle(tableRef, () => table, [table]);

	return (
		<div className={cn(cva('w-full')({ className }))}>
			<div className="rounded-lg border border-border w-full">
				<Table className="">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead
										key={header.id}
										className={cx(header.column.columnDef.meta?.className, header.column.getCanSort() && 'cursor-pointer select-none')}
										onClick={header.column.getToggleSortingHandler()}
									>
										<div className="flex items-center gap-1">
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
											{header.column.getCanSort() && (
												<div className="size-4">
													{header.column.getIsSorted() === 'asc' && <ArrowUpIcon className="size-4" />}
													{header.column.getIsSorted() === 'desc' && <ArrowDownIcon className="size-4" />}
													{header.column.getIsSorted() === false && <ArrowUpDownIcon className="size-4 opacity-50" />}
												</div>
											)}
										</div>
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{isLoading ? (
							<TableRow>
								<TableCell colSpan={columns.length} className={cx('h-[200px]', loaderClassName)}>
									<div className="flex items-center justify-center">
										<Loader className="animate-spin" />
									</div>
								</TableCell>
							</TableRow>
						) : table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row, index) => (
								<TableRow
									key={row.id}
									className={cx('cursor-pointer', {
										'bg-background-lighter': withZebra && index % 2 === 0 && !row.getIsSelected(),
									})}
									data-state={row.getIsSelected() && 'selected'}
									onClick={() => onRowClick?.(row.original, row)}
									data-row-id={row.id}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className={cx(cell.column.columnDef.meta?.className)}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className={cx('h-24 text-center', noResultsClassName)}>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			{!hidePagination && <DataTablePagination table={table} isLoading={isLoading} t={t} />}
		</div>
	);
}
