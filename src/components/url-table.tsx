"use client";

import { useState } from "react";
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

interface UrlData {
  id: string;
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
  expiresAt: string;
}

const columns: ColumnDef<UrlData>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "originalUrl",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Original URL
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <a
        href={row.getValue("originalUrl")}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
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
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "expiresAt",
    header: "Expires At",
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Copy Short URL</DropdownMenuItem>
            <DropdownMenuItem>Edit Expiry</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const data: UrlData[] = [
  {
    id: "1",
    originalUrl: "https://example.com/very/long/url/that/needs/shortening",
    shortUrl: "https://shortly.com/abc123",
    createdAt: "2024-02-17",
    expiresAt: "2025-02-17",
  },
  {
    id: "2",
    originalUrl: "https://blog.example.com/tech/articles/advanced-javascript",
    shortUrl: "https://shortly.com/xyz789",
    createdAt: "2024-02-18",
    expiresAt: "2025-02-18",
  },
  {
    id: "3",
    originalUrl: "https://github.com/username/repository/long/path",
    shortUrl: "https://shortly.com/def456",
    createdAt: "2024-02-19",
    expiresAt: "2025-02-19",
  },
  {
    id: "4",
    originalUrl: "https://news.example.com/world/headline-of-the-day",
    shortUrl: "https://shortly.com/ghi123",
    createdAt: "2024-02-20",
    expiresAt: "2025-02-20",
  },
  {
    id: "5",
    originalUrl: "https://ecommerce.com/products/12345/long-url-for-product",
    shortUrl: "https://shortly.com/jkl456",
    createdAt: "2024-02-21",
    expiresAt: "2025-02-21",
  },
  {
    id: "6",
    originalUrl: "https://docs.example.com/tutorials/web-development",
    shortUrl: "https://shortly.com/mno789",
    createdAt: "2024-02-22",
    expiresAt: "2025-02-22",
  },
  {
    id: "7",
    originalUrl: "https://video.example.com/watch/long-url-for-video-content",
    shortUrl: "https://shortly.com/pqr123",
    createdAt: "2024-02-23",
    expiresAt: "2025-02-23",
  },
  {
    id: "8",
    originalUrl: "https://recipes.example.com/vegetarian/healthy-lunch-ideas",
    shortUrl: "https://shortly.com/stu456",
    createdAt: "2024-02-24",
    expiresAt: "2025-02-24",
  },
  {
    id: "9",
    originalUrl: "https://store.example.com/items/long-url-for-item",
    shortUrl: "https://shortly.com/vwx789",
    createdAt: "2024-02-25",
    expiresAt: "2025-02-25",
  },
  {
    id: "10",
    originalUrl: "https://sports.example.com/live/match-details-sport-event",
    shortUrl: "https://shortly.com/yza123",
    createdAt: "2024-02-26",
    expiresAt: "2025-02-26",
  },
  {
    id: "11",
    originalUrl:
      "https://socialmedia.example.com/profile/username/long-profile-url",
    shortUrl: "https://shortly.com/bcd456",
    createdAt: "2024-02-27",
    expiresAt: "2025-02-27",
  },
  {
    id: "12",
    originalUrl: "https://portfolio.example.com/works/project-details",
    shortUrl: "https://shortly.com/efg789",
    createdAt: "2024-02-28",
    expiresAt: "2025-02-28",
  },
  {
    id: "13",
    originalUrl: "https://conference.example.com/schedule/speaker-info",
    shortUrl: "https://shortly.com/hij123",
    createdAt: "2024-02-29",
    expiresAt: "2025-02-29",
  },
  {
    id: "14",
    originalUrl: "https://community.example.com/posts/important-discussion",
    shortUrl: "https://shortly.com/klm456",
    createdAt: "2024-03-01",
    expiresAt: "2025-03-01",
  },
  {
    id: "15",
    originalUrl: "https://weather.example.com/forecast/long-term-weather",
    shortUrl: "https://shortly.com/nop789",
    createdAt: "2024-03-02",
    expiresAt: "2025-03-02",
  },
  {
    id: "16",
    originalUrl: "https://travel.example.com/destinations/long-trip-plan",
    shortUrl: "https://shortly.com/qrs123",
    createdAt: "2024-03-03",
    expiresAt: "2025-03-03",
  },
  {
    id: "17",
    originalUrl:
      "https://education.example.com/courses/advanced-python-programming",
    shortUrl: "https://shortly.com/tuv456",
    createdAt: "2024-03-04",
    expiresAt: "2025-03-04",
  },
  {
    id: "18",
    originalUrl: "https://events.example.com/concert/ticket-info",
    shortUrl: "https://shortly.com/wxy789",
    createdAt: "2024-03-05",
    expiresAt: "2025-03-05",
  },
  {
    id: "19",
    originalUrl: "https://library.example.com/books/new-releases/fiction-genre",
    shortUrl: "https://shortly.com/zab123",
    createdAt: "2024-03-06",
    expiresAt: "2025-03-06",
  },
  {
    id: "20",
    originalUrl: "https://tech.example.com/gadgets/new-laptop-review",
    shortUrl: "https://shortly.com/cde456",
    createdAt: "2024-03-07",
    expiresAt: "2025-03-07",
  },
  {
    id: "21",
    originalUrl: "https://finance.example.com/investments/real-estate-tips",
    shortUrl: "https://shortly.com/fgh789",
    createdAt: "2024-03-08",
    expiresAt: "2025-03-08",
  },
  {
    id: "22",
    originalUrl: "https://health.example.com/wellness/exercise-for-beginners",
    shortUrl: "https://shortly.com/ijk123",
    createdAt: "2024-03-09",
    expiresAt: "2025-03-09",
  },
  {
    id: "23",
    originalUrl: "https://music.example.com/albums/new-release-rock",
    shortUrl: "https://shortly.com/lmn456",
    createdAt: "2024-03-10",
    expiresAt: "2025-03-10",
  },
  {
    id: "24",
    originalUrl: "https://technews.example.com/articles/latest-trends-in-ai",
    shortUrl: "https://shortly.com/opq789",
    createdAt: "2024-03-11",
    expiresAt: "2025-03-11",
  },
  {
    id: "25",
    originalUrl: "https://movies.example.com/reviews/latest-action-movie",
    shortUrl: "https://shortly.com/rst123",
    createdAt: "2024-03-12",
    expiresAt: "2025-03-12",
  },
  {
    id: "26",
    originalUrl:
      "https://art.example.com/galleries/contemporary-art-collection",
    shortUrl: "https://shortly.com/uvw456",
    createdAt: "2024-03-13",
    expiresAt: "2025-03-13",
  },
  {
    id: "27",
    originalUrl: "https://books.example.com/reviews/fiction-best-sellers",
    shortUrl: "https://shortly.com/xyz789",
    createdAt: "2024-03-14",
    expiresAt: "2025-03-14",
  },
  {
    id: "28",
    originalUrl: "https://fitness.example.com/workouts/home-fitness-routines",
    shortUrl: "https://shortly.com/abc456",
    createdAt: "2024-03-15",
    expiresAt: "2025-03-15",
  },
  {
    id: "29",
    originalUrl:
      "https://gaming.example.com/articles/video-game-genre-explained",
    shortUrl: "https://shortly.com/def789",
    createdAt: "2024-03-16",
    expiresAt: "2025-03-16",
  },
  {
    id: "30",
    originalUrl:
      "https://automotive.example.com/reviews/car-reviews/2024-models",
    shortUrl: "https://shortly.com/ghi123",
    createdAt: "2024-03-17",
    expiresAt: "2025-03-17",
  },
];

export function UrlTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

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
                No URLs found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 border-t p-4">
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
  );
}
