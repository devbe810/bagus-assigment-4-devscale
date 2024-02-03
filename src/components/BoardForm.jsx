"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { PiCursorClickFill } from "react-icons/pi";
import toast from "react-hot-toast";
import Confetti from "react-confetti";

// export const BoardConfetti = () => {
//   const { width, height } = useWindowSize();
//   return <Confetti width={width} height={height} />;
// };

export const BoardForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isConfetti, SetisConfetti] = useState(false);
  const [content, setContent] = useState("");
  const [Loading, setLoading] = useState(false);

  async function handleCreateBoard() {
    setLoading(true);
    const res = await fetch("https://v1.appbackend.io/v1/rows/xzQNba5z6jAs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify([{ name, content }]),
    });
    const data = await res.json();
    router.refresh();
    setLoading(false);
    SetisConfetti(true);
    setTimeout(() => {
      SetisConfetti(false);
    }, 3000);
    toast.success("Curhatan Berhasil Dikirim");
    setName("");
    setContent("");
  }

  return (
    <main className="max-w-xl m-auto">
      <input
        type="text"
        placeholder="Silahkan Isi Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Isi Curhatan Disini"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        disabled={Loading}
        onClick={handleCreateBoard}
        className="flex gap-2 justify-between m-5"
      >
        Kirim Curhatan
        <span className="px-1">
          <PiCursorClickFill size={20}> </PiCursorClickFill>
        </span>
      </button>
      {isConfetti && <Confetti />}
    </main>
  );
};
