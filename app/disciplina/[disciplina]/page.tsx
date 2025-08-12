import Link from "next/link";
import { getAulas } from "@/lib/getData";
import Breadcrumb from "@/app/components/ui/breadcrumb";
import BreadcrumbItem from "@/app/components/ui/breadcrumb-item";

interface DisciplinaPageProps {
    disciplina: string;
}

export default function DisciplinaPage(params: any) {
    const aulas = getAulas((params as DisciplinaPageProps).disciplina);

    return (
        <div className="p-5">
            <Breadcrumb home label='Disciplinas'>
                <BreadcrumbItem href={`/disciplina/${params.disciplina}`} label={params.disciplina} />
            </Breadcrumb>
            <div>
                <ul>
                    {aulas.map((a) => (
                        <li key={a}>
                            <Link className="text-lg px-2 font-bold" href={`/disciplina/${params.disciplina}/${a}`}>{a}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
