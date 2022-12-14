import "../src/App.css"
import ProfilePic from "./components/js/profile-pic"
import About from "./components/js/about"
import Title from "./components/js/title";
import MailButton from "./components/js/mail-button";
import Bat from "./components/js/bat";

function App() {
  return (
    <div className="AppWrapper">
       <div className="App">
      <ProfilePic />
      <Title />
      <MailButton />
      <About />
      <Bat />
    </div>
    </div>
   
   
  );
}

export default App;
