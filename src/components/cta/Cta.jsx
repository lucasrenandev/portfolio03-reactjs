import { Cta, CtaContainer, CtaText,
H2, H5, Button } from "./styled";

export default function cta() {
    return(
        <Cta>
            <CtaContainer>
                <CtaText>
                    <H2>Let's discuss your idea</H2>
                    <H5>Have a thought about your future website? I am always here.</H5>
                </CtaText>
                <Button type="button">Get in touch</Button>
            </CtaContainer>
        </Cta>
    )
}