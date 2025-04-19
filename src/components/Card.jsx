function Card({label, template, setTemplate, selectedTemplate}) {
  return (
    <div className="card">
      <label># {label}</label>
      <div className={`card-template`} onClick={() => setTemplate(label)}>
        <img src={template} alt={`${label} $MLG Card`}  className={selectedTemplate === label ? 'selected' : ''}/>
      </div>
    </div>
  );
}

export default Card;