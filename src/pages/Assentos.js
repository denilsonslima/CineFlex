import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom"

export default function Assentos({ infoFilme }) {
    const [imagem, setImagem] = useState(null)
    const { idSessao } = useParams()

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        const promisse = axios.get(url)
        promisse.then(e => setImagem(e.data))
        promisse.catch(res => console.log(res))
    }, [])

    if (imagem === null) {
        return (
            <Loading />
        )
    }

    if (imagem !== null) {
        console.log(imagem)
    }


    return (
        <Main>
            <Titulo>
                <h2>Selecione o(s) assento(s)</h2>
            </Titulo>
            <Botoes>
                {imagem.seats.map(e => (
                    <button
                        key={e.id}
                        className={e.isAvailable ? "disponivel" : "indisponivel"}
                    >
                        {e.name}
                    </button>
                ))}
            </Botoes>
            <Select>
                <div>
                    <button></button>
                    <p>Selecionado</p>
                </div>
                <div>
                    <button></button>
                    <p>Disponível</p>
                </div>
                <div>
                    <button></button>
                    <p>Indisponível</p>
                </div>
            </Select>
            <Inputs>
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." name="primeiroInput" />
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />
            </Inputs>
            <Footer>
                <div>
                    <img src={infoFilme.url} alt="Imagem Filme" />
                </div>
                <ul>
                    <h4>{infoFilme.name}</h4>
                    <h4>{`${infoFilme.dia} - ${infoFilme.hora}`}</h4>
                </ul>
            </Footer>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 125px;
`

const Titulo = styled.div`
    width: 100%;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
`

const Botoes = styled.div`
    width: 327px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 18px 7px;
    margin-bottom: 14px;
    button {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        color: #000000;
    }

    button.disponivel {
        background: #C3CFD9;
        border: 1px solid #808F9D;
    }

    button.indisponivel {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
`

const Select = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 16px;
    margin-bottom: 40px;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
        button {
            width: 25px;
            height: 25px;
            border-radius: 17px;
        }
        p {
            height: 28px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            align-items: center;
            letter-spacing: -0.013em;
            color: #4E5A65;
        }
        :nth-child(1) button {
            background: #1AAE9E;
            border: 1px solid #0E7D71;
        }

        :nth-child(2) button {
            background: #C3CFD9;
            border: 1px solid #7B8B99;
        }

        :nth-child(3) button {
            background: #FBE192;
            border: 1px solid #F7C52B;
        }
    }
`

const Inputs = styled.div`
    width: 327px;
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #293845;
        margin-bottom: 2px;
    } 

    input {
        width: 100%;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 7px;
        padding-left: 18px;
    }

    input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }

`
const Footer = styled.footer`
    display: flex;
    align-items: center;  
    gap: 15px;
    width: 100%;
    height: 117px;
    position: fixed;
    bottom: 0;
    background: #DFE6ED;
    border: none;
    border-top: 1px solid #9EADBA;
    padding: 14px 20px 14px 10px;
    div { 
        gap: 15px;
        width: 64px;
        height: 89px;
        padding: 8px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        img {
            width: 48px;
            height: 72px;
        }
    }

    h4 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /* display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  */
    }
`