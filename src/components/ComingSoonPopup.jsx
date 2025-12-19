import "./ComingSoonPopup.css";

function ComingSoonPopup({ onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h3>Coming Soon 🚀</h3>
        <p>This website feature will be available soon.</p>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ComingSoonPopup;
