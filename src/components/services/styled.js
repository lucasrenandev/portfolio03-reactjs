import styled from "styled-components";

export const Services = styled.section`

`
export const CenterText = styled.header`

`
export const ServicesContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    }
`
export const Box = styled.div`
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    border-bottom: 2px solid transparent;
    transition: all 0.45s ease;

    &:hover {
        transform: scale(1.1);
        border-bottom: 2px solid var(--main-color);
    }

    @media (max-width: 400px) {
        padding: 50px 35px;
    }
`
export const Icon = styled.i`
    color: var(--main-color);
    font-size: 50px;
`
export const H4 = styled.h4`
    font-size: 25px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 15px;
`
export const Paragraph = styled.p`
    color: #717173;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.8;
`