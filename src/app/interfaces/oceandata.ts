import { Especies } from "./especie"
import { ProjetoConservacao } from "./projetoconservacao"

export type OceanData = {
    regiao: string | null,
    temperaturaAgua: number,
    pH: number,
    nivelPoluicao: string | null,
    especies: (Especies | null)[] | null,
    projetosConservacao: (ProjetoConservacao | null)[] | null
}