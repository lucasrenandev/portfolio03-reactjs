import { Services, CenterText, ServicesContainer, 
Box, Icon, H4, Paragraph } from "./styled";
import { BiCast } from "react-icons/bi"
import { BiLayer } from "react-icons/bi"
import { BiUserVoice } from "react-icons/bi"
import { BiDesktop } from "react-icons/bi"
import { BiCamera } from "react-icons/bi"
import { BiLineChart } from "react-icons/bi"

export default function services() {
    return(
        <Services id="services">
            <CenterText className="center-text">
                <h3>Services</h3>
                <h2>My awesome services</h2>
            </CenterText>

            <ServicesContainer>
                <Box>
                    <Icon>
                        <BiCast/>
                    </Icon>
                    <H4>Business stratagy</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiLayer/>
                    </Icon>
                    <H4>Website development</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiUserVoice/>
                    </Icon>
                    <H4>Branding & Community</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiDesktop/>
                    </Icon>
                    <H4>Web design</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiCamera/> 
                    </Icon>
                    <H4>Marketing & Reporting</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</Paragraph>
                </Box>
                <Box>
                    <Icon>
                        <BiLineChart/>
                    </Icon>
                    <H4>Mobile development</H4>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, necessitatibus.</Paragraph>
                </Box>
            </ServicesContainer>
        </Services>
    )
}