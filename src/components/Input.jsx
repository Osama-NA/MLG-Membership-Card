function Input({value, setValue, label, placeholder, randomInputArray}) {
  const randomize = () => {
    const randomItem = randomInputArray[Math.floor(Math.random() * randomInputArray.length)];
    setValue(randomItem);
  }

  return (
    <div className="input">
      <label htmlFor={label}># {label}</label>
      <div className="input-field flex-row">
        <input id={label} value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder}/>
        <button onClick={randomize}>Randomize</button>
      </div>
    </div>
  );
}

export default Input;