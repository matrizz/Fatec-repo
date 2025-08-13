import Breadcrumb from "@/app/components/ui/breadcrumb";
import BreadcrumbItem from "@/app/components/ui/breadcrumb-item";
import { truncate } from "@/lib/truncate";

interface AulaPageProps {
    disciplina: string;
    aula: string;

}

export default async function AulaPage({params}: any) {
    const { disciplina, aula } = await params as AulaPageProps

    return (
        <div className="p-5">
            <Breadcrumb home label='Disciplinas'>
                <BreadcrumbItem href={`/disciplina/${disciplina}`} label={truncate(disciplina, 20)} />
                <BreadcrumbItem href={`/disciplina/${disciplina}/${aula}`} label={truncate(aula, 20)} />
            </Breadcrumb>
            <h1>{disciplina} - {aula}</h1>
            <iframe
                src={`/fatec/${disciplina}/${aula}/index.html`}
                className="mt-4 w-full h-[90vh] border-0 bg-white rounded-md"
            />
        </div>
    )
}
