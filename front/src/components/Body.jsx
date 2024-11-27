import React from "react";
import { ButtonVoltar, Divtitulo, TituloRelatorio, DivTreinamento, DivSemTreinamento, Subtitulo, DivFiltro, SelectFiltro, DivButton, ButtonFiltro } from "../styles/style";

function gerarCategorias(categorias) {
    const select = document.getElementsById('select')
    categorias.map((categorias) => {
        const option = document.createElement('option')
        option.innerHTML = `eu`
        option.value = categorias
        select.appendChild(option)
    })
    
}

const Body = () => {
    return (
        <>
            <ButtonVoltar href="PáginaInicial">Voltar</ButtonVoltar>
            <Divtitulo>
                <TituloRelatorio>Relatorio de Busca</TituloRelatorio>
            </Divtitulo>
            <DivFiltro>
                <span>Filtro</span>
                <SelectFiltro name="select" id="select">
                </SelectFiltro>
                <ButtonFiltro id="btn" class="btn">Confirmar</ButtonFiltro>
            </DivFiltro>
            <DivTreinamento>
                <Subtitulo>Em treinamento</Subtitulo>
            </DivTreinamento>
            <DivSemTreinamento>
                <Subtitulo>Não tem a obrigatoriedade desse treinamento</Subtitulo>
            </DivSemTreinamento>
        </>
    )
}

export default Body