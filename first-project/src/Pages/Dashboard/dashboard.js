import React, { useState } from "react";
import Button from "../../components/Button/button";
import Input from "../../components/Input";

export default function Dashboard() {
  const [items, setItems] = useState([
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
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      title: e.target["title"].value,
      author: e.target["author"].value,
    };
    items.push(obj);
    setItems([...items]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-300 bg-slate-200 shadow-ad rounded px-8 pt-6 pb-8 mb-4">
        <Button
          type="button"
          size="large"
          className=""
          onClick={() => setIsModalOpen(true)}
        >
          Add
        </Button>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-600">Title</th>
              <th className="px-4 py-2 text-gray-600">Author</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
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
      <CreateModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        handleClick={handleClick}
      />
    </div>
  );
}

function CreateModal({ isModalOpen, setIsModalOpen, handleClick }) {
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm"></div>
      )}
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`fixed flex justify-center items-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
          isModalOpen ? "" : "hidden"
        }`}
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-gray-300 rounded-lg shadow">
            <button
              onClick={() => setIsModalOpen(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center"
              data-modal-hide="authentication-modal"
            >
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Add New Field
              </h3>
              <form className="space-y-6" onSubmit={handleClick}>
                <div className="mb-6">
                  <Input label="Title" name="title" id="title" />
                </div>
                <div className="mb-6">
                  <Input label="Author" name="author" id="author" />
                </div>
                <div className="flex justify-center items-center">
                  <Button type="submit" size="large" className="mr-3">
                    Add
                  </Button>
                  <Button
                    type="button"
                    size="large"
                    variant="danger"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
