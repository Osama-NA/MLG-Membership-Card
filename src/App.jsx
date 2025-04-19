import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GamerDetailsContextProvider } from "./context/gamerDetails";
import GamerDetails from "./pages/GamerDetails";
import SelectCard from "./pages/SelectCard";
import SocialsButton from "./components/SocialsButton";
import "./styles/App.css";

const socials = [
  {icon: "/socials-icons/dexscreener.png", link: "https://dexscreener.com/solana/f4hdxnulqjsbwcl5vweucpjueqop3gdteussqaxbeyw4?__cf_chl_tk=gAmwE1sX4FQ4TtDUVm8JJX_ouzhW8EW14ZAZg7SLGIo-1745055781-1.0.1.1-elKyZjF5AXjPN5rdbxvbMius9.zXICcG2LvjXDkS1CM"},
  {icon: "/socials-icons/x.png", link: "https://x.com/mlgsolana420"},
  {icon: "/socials-icons/telegram.png", link: "https://t.me/MLGCTOPORTAL"},
  {icon: "/socials-icons/youtube.png", link: "https://www.youtube.com/@MLGonSolana/videos"},
]

function App() {
  return (
    <div className="main-container flex-col-centered">
      <div className="main-background">
        <div className="background"></div>
        <div className="overlay"></div>
      </div>

      <div className="main-title flex-col-centered">
        <img src="/logo.png" alt="MLG logo" className="logo" />
        <h1>Membership Card</h1>
      </div>

      <div className="main-content">
        <GamerDetailsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<GamerDetails />} />
              <Route path="/*" element={<GamerDetails />} />
              <Route path="/select-card" element={<SelectCard />} />
            </Routes>
          </BrowserRouter>
        </GamerDetailsContextProvider>
      </div>

      <div className="socials flex-row">
        {socials.map((button, i) => <SocialsButton key={i} icon={button.icon} link={button.link}/>)}
      </div>
    </div>
  );
}

export default App;