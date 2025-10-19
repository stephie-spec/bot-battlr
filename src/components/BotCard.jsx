function BotCard({ bot, onAddToArmy, onSelect }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card">
      <div 
        className="bot-card-content"
        onClick={() => onSelect(bot)}
      >
        <div className="bot-image">
          <img src={avatar_url} alt={name} />
        </div>
        <div className="bot-info">
          <h3>{name}</h3>
          <p className="bot-class">{bot_class}</p>
          <p className="catchphrase">"{catchphrase}"</p>
          <div className="bot-stats">
            <span className="stat health">
              <i className="bi bi-heart-fill"></i> {health}
            </span>
            <span className="stat damage">
              <i className="bi bi-lightning-fill"></i> {damage}
            </span>
            <span className="stat armor">
              <i className="bi bi-shield-fill"></i> {armor}
            </span>
          </div>
        </div>
      </div>
      <button 
        className="quick-add-btn"
        onClick={(e) => {
          e.stopPropagation();
          onAddToArmy(bot);
        }}
      >
        <i className="bi bi-plus-circle"></i> Quick Add
      </button>
    </div>
  );
}

export default BotCard;