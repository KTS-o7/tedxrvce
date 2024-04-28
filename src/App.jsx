import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./assets/app.css";

import TicketPage from "./pages/TicketPage";
import SpeakerPage from "./pages/SpeakerPage";

import About from "./pages/About";
import AllSpeakers from "./pages/AllSpeakers";
// import HomePageCarousal from "./components/HomePageCarousal";

const speakerPageDetails = [
  {
    id: 1,
    name: "Tanu Jain",
    info: "Dr. Tanu Jain, who has now left her civil services job. Tanu Jain is a 2015 batch IAS officer. Tanu Jain studied at Cambridge School in Delhi and she grew up in Sadar area of the national capital. It is to be noted that Tanu Jain also studied medicine before cracking UPSC exam and becoming an IAS officer.",
    instaLink: "https://www.instagram.com/dr.tanujain/",
    linkedinLink: "https://www.linkedin.com/in/dr-tanu-jain-4aa28a131",
    twittLink: "https://twitter.com/DrTanuJain1",
    BannerURL: "src/assets/images/speakers/banner-img.png",
    achivements: [
      "Former IAS officer of 2015 batch.",
      "Served her excellence as Assistant Director of DRDO.",
      "Mock Interview panelist for Civil Services Examination .",
      "Established IAS coaching named Tathastu-ICS in Delhi.",
    ],
  },
];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/ticket" element={<TicketPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/tanujain"
        element={
          <SpeakerPage
            information={speakerPageDetails[0].info}
            achivements={speakerPageDetails[0].achivements}
            image={speakerPageDetails[0].BannerURL}
            insta={speakerPageDetails[0].instaLink}
            linked={speakerPageDetails[0].linkedinLink}
            tweet={speakerPageDetails[0].twittLink}
          >
            <span>T</span>
            <span>A</span>
            <span>N</span>
            <span>U</span>
            &nbsp;
            <span>J</span>
            <span>A</span>
            <span>I</span>
            <span>N</span>
          </SpeakerPage>
        }
      ></Route>
      <Route path="/allspeakers" element={<AllSpeakers />}></Route>
    </Routes>
  );
}

export default App;
