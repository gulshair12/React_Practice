import React from "react";

export default function Dashboard() {
  const arr = [
    {
      title: "Intro to CSS",
      author: "Ahmad",
    },
    {
      title:
        "A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design",
      author: "Ahmad",
    },
    {
      title: "Adding a new Row in the table",
      author: "Gulshair",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-300 bg-slate-200 shadow-ad rounded px-8 pt-6 pb-8 mb-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-600">Title</th>
              <th className="px-4 py-2 text-gray-600">Author</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  {item.title}
                </td>
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  {item.author}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
