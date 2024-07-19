import clsx from "clsx";
import { Formatter } from "common/src/Formatter";
import Link from "next/link";
import { Registro } from "registro";
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ChevronRightIcon,
  PointIcon,
} from "../Icons";

interface TableItemProps {
  registro: Registro;
}

const URL_REGISTRO = process.env.NEXT_PUBLIC_PAGE_REGISTRO || "";

export function TableItem({ registro }: TableItemProps) {
  return (
    <div className="w-full bg-zinc-900 rounded-md flex items-center justify-between px-8 py-4">
      <div className="flex items-center justify-center gap-x-6">
        <span className="font-bold">
          <span className="text-zinc-500">#</span>
          {registro.id}
        </span>
        {/* <span className="text-sm text-zinc-500">{registro.tipo}</span> */}
        <span className="text-sm text-zinc-500">
          {registro.data.toLocaleDateString("pt-br")}
        </span>
        <span className="text-sm text-zinc-400 capitalize">
          {registro.descricao}
        </span>
      </div>

      <div className="flex items-center justify-center gap-x-8">
        <span className="font-bold flex items-center justify-end gap-x-1">
          <span>
            {registro.tipo === "receita" ? (
              <ArrowTrendingUpIcon className="size-5 stroke-green-500 stroke-2" />
            ) : (
              <ArrowTrendingDownIcon className="size-5 stroke-red-500 stroke-2" />
            )}
          </span>
          {registro.valor &&
            Formatter.moneyNumberToDisplayCurrencyBRL(registro.valor)}
        </span>
        <span
          className={clsx(
            "px-4 py-2 rounded-md font-bold flex items-center justify-center capitalize w-40 text-center",
            {
              "text-green-500 bg-verdefundo": registro.status === "consolidado",
              "text-red-500 bg-vermelhofundo": registro.status === "cancelado",
              "text-yellow-500 bg-amarelofundo": registro.status === "pendente",
            }
          )}
        >
          <span>
            <PointIcon className="size-5" />
          </span>
          {registro.status}
        </span>
        <Link href={`${URL_REGISTRO}/${registro.id}`}>
          <ChevronRightIcon className="size-5 hover:stroke-zinc-400 stroke-zinc-500 transitions" />
        </Link>
      </div>
    </div>
  );
}
