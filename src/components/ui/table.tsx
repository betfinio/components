import type { Table as ReactTable } from '@tanstack/react-table';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
	<div className="relative w-full overflow-auto">
		<table ref={ref} className={cn('w-full caption-bottom text-sm', className)} {...props} />
	</div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn('[&_tr]:border-b border-gray-800', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
	<tbody ref={ref} className={cn('[&_tr:last-child]:border-0 border-gray-800', className)} {...props} />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => (
	<tfoot ref={ref} className={cn('border-t bg-muted/50 font-medium border-gray-800 [&>tr]:last:border-b-0', className)} {...props} />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
	<tr ref={ref} className={cn('border-b transition-colors border-gray-800 data-[state=selected]:bg-secondary', className)} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
	<th ref={ref} className={cn('h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', className)} {...props} />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => (
	<td ref={ref} className={cn('p-2 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props} />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(({ className, ...props }, ref) => (
	<caption ref={ref} className={cn('mt-4 text-sm text-muted-foreground', className)} {...props} />
));
TableCaption.displayName = 'TableCaption';

interface DataTablePaginationProps<TData> {
	table: ReactTable<TData>;
	className?: string;
	isLoading?: boolean;
}

function DataTablePagination<TData>({ table, className = '', isLoading = false, t }: DataTablePaginationProps<TData> & { t: any }) {
	const { pageIndex, pageSize } = table.getState().pagination;

	const computedPageCount = table.getPageCount();
	const canPreviousPage = pageIndex > 0;
	const canNextPage = table.getCanNextPage();

	const handlePageChange = (newPageIndex: number) => {
		table.setPageIndex(newPageIndex);
	};

	const handlePageSizeChange = (value: string) => {
		table.setPageSize(Number(value));
	};

	const totalCount = table.options.rowCount as number | undefined;

	// rowCount is 'undfined' on client-side pagination, we can use it as a flag to pick rows count from filtered model
	const resultsCount = totalCount !== undefined ? totalCount : table.getFilteredRowModel().rows.length;

	if (resultsCount === 0) {
		return <div className="h-12 mt-2" />;
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className={cn('flex items-center justify-between py-2 mt-2', className)}
		>
			<div className="flex-1 text-xs text-muted-foreground">
				{resultsCount} {t('results')}.
			</div>
			<div className="flex items-center space-x-1 lg:space-x-4">
				<div className="flex items-center space-x-1">
					<p className="hidden sm:block text-xs font-medium">{t('resultsPerPage')}</p>
					<Select value={`${pageSize}`} onValueChange={handlePageSizeChange}>
						<SelectTrigger className="h-8 w-[70px]">
							<SelectValue placeholder={pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[5, 10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center justify-center text-xs font-medium">
					<span className="capitalize pr-1">{t('page')}</span> {pageIndex + 1}
					<span className="px-1">{t('of')}</span>
					{computedPageCount}
				</div>
				<div className="flex items-center space-x-2">
					<Button variant="outline" className="hidden h-8 w-8 p-0 lg:flex" onClick={() => handlePageChange(0)} disabled={!canPreviousPage || isLoading}>
						<span className="sr-only">{t('goTo.first')}</span>
						<ChevronsLeft className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => handlePageChange(pageIndex - 1)} disabled={!canPreviousPage || isLoading}>
						<span className="sr-only">{t('goTo.previous')}</span>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					<Button variant="outline" className="h-8 w-8 p-0" onClick={() => handlePageChange(pageIndex + 1)} disabled={!canNextPage || isLoading}>
						<span className="sr-only">{t('goTo.next')}</span>
						<ChevronRight className="h-4 w-4" />
					</Button>
					<Button
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={() => handlePageChange(computedPageCount - 1)}
						disabled={!canNextPage || isLoading}
					>
						<span className="sr-only">{t('goTo.last')}</span>
						<ChevronsRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, DataTablePagination, type DataTablePaginationProps };
