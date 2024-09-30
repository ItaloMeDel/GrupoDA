import "./style.css";
import { SmallText, MediumText, ListText } from "../components/Text";
import { BoxSection, FlexRowSection, PortfolioSection } from "../components/Section";
import Footer from "../components/Footer";
import ImgPortfolio from "../pages/img-portfolio.jpeg"
import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";

export function ViewCV() {
    return (
        <div className="container">
            <MediumText style={{ color: "#4bb1f5", alignSelf: "center", marginTop: "4%" }}>Services</MediumText>

            <FlexRowSection style={{ alignItems: "start" }}>
                <BoxSection style={{ padding: "0 1% 2%", margin: "0 2% 0 2%", width: "25%", borderTopRightRadius: 0, borderTopLeftRadius: 0, justifyContent: "start", alignItems: "start" }}>
                    <SmallText style={{ backgroundColor: "#4bb1f5", width: "94%", textAlign: "center", padding: "7%", marginBottom: "7%", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", justifySelf: "center", alignSelf: "center" }}>UI/UX Design</SmallText>
                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }} tyle>Design of intuitive and attractive user interfaces.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }} tyle>Design of intuitive and attractive user interfaces.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }} tyle>Design of intuitive and attractive user interfaces.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }} tyle>Design of intuitive and attractive user interfaces.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }} tyle>Design of intuitive and attractive user interfaces.</ListText>
                </BoxSection>

                <BoxSection style={{ padding: "0 1% 2%", margin: "0 2% 0 2%", width: "25%", borderTopRightRadius: 0, borderTopLeftRadius: 0, justifyContent: "start", alignItems: "start" }}>
                    <SmallText style={{ backgroundColor: "#4bb1f5", width: "94%", textAlign: "center", padding: "7%", marginBottom: "7%", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", justifySelf: "center", alignSelf: "center" }}>Web Development</SmallText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Creation of responsive and SEO-optimized websites.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Development of interactive and scalable web applications.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>API integration for advanced functionalities.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Maintenance and updating of existing sites.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Optimization of web speed and performance.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Implementation of content management systems (CMS).</ListText>
                </BoxSection>


                <BoxSection style={{ padding: "0 1% 2%", margin: "0 2% 0 2%", width: "25%", borderTopRightRadius: 0, borderTopLeftRadius: 0, justifyContent: "start", alignItems: "start" }}>
                    <SmallText style={{ backgroundColor: "#4bb1f5", width: "94%", textAlign: "center", padding: "7%", marginBottom: "7%", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px", justifySelf: "center", alignSelf: "center" }}>Database Design</SmallText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Modeling of efficient and scalable databases.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Query optimization for improved performance.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Implementation of data security strategies.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Maintenance of data integrity and consistency.</ListText>

                    <ListText style={{ paddingLeft: "4%", textAlign: "left" }} styleIcon={{ margin: "15px", width: "auto" }}>Design of relational and non-relational databases.</ListText>
                </BoxSection>

            </FlexRowSection>

            <MediumText style={{ color: "#4bb1f5", alignSelf: "center", marginTop: "8%" }}>PortFolio</MediumText>

            <FlexRowSection style={{width: "90%", margin: "5%", justifyContent: "space-around", flexWrap: "wrap" }}>
                <PortfolioSection src={ImgPortfolio} style={{ margin: "20px", width: "20%"}}>
                    <SmallText style={{ margin: "5%" }}>Informative page of a web development </SmallText>
                </PortfolioSection>

                <PortfolioSection src={ImgPortfolio} style={{ margin: "20px", width: "20%"}}>
                    <SmallText style={{ margin: "5%" }}>Informative page of a web development </SmallText>
                </PortfolioSection>

                <PortfolioSection src={ImgPortfolio} style={{ margin: "20px", width: "20%"}}>
                    <SmallText style={{ margin: "5%" }}>Informative page of a web development </SmallText>
                </PortfolioSection>

                <PortfolioSection src={ImgPortfolio} style={{ margin: "20px", width: "20%"}}>
                    <SmallText style={{ margin: "5%" }}>Informative page of a web development </SmallText>
                </PortfolioSection>

                <PortfolioSection src={ImgPortfolio} style={{ margin: "20px", width: "20%"}}>
                    <SmallText style={{ margin: "5%" }}>Informative page of a web development </SmallText>
                </PortfolioSection>

                <PortfolioSection src={ImgPortfolio} style={{ margin: "20px", width: "20%"}}>
                    <SmallText style={{ margin: "5%" }}>Informative page of a web development </SmallText>
                </PortfolioSection>

            </FlexRowSection>

            <Footer style={{ marginTop: "3%" }} />
        </div>
    );
}

export default ViewCV;