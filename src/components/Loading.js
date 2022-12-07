import loading from "../assets/img/loading.gif"
import styled from "styled-components"

export default function Loading(){
    return (
        <Gif><img src={loading} alt="" /></Gif>
    )
}

const Gif = styled.div` 
    width: 100%;
    height: calc(100vh - 67px);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 150px;
    }
`