"use client";

import { useState, useEffect, useCallback } from "react";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  type ColumnDef,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getMyUrls, deleteUrl } from "@/lib/server-calls";
import { TableSkeleton } from "@/components/table-skeleton";
import { toast } from "sonner";

interface UrlData {
  id: number;
  shortCode: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
  expiredAt: string;
  clickCount: number;
}

const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:3030";

export function UrlTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [data, setData] = useState<UrlData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUrls = useCallback(async () => {
    setLoading(true);
    const urls = await getMyUrls();
    setData(
      urls.map((u) => ({
        ...u,
        shortUrl: `${backendUrl}/${u.shortCode}`,
      }))
    );
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUrls();
  }, [fetchUrls]);

  const handleDelete = async (id: number) => {
    const ok = await deleteUrl(id);
    if (ok) fetchUrls();
  };

  const handleCopy = (shortUrl: string) => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("Copied to clipboard!", { position: "top-right" });
  };

  const columns: ColumnDef<UrlData>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "originalUrl",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Original URL
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => (
        <a
          href={row.getValue("originalUrl")}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-xs truncate block text-primary hover:underline"
        >
          {row.getValue("originalUrl")}
        </a>
      ),
    },
    {
      accessorKey: "shortUrl",
      header: "Short URL",
      cell: ({ row }) => (
        <a
          href={row.getValue("shortUrl")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {row.getValue("shortUrl")}
        </a>
      ),
    },
    {
      accessorKey: "clickCount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Clicks
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const val: string = row.getValue("createdAt");
        return <span>{new Date(val).toLocaleDateString()}</span>;
      },
    },
    {
      accessorKey: "expiredAt",
      header: "Expires At",
      cell: ({ row }) => {
        const val: string = row.getValue("expiredAt");
        return <span>{new Date(val).toLocaleDateString()}</span>;
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const url = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleCopy(url.shortUrl)}>
                Copy Short URL
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => handleDelete(url.id)}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: { sorting },
  });

  if (loading) return <TableSkeleton />;

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No URLs found. Shorten your first link above!
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between border-t p-4">
        <span className="text-sm text-muted-foreground">
          {data.length} link{data.length !== 1 ? "s" : ""}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}