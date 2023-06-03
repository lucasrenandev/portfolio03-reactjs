import styled from "styled-components";

export const About = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 3rem;
    }
`
export const AboutImage = styled.figure`

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
export const AboutText = styled.main`

`
export const H3 = styled.h3`
    color: var(--main-color);
    font-size: 1rem;
    font-weight: 600;
`   
export const H2 = styled.h2`
    font-size: var(--h2-font);
    font-weight: 700;
    text-transform: capitalize;
    line-height: 1.5;
    margin-bottom: 20px;
`
export const Paragraph = styled.p`
    color: #717173;
    font-size: var(--p-font);
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 1.5rem;
`
export const Button = styled.a`
    background-color: var(--main-color);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 400;
    color: var(--bg-color);
    transition: all 0.45s ease;

    &:hover {
        transform: scale(1.15);
        opacity: 0.8;
    }
`