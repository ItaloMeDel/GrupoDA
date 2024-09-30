import "./style.css";


import Header from "../components/Header";
import Footer from "../components/Footer";
import { Title, SmallText, MediumText, TinyText, ListText, InputField, TextField, SubmitField } from "../components/Text";
import { ClearButton, SolidButton, FacebookButton, WhatsAppButton, LinkedInButton, InstagramButton } from "../components/Button";
import { FlexRowSection, FlexColumnSection, BoxSection } from "../components/Section";
import profilePhoto from "./foto-perfil.jpeg";
import squarePhoto from "./square-photo.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faStar, faBolt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { scrollToContactMe } from "./script.js";

export function Home() {
  return (
    <div className="container">
      <Header>
        <SmallText>UCSM</SmallText>
        <Title>Student Name</Title>
        <MediumText>Student ID</MediumText>
      </Header>

      <FlexRowSection style={{ margin: "1%" }}>
        <ClearButton href={"./ViewCV"} style={{ width: "130px", height: "40px", margin: "0 5px" }}>View CV</ClearButton>

        <SolidButton style={{ width: "130px", height: "40px", margin: "0 5px" }} onClick={scrollToContactMe}>Contact Me</SolidButton>
      </FlexRowSection>

      <FlexRowSection style={{ margin: "50px 0", justifyContent: "space-between" }}>
        <FlexColumnSection style={{ width: "20%" }}>
          <FacebookButton fontSize={"50px"} style={{ margin: "30px" }} />

          <InstagramButton fontSize={"50px"} style={{ margin: "30px" }} />
        </FlexColumnSection>

        <img src={profilePhoto} alt="Profile" id="profile-photo" />

        <FlexColumnSection style={{ width: "20%" }}>
          <WhatsAppButton fontSize={"50px"} style={{ margin: "30px" }} />

          <LinkedInButton fontSize={"50px"} style={{ margin: "30px" }} />
        </FlexColumnSection>
      </FlexRowSection>

      <MediumText style={{ color: "#4bb1f5", alignSelf: "center", marginTop: "4%" }}>About me</MediumText>

      <FlexRowSection>
        <div id="img-rotate">
          <img src={profilePhoto} alt="Profile" id="img" />
        </div>

        <FlexColumnSection style={{ width: "50%", margin: "10px 0 10px 10%" }}>
          <FlexRowSection style={{ margin: "30px" }}>
            <BoxSection style={{ padding: "2%", margin: "10px 20px", height: "16vh", width: "60%", justifyContent: "start", aspectRatio: "1 / 1" }}>
              <FontAwesomeIcon icon={faStar} style={{ margin: "25px 0 10px 0", color: "#4bb1f5", height: "20px" }} />

              <SmallText style={{ color: "white" }}>Experience</SmallText>

              <TinyText style={{ marginTop: "10px" }}>3/5</TinyText>
            </BoxSection>

            <BoxSection style={{ padding: "2%", margin: "10px 20px", height: "16vh", width: "60%", justifyContent: "start", aspectRatio: "1 / 1" }}>
              <FontAwesomeIcon icon={faHandshake} style={{ margin: "25px 0 10px 0", color: "#4bb1f5", height: "20px" }} />

              <SmallText style={{ color: "white" }}>Clients</SmallText>

              <TinyText style={{ marginTop: "10px" }}>5/5</TinyText>
            </BoxSection>
            <BoxSection style={{ padding: "2%", margin: "10px 20px", height: "16vh", width: "60%", justifyContent: "start", aspectRatio: "1 / 1" }}>
              <FontAwesomeIcon icon={faBolt} style={{ margin: "25px 0 10px 0", color: "#4bb1f5", height: "20px" }} />

              <SmallText style={{ color: "white" }}>Project</SmallText>

              <TinyText style={{ marginTop: "10px" }}>4/5</TinyText>
            </BoxSection>
          </FlexRowSection>

          <SmallText style={{ textAlign: "left" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam delectus culpa, maiores numquam quod fugit fuga reiciendis? Ullam blanditiis voluptatum odit ex fugiat rerum dolore tempora. Aspernatur error nihil voluptates.
          </SmallText>

          <SolidButton style={{ height: "5vh", width: "16%", fontSize: "100%", alignSelf: "flex-start", marginTop: "4%" }}>Look at me</SolidButton>
        </FlexColumnSection>
      </FlexRowSection>

      <MediumText style={{ color: "#4bb1f5", alignSelf: "center", marginTop: "4%" }}>My Experience</MediumText>

      <FlexRowSection>
        <BoxSection style={{ width: "35%", margin: "0 5% 2% 5%" }}>

          <SmallText style={{ color: "#4bb1f5", marginTop: "5%" }}>Frontend Development</SmallText>

          <FlexRowSection style={{ flexWrap: "wrap", justifyContent: "start", paddingLeft: "15%", paddingBottom: "10%" }}>
            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              HTML
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              CSS
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              JavaScript
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              Bootstrap
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              React
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              Angular
            </ListText>
          </FlexRowSection>
        </BoxSection>

        <BoxSection style={{ width: "35%", margin: "0 5% 2% 5%" }}>
          <SmallText style={{ color: "#4bb1f5", marginTop: "5%" }}>Backend Development</SmallText>
          <FlexRowSection style={{ flexWrap: "wrap", justifyContent: "start", paddingLeft: "15%", paddingBottom: "10%" }}>
            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              Node.JS
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              MongoDB
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              PHP
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              MySQL
            </ListText>

            <ListText styleIcon={{ marginRight: "5%" }} style={{ width: "10vw", justifyContent: "flex-start", marginTop: "5%" }}>
              Python
            </ListText>
          </FlexRowSection>
        </BoxSection>
      </FlexRowSection>

      <MediumText style={{ color: "#4bb1f5", alignSelf: "center", marginTop: "4%" }} id={"testimony-section"}>Testimony</MediumText>

      <BoxSection style={{ padding: "3%", justifyContent: "center", alignItems: "center", width: "60%", alignSelf: "center" }}>
        <img src={squarePhoto} alt="" id="square-photo" />
        <SmallText>User</SmallText>
        <TinyText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto commodi sunt repellendus. Iure, magnam corporis quas error labore ea inventore quasi quos perspiciatis, voluptate maxime possimus architecto officiis facilis beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius enim vero corrupti nobis illo ad expedita, quos, fugiat accusamus, ea nisi magni harum aliquid vel impedit sit hic? Cum!</TinyText>
      </BoxSection>

      <MediumText style={{ color: "#4bb1f5", alignSelf: "center", marginTop: "4%" }} id="contact-section">Contact Me</MediumText>

      <FlexRowSection>

        <FlexColumnSection style={{ width: "30%", justifyContent: "space-between" }}>
          <BoxSection style={{ padding: "2%", margin: "10px 20px", height: "16vh", width: "60%", justifyContent: "start", aspectRatio: "1 / 1" }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ margin: "25px 0 10px 0", color: "#4bb1f5", height: "20px" }} />

            <SmallText style={{ color: "white" }}>Mail</SmallText>

            <TinyText style={{ marginTop: "10px" }}>student.ucsm@ucsm.edu.pe</TinyText>
          </BoxSection>

          <BoxSection style={{ padding: "2%", margin: "10px 20px", height: "16vh", width: "60%", justifyContent: "start", aspectRatio: "1 / 1" }}>
            <FontAwesomeIcon icon={faGithub} style={{ margin: "25px 0 10px 0", color: "#4bb1f5", height: "20px" }} />

            <SmallText style={{ color: "white" }}>Github</SmallText>

            <TinyText style={{ marginTop: "10px" }}>student.github.com</TinyText>
          </BoxSection>

          <BoxSection style={{ padding: "2%", margin: "10px 20px", height: "16vh", width: "60%", justifyContent: "start", aspectRatio: "1 / 1" }}>
            <FontAwesomeIcon icon={faPhone} style={{ margin: "25px 0 10px 0", color: "#4bb1f5", height: "20px" }} />

            <SmallText style={{ color: "white" }}>Phone</SmallText>

            <TinyText style={{ marginTop: "10px" }}>+51 987654321</TinyText>
          </BoxSection>

        </FlexColumnSection>

        <FlexColumnSection style={{ width: "50%" }}>
          <form action="./" method="POST" id="contact-form">
            <InputField placeholder={"Enter your name."}></InputField>
            <InputField type={"email"} placeholder={"Enter your email."}></InputField>
            <TextField placeholder={"Enter a description."}></TextField>
            <SubmitField type={"submit"} value={"Send"} style={{ width: "20%", justifySelf: "flex-start" }}></SubmitField>
          </form>
        </FlexColumnSection>
      </FlexRowSection>

      <Footer />
    </div>
  );
}

export default Home;
