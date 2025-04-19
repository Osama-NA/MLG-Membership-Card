import { useState, useContext, useEffect, useRef } from "react";
import { GamerDetailsContext } from "../context/gamerDetails";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import Card from "../components/Card";
import "../styles/select-card.css";

function SelectCard() {
  const card = useRef();

  const navigate = useNavigate();

  const { gamerDetails } = useContext(GamerDetailsContext);

  const [error, setError] = useState("");
  const [selectedTemplate, setTemplate] = useState("");

  const download = () => {
    if(!selectedTemplate){
      setError("Naked cards? That’s illegal. Pick a style!")
      return
    }

    setError("")
    
    card.current.style.opacity = 1
    html2canvas(card.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "mlg-membership-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
    card.current.style.opacity = 0
  };

  useEffect(() => {
    const { gamerTag, weapon, skill } = gamerDetails;

    if (!gamerTag || !weapon || !skill) {
      navigate("/");
    }
  }, [gamerDetails, navigate]);

  return (
    <>
      <div className="select-card">
        <div className="title flex-row">
          <h2>Choose your card style</h2>
          <span onClick={() => navigate("/")}>{"<<"} Go Back</span>
        </div>

        <div className="cards flex-row">
          <Card
            label="MLG Vibes"
            template="/cards/mlg-vibes.jpg"
            setTemplate={setTemplate}
            selectedTemplate={selectedTemplate}
          />
          <Card
            label="Pro Gamer Prestige"
            template="/cards/pro-gamer-prestige.jpg"
            setTemplate={setTemplate}
            selectedTemplate={selectedTemplate}
          />
          <span className='error'>{error}</span>
        </div>

        <button className="large-btn" onClick={download}>
          Download
        </button>
      </div>

      <div className="membership-card" ref={card}>
        <img src={`/cards/${selectedTemplate === "MLG Vibes" ? "mlg-vibes" :"pro-gamer-prestige"}.jpg`} />
        <div className={`details-overlay ${selectedTemplate === "MLG Vibes" ? "template-one" : "template-two"}`}>
          <p>Name: {gamerDetails.gamerTag}</p>
          <p>Weapon: {gamerDetails.weapon}</p>
          <p>Skill: {gamerDetails.skill}</p>
        </div>
      </div>
    </>
  );
}

export default SelectCard;
