import { useMemo, useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Account } from "../makeChatData";

const QueryTable = ({ accounts }: { accounts: Account[] }) => {
  const [data, setData] = useState<Account[]>(accounts);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Account>[]>(
    () => [
      {
        header: "",
        accessorKey: "id",
        cell: (info) => info.getValue(),
      },
      {
        header: "Name",
        accessorKey: "name",
        cell: (info) => info.getValue(),
      },
      {
        header: "Industry",
        accessorKey: "industry",
        cell: (info) => info.getValue(),
      },
      {
        header: "City",
        accessorKey: "city",
        cell: (info) => info.getValue(),
      },
      {
        header: "State",
        accessorKey: "state",
        cell: (info) => info.getValue(),
      },
      {
        header: "Segment",
        accessorKey: "segment",
        cell: (info) => info.getValue(),
      },
      {
        header: "Owner ID",
        accessorKey: "ownerId",
        cell: (info) => info.getValue(),
      },
    ],
    []
  );
  console.log(accounts);
  const table = useReactTable({
    columns,
    data,
    debugTable: true,
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: data.length,
  });
  return (
    <div>
      <table className="bg-white rounded-md">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-3 text-start border-b border-gray-200 text-gray-500 font-normal"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-200">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
export default QueryTable;
