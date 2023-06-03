import { About, AboutImage, Image, AboutText,
H3, H2, Paragraph, Button } from "./styled";
import aboutImage from "../../assets/about.svg"

export default function about() {
    return(
        <About id="about">
            <AboutImage>
                <Image src={aboutImage} alt="About image"/>
            </AboutImage>

            <AboutText>
                <H3>About us</H3>
                <H2>Working with passion</H2>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, consectetur qui totam repellat vitae recusandae enim porro nulla itaque, autem rerum accusamus quisquam fugit exercitationem provident saepe aut. Animi id quibusdam neque recusandae temporibus commodi, voluptatum quis corporis, porro aperiam, at ullam doloremque saepe! Blanditiis, aliquam deleniti, impedit cumque dolorum magni inventore eius, aut amet rem doloribus est quas necessitatibus quibusdam nam ullam cum omnis.</Paragraph>
                <Button href="#">Let's work</Button>
            </AboutText>
        </About>
    )
}