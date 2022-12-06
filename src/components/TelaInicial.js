import styled from "styled-components"

export default function TelaInicial() {
    return (
        <Main>
            <div>
                <h2>Selecione o filme</h2>
            </div>
            <ul>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
                <li><div></div></li>
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
            & div {
                width: 129px;
                height: 193px;
                background-image: url("https://capas-p.imagemfilmes.com.br/164717_000_p.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }

`