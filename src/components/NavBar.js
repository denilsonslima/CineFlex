import styled from "styled-components"

export default function NavBar() {
    return (
        <Nav>
            CineFlex
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100vw;
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