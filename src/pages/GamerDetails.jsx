import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GamerDetailsContext } from '../context/gamerDetails';
import Input from '../components/Input'
import "../styles/gamer-details.css";

const gamerTags = [
  "QuickscopeGawd", "DoritoSn1per", "FaZeTaco", "NoobHunterX", "OpticBeast",
  "LagSwitchLord", "MLG_PotatoAim", "XxTrickz_xX", "NoscopeNancy", "RedBullRager",
  "PepsiPredator", "SilentTryhard", "YT_MontageKing", "DankDestroyer", "HeadshotMachine",
  "SweatySteve", "HitScanHavoc", "PingProwler", "420Scopez", "TTV_Crackhead",
  "CheetoSniper", "MLG_Yeeter", "PhaseShifterZ", "GamerChad", "ReloadGod"
];
const weapons = [
  "Dorito Launcher", "Mountain Dew Blaster", "Intervention", "Meme Cannon", "RGB Katana",
  "360 Blade", "Tactical Toaster", "Sniper Fidget Spinner", "Energy Sword", "Controller Thrower",
  "Lag Bazooka", "G-Fuel Grenade", "NoScope Rifle", "Red Dot Slapper", "Gamer Chair Smash",
  "Optic Flashbang", "LED Nunchucks", "XP Booster Cannon", "Meta SMG", "Boosted Bat",
  "Snacc Pack", "Tactical Dew Dispenser", "Iron Scope Rifle", "TTV Laser Gun", "Headshot Harpoon"
];
const skills = [
  "360 NoScope Master", "Trickshot Legend", "Hitmarker Hero", "Final Killcam King", "Clutch King",
  "Lag Surfer", "Teabag Technician", "Drop Shot Deity", "Reload Cancel Artist", "Wallbang Wizard",
  "Spawn Trap God", "Crossmap Genius", "XP Grinder", "Quick Reload Ninja", "Headshot Hacker",
  "One Tap Demon", "Slide Cancel King", "AFK Punisher", "High DPI Maniac", "Sniper Whisperer",
  "Controller Godmode", "Perk Stack Strategist", "Zone Denier", "Crack Aim Lord", "Killstreak Collector"
];

function GamerDetails() {
  const navigate = useNavigate()

  const { gamerDetails, setGamerDetails } = useContext(GamerDetailsContext)
  const { gamerTag: storedGamerTag, weapon: storedWeapon, skill: storedSkill } = gamerDetails

  const [gamerTag, setGamerTag] = useState(storedGamerTag);
  const [weapon, setWeapon] = useState(storedWeapon);
  const [skill, setSkill] = useState(storedSkill);
  const [error, setError] = useState("");

  const generate = () => {
    if(!gamerTag || !weapon || !skill) {
      setError("Bruh… you're missing some loadout info.")
      return
    }

    setGamerDetails({ gamerTag, weapon, skill })
    navigate('/select-card')
  }

  return (
    <div className="gamer-details">
      <h2>$MLG Gamer Card Loadout Form</h2>
      <p>Customize your card. Flex your legacy. Become a legend.</p>

      <div className='input-group'>
        <Input
          value={gamerTag}
          setValue={setGamerTag}
          label="Gamer Tag"
          placeholder="Enter your legendary gamer name"
          randomInputArray={gamerTags}
        />
        <Input 
          value={weapon}
          setValue={setWeapon}
          label="Weapon of Choice"
          placeholder="Your go-to for pure OP disrespect"
          randomInputArray={weapons}
        />
        <Input 
          value={skill}
          setValue={setSkill}
          label="Signature Skill"
          placeholder="Are you a Trickshot King..?"
          randomInputArray={skills}
        />
        <span className='error'>{error}</span>
      </div>

      <button className='large-btn' onClick={generate}>Generate My Card</button>
    </div>
  )
}

export default GamerDetails