import styled from "styled-components";

export const Contact = styled.section`

`
export const CenterText = styled.header`

`
export const ContactContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-top: 4rem;
`
export const Box = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.03);
`
export const Icon = styled.i`
    display: inline-flex;
    width: 48px;
    height: 48px;
    background-color: var(--main-color);
    border-radius: 50%;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

`
export const H6 = styled.h6`
    font-size: 24px;
    font-weight: 500;
    margin: 18px 0 18px;
`
export const Paragraph = styled.p`
    font-size: var(--p-font);
    font-weight: 500;
    line-height: 1.8;
`