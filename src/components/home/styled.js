import styled from "styled-components";

export const Home = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: center;
        height: 100%;
        gap: 2rem;
    }
`
export const HomeText = styled.main`
    @media (max-width: 900px) {
        padding-top: 2em;
    }
`
export const H3 = styled.h3`
    color: var(--main-color);
    font-size: 1.4rem;
    font-weight: 500;

    @media (max-width: 400px) {
        font-size: 1.3rem;
    }
`
export const H1 = styled.h1`
    font-size: var(--h1-font);
    font-weight: 700;
    line-height: 1.4;
    margin: 15px 0 25px;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 300;
    color: #717173;
    line-height: 1.8;
    margin-bottom: 1.5rem;
`
export const Button = styled.a`
    background-color: var(--main-color);
    padding: 10px 30px;
    border-radius: 30px;
    color: var(--bg-color);
    font-size: 16px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    transition: all 0.45s ease;

    &:hover {
        transform: scale(1.15);
        opacity: 0.8;
    }
`
export const Icon = styled.i`
    margin-right: 10px;
    font-size: 18px;
`
export const HomeImage = styled.figure`
    text-align: center;
`
export const Image = styled.img`
    width: 420px;
    height: auto;

    @media (max-width: 500px) {
        width: 320px;
    }
    @media (max-width: 400px) {
        width: 250px;
    }
`