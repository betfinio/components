import type { InitialTableState, Row, SortingState, TableOptions, Table as TanstackTable } from '@tanstack/react-table';
import { type ColumnDef, type TableMeta, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowUpIcon, Loader } from 'lucide-react';

import { cn as cx } from '@/lib/utils';
import React from 'react';
import InfiniteScroll from '../ui/infinite-scroll';
import { ScrollArea } from '../ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

type BaseDataTableProps<TData, TValue> = Omit<TableOptions<TData>, 'getCoreRowModel'> & {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	isLoading?: boolean;
	isRefetching?: boolean;
	meta?: TableMeta<TData>;
	state?: InitialTableState;
	onRowClick?: (data: TData, row: Row<TData>) => void;
	loaderClassName?: string;
	noResultsClassName?: string;
	tableRef?: React.Ref<TanstackTable<TData>>;
	withZebra?: boolean;
	className?: string;
	// Scroll props
	height?: string;
	// Server-side sorting props
	sorting?: SortingState;
	onSortingChange?: (sorting: SortingState) => void;
	defaultSorting?: SortingState; // Default sorting when no sorting is applied
	// Infinite scroll props
	onLoadMore?: () => void;
	hasMore?: boolean;
	showHasNoMoreData?: boolean;
	isLoadingMore?: boolean;
	loadingMoreComponent?: React.ReactNode;
	noMoreDataComponent?: React.ReactNode;
	containerRef?: React.RefObject<HTMLDivElement>;
};

export function InifiteDataTable<TData, TValue>({
	columns,
	data,
	isLoading = false,
	isRefetching = false,
	meta,
	state = {},
	onRowClick,
	loaderClassName,
	noResultsClassName,
	tableRef,
	withZebra = true,
	className = '',
	// Scroll props
	height = '600px',
	// Server-side sorting props
	sorting,
	onSortingChange,
	defaultSorting = [{ id: 'id', desc: false }], // Default sort by 'id' column
	// Infinite scroll props
	onLoadMore,
	hasMore,
	showHasNoMoreData = true,
	isLoadingMore,
	loadingMoreComponent,
	noMoreDataComponent,
	containerRef,
	...tableProps
}: BaseDataTableProps<TData, TValue>) {
	// Ensure we always have sorting state
	const effectiveSorting = sorting && sorting.length > 0 ? sorting : defaultSorting;

	const table = useReactTable({
		data,
		...tableProps,
		columns,
		getCoreRowModel: getCoreRowModel(),
		manualSorting: true,
		enableSortingRemoval: false, // Disable the middle state (unsorted)
		meta,
		onSortingChange,
		state: {
			...state,
			sorting: effectiveSorting,
		},
	});

	React.useImperativeHandle(tableRef, () => table, [table]);

	const showLoading = isLoading;
	const showData = !isLoading && table.getRowModel().rows?.length > 0;
	const showNoResults = !isLoading && !table.getRowModel().rows?.length;

	// Default loading more component
	const defaultLoadingMoreComponent = (
		<TableRow>
			<TableCell colSpan={columns.length} className="h-16 text-center">
				<div className="flex items-center justify-center gap-2">
					<Loader className="h-4 w-4 animate-spin" />
					<span className="text-sm text-muted-foreground">Loading more...</span>
				</div>
			</TableCell>
		</TableRow>
	);

	// Default no more data component
	const defaultNoMoreDataComponent = (
		<TableRow>
			<TableCell colSpan={columns.length} className="h-16 text-center">
				<span className="text-sm text-muted-foreground">No more data</span>
			</TableCell>
		</TableRow>
	);

	return (
		<div ref={containerRef} className={cx('w-full ', className)}>
			<div className="rounded-md border overflow-x-auto">
				<ScrollArea>
					<div className="min-w-max">
						{/* Sticky Header */}
						<div className="border-b bg-background">
							<Table>
								<TableHeader>
									{table.getHeaderGroups().map((headerGroup) => (
										<TableRow key={headerGroup.id}>
											{headerGroup.headers.map((header) => (
												<TableHead
													key={header.id}
													className={cx(header.column.getCanSort() && 'cursor-pointer select-none', header.column.columnDef.meta?.className)}
													onClick={header.column.getToggleSortingHandler()}
													style={{ width: header.getSize() }}
												>
													<div className="flex items-center gap-1">
														{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
														{header.column.getCanSort() && (
															<div className="size-4">
																{header.column.getIsSorted() === 'asc' && <ArrowUpIcon className="size-4" />}
																{header.column.getIsSorted() === 'desc' && <ArrowDownIcon className="size-4" />}
															</div>
														)}
													</div>
												</TableHead>
											))}
										</TableRow>
									))}
								</TableHeader>
							</Table>
						</div>
						{/* Scrollable Body */}
						<ScrollArea style={{ height: `calc(${height} - 48px)` }} viewPortClassName="vertical-scroll" className="w-full relative">
							<Table>
								<TableBody>
									{showLoading && (
										<TableRow>
											<TableCell colSpan={columns.length} className={cx('h-[200px]', loaderClassName)}>
												<div className="flex items-center justify-center">
													<Loader className="animate-spin" />
												</div>
											</TableCell>
										</TableRow>
									)}
									{showData && (
										<InfiniteScroll isLoading={isLoadingMore || false} hasMore={hasMore || false} next={onLoadMore || (() => {})} threshold={0.1}>
											{table.getRowModel().rows.map((row, index) => (
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
														<TableCell key={cell.id} className={cx(cell.column.columnDef.meta?.className)} style={{ width: cell.column.getSize() }}>
															{flexRender(cell.column.columnDef.cell, cell.getContext())}
														</TableCell>
													))}
												</TableRow>
											))}
											{/* Loading more indicator */}
											{isLoadingMore && (loadingMoreComponent || defaultLoadingMoreComponent)}
											{/* No more data indicator */}
											{!hasMore && showHasNoMoreData && table.getRowModel().rows?.length > 0 && (noMoreDataComponent || defaultNoMoreDataComponent)}
											{/* Sentinel element for infinite scroll - must be last */}
											{hasMore && (
												<TableRow>
													<TableCell colSpan={columns.length} className="h-1 p-0">
														<div className="h-1" />
													</TableCell>
												</TableRow>
											)}
										</InfiniteScroll>
									)}
									{showNoResults && (
										<TableRow>
											<TableCell colSpan={columns.length} className={cx('h-24 text-center', noResultsClassName)}>
												No results.
											</TableCell>
										</TableRow>
									)}
								</TableBody>
							</Table>
							{isRefetching && (
								<div className="absolute inset-0 flex items-center justify-center animate-pulse bg-[var(--background-lighter)]/50">
									<Loader className="animate-spin" />
								</div>
							)}
						</ScrollArea>
					</div>
				</ScrollArea>
			</div>
		</div>
	);
}
