import styled from "styled-components";
import workImage1 from "../../assets/work1.jpg"
import workImage2 from "../../assets/work2.jpg"
import workImage3 from "../../assets/work3.jpg"
import workImage4 from "../../assets/work4.jpg"
import workImage5 from "../../assets/work5.jpg"
import workImage6 from "../../assets/work6.jpg"

export const Portfolio = styled.section`

`
export const CenterText = styled.header`

`
export const PortfolioContainer = styled.main`
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
    position: relative;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);
    overflow: hidden;
    transition: background 0.8s ease;

    &:nth-child(1) {
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage1}) no-repeat center center;
        background-size: 500px;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage1}) no-repeat left center;
            background-size: 600px;

            @media (max-width: 762px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage1}) no-repeat left center;
                background-size: 750px;
            }
            @media (max-width: 500px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage1}) no-repeat left center;
                background-size: 450px;
            }
        }

        @media (max-width: 762px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage1}) no-repeat center center;
            background-size: 850px;
        } 
        @media (max-width: 500px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage1}) no-repeat center center;
            background-size: 550px;
        }
    }
    &:nth-child(2) {
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage2}) no-repeat center center;
        background-size: 500px;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage2}) no-repeat left center;
            background-size: 600px;

            @media (max-width: 762px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage2}) no-repeat left center;
                background-size: 750px;
            }
            @media (max-width: 500px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage2}) no-repeat left center;
                background-size: 450px;
            }
        }

        @media (max-width: 762px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage2}) no-repeat center center;
            background-size: 850px;
        } 
        @media (max-width: 500px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage2}) no-repeat center center;
            background-size: 550px;
        }
    }
    &:nth-child(3) {
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage3}) no-repeat center center;
        background-size: 500px;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage3}) no-repeat left center;
            background-size: 600px;

            @media (max-width: 762px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage3}) no-repeat left center;
                background-size: 750px;
            }
            @media (max-width: 500px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage3}) no-repeat left center;
                background-size: 450px;
            }
        }

        @media (max-width: 762px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage3}) no-repeat center center;
            background-size: 850px;
        }
        @media (max-width: 500px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage3}) no-repeat center center;
            background-size: 550px;
        }
    }
    &:nth-child(4) {
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage4}) no-repeat center center;
        background-size: 500px;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage4}) no-repeat left center;
            background-size: 600px;

            @media (max-width: 762px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage4}) no-repeat left center;
                background-size: 750px;
            }
            @media (max-width: 500px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage4}) no-repeat left center;
                background-size: 450px;
            }
        }

        @media (max-width: 762px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage4}) no-repeat center center;
            background-size: 850px;
        }
        @media (max-width: 500px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage4}) no-repeat center center;
            background-size: 550px;
        }
    }
    &:nth-child(5) {
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage5}) no-repeat center center;
        background-size: 500px;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage5}) no-repeat left center;
            background-size: 600px;

            @media (max-width: 762px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage5}) no-repeat left center;
                background-size: 750px;
            }
            @media (max-width: 500px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage5}) no-repeat left center;
                background-size: 450px;
            }
        }

        @media (max-width: 762px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage5}) no-repeat center center;
            background-size: 850px;
        }
        @media (max-width: 500px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage5}) no-repeat center center;
            background-size: 550px;
        }
    }
    &:nth-child(6) {
        background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage6}) no-repeat center center;
        background-size: 500px;

        &:hover {
            background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage6}) no-repeat left center;
            background-size: 600px;

            @media (max-width: 762px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage6}) no-repeat left center;
                background-size: 750px;
            }
            @media (max-width: 500px) {
                background: linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.7)), url(${workImage6}) no-repeat left center;
                background-size: 450px;
            }
        }

        @media (max-width: 762px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage6}) no-repeat center center;
            background-size: 850px;
        }
        @media (max-width: 500px) {
            background: linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)), url(${workImage6}) no-repeat center center;
            background-size: 550px;
        }
    }

`
export const Text = styled.div`
    position: absolute;
    bottom: 45px;
    left: 25px;
    padding-right: 10px;
`
export const H5 = styled.h5`
    color: #c6c9d8;
    font-size: 16px;
    font-weight: 500;
`
export const H4 = styled.h4`
    color: #fff;
    font-size: 27px;
    font-weight: 600;
    margin: 10px 0 18px;
`
export const Button = styled.button`
    background-color: var(--main-color);
    border: 2px solid transparent;
    padding: 8px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.45s ease;

    &:hover {
        background-color: transparent;
        border: 2px solid #fff;
    }
`