"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const GridBoard = ({ item }) => {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(item?.name);
  const [content, setContent] = useState(item?.content);

  async function handleDelete() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/xzQNba5z6jAs", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item?._id]),
    });
    const data = await res.json();
    router.refresh();
    toast.success("Berhasil Dihapus");
  }

  async function handleUpdate() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/xzQNba5z6jAs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: item._id, name, content }),
    });
    const data = await res.json();
    router.refresh();
    setEditMode(false);
    toast.success("Yey Berhasil Update");
  }

  if (editMode) {
    return (
      <main className="rounded-lg bg-slate-100 bg-opacity-70 p-7">
        <h3 className="text-black">Edit Curhatan</h3>
        <input
          type="text"
          placeholder="Masukan Nama "
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginLeft: "0px" }}
        />
        <textarea
          placeholder="Isi Curhatan Disini"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ marginLeft: "0px" }}
        />
        <button onClick={handleUpdate}>Update</button>
      </main>
    );
  }

  return (
    <>
      {item && (
        <div
          className="gap-3 flex flex-col rounded-lg bg-black bg-opacity-60 p-7 cursor-pointer transition duration-150 ease-out hover:ease-in cursor-pointer hover:scale-[1.03] disabled:opacity-40 disabled:cursor-wait"
          // style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <h3 className="font-semi-bold text-white">{item.name}</h3>
            <p className="font-semi-bold text-white">
              {item.content.length > 100
                ? `${item.content.slice(0, 100)}...`
                : item.content}
            </p>
          </div>
          <span className="mt-auto space-x-2">
            <button onClick={handleDelete} className="mr-2 bg-red-600/30">
              Delete
            </button>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </span>
        </div>
      )}
    </>
  );
};
