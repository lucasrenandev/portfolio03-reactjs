import { Contact, CenterText, ContactContainer,
Box, Icon, H6, Paragraph } from "./styled";
import { BiPhone } from "react-icons/bi"
import { BiEnvelope } from "react-icons/bi"
import { BiCurrentLocation } from "react-icons/bi"

export default function contact() {
    return(
        <Contact id="contact">
            <CenterText className="center-text">
                <h3>Contact me</h3>
                <h2>I'm always open to discussion time spend</h2>
            </CenterText>

            <ContactContainer>
                <Box>
                    <Icon>
                        <BiPhone/>
                    </Icon>
                    <H6>Phone</H6>
                    <Paragraph>(+880) 16468957</Paragraph>
                    <Paragraph>(+880) 00000055</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiEnvelope/>
                    </Icon>
                    <H6>Email</H6>
                    <Paragraph>exampleone@gmail.com</Paragraph>
                    <Paragraph>exampletwo@gmail.com</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiCurrentLocation/>
                    </Icon>
                    <H6>Location</H6>
                    <Paragraph>140 East Lamapara</Paragraph>
                    <Paragraph>Golapganj, sylhet</Paragraph>
                </Box>
            </ContactContainer>
        </Contact>
    )
}