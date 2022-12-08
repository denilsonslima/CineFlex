import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function Confirmacao({ infoFilme }) {
    const [confirmacao, setConfirmacao] = useState(null)
    const dados = {
        ids: infoFilme.id,
        name: infoFilme.pessoa,
        cpf: infoFilme.cpf
    }

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`
        const promisse = axios.post(url, dados)
        promisse.then(e => setConfirmacao(e.data))
        promisse.catch(res => console.log(res))
    }, [])

    if (confirmacao === null) {
        return (
            <Loading />
        )
    }

    return (
        <Main>
            <div>
                <h2>Pedido feito <br /> com sucesso!</h2>
            </div>
            <Corpo>
                <section data-test="movie-info">
                    <h3 className="p">Filme e sessão</h3>
                    <p>{infoFilme.name}</p>
                    <p>{`${infoFilme.data}  ${infoFilme.hora}`}</p>
                </section>
                <section data-test="seats-info" >
                    <h3>Ingressos</h3>
                    {infoFilme.assento.map(e =>
                        <p key={e}>{`Assento: ${e}`}</p>
                    )}
                </section>
                <section data-test="client-info">
                    <h3>Comprador</h3>
                    <p>{`Nome: ${infoFilme.pessoa}`}</p>
                    <p>{`CPF: ${infoFilme.cpf}`}</p>
                </section>
            </Corpo>
            <Link data-test="go-home-btn" className="o" to={"/"}>
                <Enviar>Voltar pra Home</Enviar>
            </Link>
        </Main>
    )
}


const Main = styled.div`
    padding-bottom: 30px;
    & div {
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
        color: #247A6B;
    }

    .o {
        text-decoration: none;
    }
`

const Corpo = styled.section`   
    padding-left: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.04em;
    font-size: 22px; 
    font-weight: 400;
    color: #293845;
    h3 {
        font-size: 24px;
        font-weight: 700;
        color: #293845;
        margin-bottom: 10px;
        margin-top: 50px;
        color: #293845;
    }

    .p {
        margin-top: 0px;
    }

`

const Enviar = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 57px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin-left: calc(50vw - 225px/2);
`