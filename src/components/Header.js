import styled from "styled-components"

export default function Header() {
    return (
        <Nav>
            CineFlex
        </Nav>
    )
}


const Nav = styled.div`  
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 67px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
`