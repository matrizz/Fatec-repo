import Link from "next/link";
import { getDisciplinas } from "@/lib/getData";
import Breadcrumb from "./components/ui/breadcrumb";

export default function Home() {
  const disciplinas = getDisciplinas()

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4 text-center">Meu portifólio Fatec</h1>
      <Breadcrumb home label="Disciplinas" />
      <div>
        <ul>
          {disciplinas.map((d) => (
            <li key={d}>
              <Link className="text-lg px-2 font-bold" href={`/disciplina/${d}`}>
                {
                  d.replaceAll('-', ' ')
                    .replace('cao', 'ção').replace('Informatica', 'Informática') + ' /'}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
