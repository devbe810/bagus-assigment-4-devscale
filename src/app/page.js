import { Header } from "@/components/Header";
import { BoardForm } from "@/components/BoardForm";
import { GridBoard } from "@/components/GridBoard";
import { CreateBoard } from "@/components/CreateBoard";
import { NavBoard } from "@/components/NavBoard";

async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/xzQNba5z6jAs", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="m-auto space-y-12 mb-64">
      <NavBoard />
      <Header />
      <BoardForm />
      <GridBoard />
      <CreateBoard data={data} />
    </main>
  );
}
