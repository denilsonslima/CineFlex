import styled from "styled-components"
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function TelaInicial({setInfoFilme}) {
    const [imagem, setImagem] = useState(null)

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies`
        const promisse = axios.get(url)
        promisse.then(e => setImagem(e.data))
        promisse.catch(res => console.log(res))
    }, [])

    if (imagem === null) {
        return (
            <Loading />
        )
    }

    return (
        <Main>
            <div>
                <h2>Selecione o filme</h2>
            </div>
            <ul>
                {imagem.map(e =>
                    <Link
                        key={e.id}
                        to={`/sessoes/${e.id}`}
                        onClick={() => setInfoFilme({name: e.title, url: e.posterURL})}
                    >
                        <li>
                            <img src={e.posterURL} alt={e.title} />
                        </li>
                    </Link>

                )}
            </ul>
        </Main>
    )
}


const Main = styled.div`
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
        color: #293845;
    }
    
    & ul {
        min-width: 300px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 11px 30px;
        padding-bottom: 20px;
        & li {
            width: 145px;
            height: 210px;
            background: #FFFFFF;
            box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            padding: 8px;
            & img {
                max-width: 129px;
                height: 193px;
            }
        }
    }

`