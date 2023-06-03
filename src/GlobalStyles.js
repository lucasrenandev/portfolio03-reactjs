import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
        --main-color: #f25341;
        --text-color: #35404e;
        --bg-color: #f9f9ff;
        --h1-font: 3.6rem;
        --h2-font: 2.26rem;
        --p-font: 1rem;

        @media (max-width: 500px) {
            --h1-font: 3rem;
            --h2-font: 2rem;
        }
        @media (max-width: 400px) {
            --h1-font: 2.3rem;
            --h2-font: 1.8rem;
            --p-font: 0.9rem;
        }
    }

    #root {
        min-height: 100vh;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    img, a, button {
        display: inline-block;
    }

    section {
        width: 100%;
        padding: 100px 16% 90px;

        @media (max-width: 1206px) {
            padding: 100px 2% 90px;
        }
        @media (max-width: 900px) {
            padding: 80px 2% 70px;
        }
        @media (max-width: 500px) {
            padding: 70px 2% 60px;
        }
    }

    .center-text {
        text-align: center;
    }

    .center-text h3 {
        color: var(--main-color);
        font-size: var(--p-font);
        font-weight: 600;
    }

    .center-text h2 {
        font-size: var(--h2-font);
        font-weight: 700;
        text-transform: capitalize;
        line-height: 1.5;
    }

` 