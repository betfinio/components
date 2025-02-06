import type { InitialTableState, Row, Table as TanstackTable } from '@tanstack/react-table';
import { type ColumnDef, type TableMeta, flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { cva } from 'class-variance-authority';
import { ArrowDown, ArrowDownIcon, ArrowUp, ArrowUpDown, ArrowUpIcon, ChevronsUpDown, Loader, MoveDown } from 'lucide-react';
import * as React from 'react';
import { cn, cn as cx } from '../../lib/utils';
import { DataTablePagination, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface DataTableProps<TData, TValue> {
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
}

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
	tableRef, // Accept the tableRef prop
	enableSorting = false, // Add default value
	withZebra = true,
	className = '',
}: DataTableProps<TData, TValue>) {
	React.useImperativeHandle(tableRef, () => table);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		enableSorting,
		meta: meta,
		initialState: {
			pagination: {
				pageSize: 5,
				pageIndex: 0,
			},
			...state,
		},
	});

	return (
		<div className={cn(cva('w-full')({ className }))}>
			<div className="rounded-lg border border-border w-full">
				<Table className="">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead
											key={header.id}
											className={cx(header.column.columnDef.meta?.className, header.column.getCanSort() && 'cursor-pointer select-none')}
											onClick={header.column.getToggleSortingHandler()}
										>
											<div className="flex items-center gap-1">
												{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
												{header.column.getCanSort() && (
													<div className="w-4 h-4">
														{header.column.getIsSorted() === 'asc' && <ArrowUp className="w-4 h-4" />}
														{header.column.getIsSorted() === 'desc' && <ArrowDown className="w-4 h-4" />}
														{header.column.getIsSorted() === false && <ArrowUpDown className="w-4 h-4 opacity-50" />}
													</div>
												)}
											</div>
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{isLoading ? (
							<TableRow>
								<TableCell colSpan={columns.length} className={cx('h-[200px]', loaderClassName)}>
									<div className={'flex items-center justify-center'}>
										<Loader className={'animate-spin'} />
									</div>
								</TableCell>
							</TableRow>
						) : table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row, index) => (
								<TableRow
									className={cx('cursor-pointer', { 'bg-background-lighter': withZebra && index % 2 === 0 && !row.getIsSelected() })}
									key={row.id}
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
			<DataTablePagination table={table} className={hidePagination ? 'hidden' : 'flex'} />
		</div>
	);
}
