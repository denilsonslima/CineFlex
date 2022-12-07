import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Horario({ filmeEscolhido }) {
    const [imagem, setImagem] = useState(null)

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeEscolhido.id}/showtimes`
        const promisse = axios.get(url)
        promisse.then(e => setImagem(e.data.days))
        promisse.catch(res => console.log(res))
    }, [])

    if (imagem === null) {
        return (
            <Loading />
        )
    }

    return (
        <Main>
            <div className="horario">Selecione o horário</div>
            {imagem.map(e => (
                <section key={e.id}>
                    <h3>{`${e.weekday} - ${e.date}`}</h3>
                    <div className="hora">
                        <button>14:00</button>
                        <button>14:00</button>
                    </div>
                </section>
            ))}
            <footer>
                <div>
                    <img src={filmeEscolhido.posterURL} alt="Imagem Filme" />
                </div>
                <h4>{filmeEscolhido.title}</h4>
            </footer>
        </Main>
    )
}

const Main = styled.div`
    padding-bottom: 125px;

    .horario {
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
    }

    section {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 23px;
        h3 {
            height: 35px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
            color: #293845;
            margin-bottom: 22px;
        }

        .hora {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        button {
            width: 83px;
            height: 43px;
            background: #E8833A;
            border-radius: 3px;
            color: #fff;
            border: none;
        }
    }

    footer {
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
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
        }
    }
`