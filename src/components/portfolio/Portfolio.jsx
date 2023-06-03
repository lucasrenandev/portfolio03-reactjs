import { Portfolio, CenterText, PortfolioContainer,
Box, Text, H5, H4, Button } from "./styled";

export default function portfolio() {
    return(
        <Portfolio id="portfolio">
            <CenterText className="center-text">
                <h3>Work</h3>
                <h2>My awesome project</h2>
            </CenterText>

            <PortfolioContainer>
                <Box>
                    <Text>
                        <H5>Development</H5>
                        <H4>The language of developer</H4>
                        <Button type="button">Case study</Button>
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <H5>Development</H5>
                        <H4>The language of developer</H4>
                        <Button type="button">Case study</Button>
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <H5>Development</H5>
                        <H4>The language of developer</H4>
                        <Button type="button">Case study</Button>
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <H5>Development</H5>
                        <H4>The language of developer</H4>
                        <Button type="button">Case study</Button>
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <H5>Development</H5>
                        <H4>The language of developer</H4>
                        <Button type="button">Case study</Button>
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <H5>Development</H5>
                        <H4>The language of developer</H4>
                        <Button type="button">Case study</Button>
                    </Text>
                </Box>
            </PortfolioContainer>
        </Portfolio>
    )
}