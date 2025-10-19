function YourBotArmy({ army, onRelease, onDischarge }) {
  if (army.length === 0) {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <p className="empty-army">
          <i className="bi bi-robot"></i> No bots in your army yet. Click on bots to add them!
        </p>
      </div>
    );
  }

  return (
    <div className="your-bot-army">
      <h2>
        <i className="bi bi-flag-fill"></i> Your Bot Army ({army.length} bots)
      </h2>
      <div className="army-grid">
        {army.map(bot => (
          <div key={bot.id} className="army-bot-card">
            <div className="bot-image">
              <img src={bot.avatar_url} alt={bot.name} />
            </div>
            <div className="bot-info">
              <h3>{bot.name}</h3>
              <p className="bot-class">{bot.bot_class}</p>
              <div className="bot-stats">
                <span className="stat health">
                  <i className="bi bi-heart-fill"></i> {bot.health}
                </span>
                <span className="stat damage">
                  <i className="bi bi-lightning-fill"></i> {bot.damage}
                </span>
                <span className="stat armor">
                  <i className="bi bi-shield-fill"></i> {bot.armor}
                </span>
              </div>
              <div className="army-actions">
                <button 
                  className="release-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRelease(bot.id);
                  }}
                >
                  <i className="bi bi-arrow-left"></i> Release
                </button>
                <button 
                  className="discharge-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDischarge(bot.id);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;