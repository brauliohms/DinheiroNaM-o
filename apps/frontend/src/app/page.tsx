// "use client";
import { Header, Table, Vazio } from "@/components/Home";
import { ObterRegistrosController } from "@/controllers";
// import { useEffect, useState } from "react";
// import { Registro } from "registro";

interface HomeProps {
  searchParams?: { status?: string };
}

export default async function Home({ searchParams }: HomeProps) {
  const registros = await ObterRegistrosController(searchParams?.status);

  // Utilizado para o filtro Status por Client-side
  // const [registros, setRegistros] = useState<Registro[]>([]);
  // async function getRegistros(filtro: string = "Todos") {
  //   const registros = await ObterRegistrosController(filtro);
  //   setRegistros(registros);
  // }
  // useEffect(() => {
  //   getRegistros();
  // }, []);

  return (
    <section className="w-full flex min-h-screen flex-col items-start justify-start sm:items-center py-8 sm:p-24 text-white gap-y-8">
      <Header
        quantidadeRegistros={registros.length}
        // handleFiltroStatus={getRegistros}
      />
      {registros.length > 0 ? <Table registros={registros} /> : <Vazio />}
    </section>
  );
}
