import React, { useState } from "react";
import Button from "../../components/Button/button";
import Input from "../../components/Input";

export default function Dashboard() {
  const arr = [
    {
      id: 1,
      title: "Intro to CSS",
      author: "Ahmad",
    },
    {
      id: 2,
      title:
        "A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design",
      author: "Ahmad",
    },
    {
      id: 3,
      title: "Adding a new Row in the table",
      author: "Gulshair",
    },
  ];
  const [items, setItems] = useState(arr);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      id: items.length + 1,
      title: title,
      author: author,
    };

    setItems((prevItems) => [...prevItems, obj]);
    setIsModalOpen(false);
    reset();
  };

  const handleEdit = (id) => {
    const foundItem = items.find((item) => item.id === id);
    if (foundItem) {
      setTitle(foundItem.title);
      setAuthor(foundItem.author);
      setIsModalOpen(true);
    }
  };

  const reset = () => {
    setTitle("");
    setAuthor("");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    reset();
  };

  const handleDelete = (id) => {
    const filter = items.filter((item) => item.id !== id);
    setItems(filter);
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
              <th className="px-4 py-2 text-gray-600">Actions</th>
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
                <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                  <div className="flex justify-center items-center">
                    <Button
                      type="submit"
                      size="large"
                      className="mr-3"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      type="button"
                      size="large"
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateModal
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
        handleClick={handleClick}
        title={title}
        author={author}
        setTitle={setTitle}
        setAuthor={setAuthor}
      />
    </div>
  );
}

function CreateModal({
  isModalOpen,
  handleModalClose,
  handleClick,
  title,
  author,
  setTitle,
  setAuthor,
}) {
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
              onClick={handleModalClose}
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
                  <Input
                    label="Title"
                    name="title"
                    id="title"
                    value={title} // Make sure this value is set correctly
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <Input
                    label="Author"
                    name="author"
                    id="author"
                    value={author} // Make sure this value is set correctly
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    size="large"
                    className="mr-3"
                    onClick={handleClick}
                  >
                    Add
                  </Button>
                  <Button
                    type="button"
                    size="large"
                    variant="danger"
                    onClick={handleModalClose}
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
