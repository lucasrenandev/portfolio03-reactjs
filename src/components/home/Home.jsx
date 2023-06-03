import { Home, HomeText, H3, H1, Paragraph,
Button, Icon, HomeImage, Image } from "./styled";
import { BiPhone}  from "react-icons/bi"
import mainImage from "../../assets/main.svg"

export default function home() {
    return(
        <Home id="home">
            <HomeText>
                <H3>Hello guys!</H3>
                <H1>I'm Elizabeth Elmiz, a UI/UX Designer</H1>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates veritatis laboriosam possimus qui delectus earum?</Paragraph>
                <Button href="#">
                    <Icon>
                        <BiPhone/>
                    </Icon>
                    Call me
                </Button>
            </HomeText>

            <HomeImage>
                <Image src={mainImage} alt="Main image"/>
            </HomeImage>
        </Home>
    )
}