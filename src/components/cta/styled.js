import styled from "styled-components";
import ctaImage from "../../assets/intro.png"

export const Cta = styled.section`
    display: flex;
    justify-content: center;
`
export const CtaContainer = styled.main`
    background: var(--main-color) url(${ctaImage}) no-repeat center center / cover;
    width: 830px;
    max-width: 100%;
    height: 230px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2%;

    @media (max-width: 762px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 2rem;
    }
`
export const CtaText = styled.div`

`
export const H2 = styled.h2`
    color: #fff;
    font-size: 35px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 15px;

    @media (max-width: 762px) {
        line-height: 1;
    }

    @media (max-width: 500px) {
        font-size: 24px;
    }
`
export const H5 = styled.h5`
    color: #fff;
    font-size: var(--p-font);
    font-weight: 300;
`
export const Button = styled.button`
    background-color: #fff;
    padding: 11px 35px;
    border: none;
    border-radius: 30px;
    font-size: var(--p-font);
    font-weight: 500;
    text-transform: uppercase;
    color: var(--main-color);
    cursor: pointer;
`