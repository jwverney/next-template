import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";


export default function DynamicTable({
  columns,
  data,
  onRowClick,
  title,
  sortColumn,
  setSortColumn,
  sortOrder,
  setSortOrder,
}) {
  const handleSort = (key) => {
    if (sortColumn === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(key);
      setSortOrder("asc");
    }
  };

  const compareFunction = (a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue === bValue) return 0;

    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : 1;
    } else {
      return aValue > bValue ? -1 : 1;
    }
  };
  const sortedData = [...data].sort(compareFunction);

  return (
    <div className="p-5 rounded w-full h-fit">
      <div>
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-white-300 text-sm">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.key}
                      onClick={() => col.onClick && col.onClick()}
                      className={`${col.className} cursor-pointer`}
                    >
                      <span className="flex items-center">
                        {col.label}
                        {sortColumn === col.key && (
                          sortOrder === "asc" ? <ChevronUpIcon className="w-4 h-4 ml-2" /> : <ChevronDownIcon className="w-4 h-4 ml-2" />
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-50 text-gray-800">
                {sortedData.map((item) => {
                  return (
                    <tr
                      key={item.id}
                      className="cursor-pointer hover:bg-blue-100 text-sm"
                    >
                      {columns.map((col) =>
                        col.key === "assignee" ? (
                          <td key={col.key} className={col.dataClassName}>
                            {col.render
                              ? item[col.key]
                                ? col.render(item[col.key], item)
                                : null
                              : item[col.key]}
                          </td>
                        ) : (
                          <td
                            key={col.key}
                            className={col.dataClassName}
                            onClick={() => onRowClick(item)}
                          >
                            {col.render ? col.render(item) : item[col.key]}
                          </td>
                        )
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
