import "./AddButton.css";

const AddButton = ({ buttonText, onClick, icon }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      <span className="button__text">{buttonText}</span>

      <span className="button__icon">{icon}</span>
    </button>
  );
};

export default AddButton;
