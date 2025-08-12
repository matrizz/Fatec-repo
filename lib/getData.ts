import fs from "fs";
import path from "path";

const fatecDir = path.join(process.cwd(), "public", "fatec")

export function getDisciplinas() {
    return fs.readdirSync(fatecDir).filter((d) => {
        return fs.statSync(path.join(fatecDir, d)).isDirectory()
    })
}

export function getAulas(disciplina: string) {
    const disciplinaDir = path.join(fatecDir, disciplina)
    return fs.readdirSync(disciplinaDir).filter((a) => {
        return fs.statSync(path.join(disciplinaDir, a)).isDirectory()
    })
}
