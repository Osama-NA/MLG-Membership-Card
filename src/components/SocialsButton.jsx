function SocialsButton({icon, link}) {
  return (
    <a target="_blank" href={link} className="socials-button">
      <img src={icon} draggable={false} />
    </a>
  );
}

export default SocialsButton;