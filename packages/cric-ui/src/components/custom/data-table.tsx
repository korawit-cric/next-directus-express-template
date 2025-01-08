'use client';

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import type {
  ColumnDef,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/ui/table';
import { useFilterStore } from '@/store/filter-store';

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export type DependentFilterValue = {
  id: string;
  value: string[];
};

// Wrap DataTable with forwardRef
export const DataTable = forwardRef(
  (
    { columns, data }: DataTableProps<any>,
    ref: React.Ref<{
      setActionVisibility: (coulumId: string, visibility: boolean) => void;
    }>,
  ) => {
    const { columnFilters, setColumnFilters} = useFilterStore()

    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
      {},
    );
    // const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([])


    // ! IMPORTANT: getFilteredRowModel: getFilteredRowModel(), and map from it for filtered data
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      state: {
        sorting,
        columnVisibility,
        columnFilters,
      },
    });

    // Directly set the visibility based on the passed parameter
    const handleActionVisibility = (coulumId: string, visibility: boolean) => {
      const column = table
        .getAllColumns()
        .find((_column) => _column.id === coulumId);
      column?.toggleVisibility(visibility);
    };

    const handleSort = (id: string) => {
     const column = table.getColumn(id)
     column?.toggleSorting(column.getIsSorted() === "asc")
    };

    const handleMultipleCheckBoxFilter = (filters: DependentFilterValue[]) => {
      filters.forEach(({ id, value }) => {
        const column = table.getColumn(id); // Use getColumn for a specific column
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        column?.setFilterValue(value?.length ? value : undefined); // Set the filter value if the column exists
      });
    };

    // Expose setActionVisibility via ref
    useImperativeHandle(ref, () => ({
      setActionVisibility: handleActionVisibility,
      setMultipleCheckBoxFilters: handleMultipleCheckBoxFilter,
      setSorting: handleSort
    }));

    return (
      <div className='h-full flex flex-col justify-between'>
        <Table>
          <TableHeader className='text-nowrap text-background'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className='h-24 text-center'
                  colSpan={columns.length}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className='w-full flex justify-end items-end text-sub-text text-sm font-normal'>
          Showing {data.length ? '1' : '0'}-{data.length} of {data.length}{' '}
          results
        </div>
      </div>
    );
  },
);

DataTable.displayName = 'DataTable'; // Optional, but recommended for better debugging
