function BotCard({ bot, onAddToArmy, onSelect }) {
  const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;

  return (
    <div className="bot-card" onClick={() => onAddToArmy(bot)}>
      <div className="bot-image">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="bot-info">
        <h3>{name}</h3>
        <p className="bot-class">{bot_class}</p>
        <p className="catchphrase">"{catchphrase}"</p>
        <div className="bot-stats">
          <span className="stat health">❤️ {health}</span>
          <span className="stat damage">⚔️ {damage}</span>
          <span className="stat armor">🛡️ {armor}</span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;