function BotSpecs({ bot, onBack, onEnlist }) {
  const { name, health, damage, armor, bot_class, catchphrase, avatar_url, created_at } = bot;

  return (
    <div className="bot-specs-full">
      <button className="back-btn" onClick={onBack}>
        <i className="bi bi-arrow-left"></i> Back to Bot Collection
      </button>
      
      <div className="specs-container">
        <div className="specs-header">
          <h1>
            <i className="bi bi-robot"></i> {name}
          </h1>
          <span className="specs-class">
            <i className="bi bi-tag-fill"></i> {bot_class}
          </span>
        </div>
        
        <div className="specs-content">
          <div className="specs-image">
            <img src={avatar_url} alt={name} />
          </div>
          
          <div className="specs-details">
            <div className="specs-section">
              <h3><i className="bi bi-chat-quote"></i> About</h3>
              <p className="catchphrase">"{catchphrase}"</p>
              <p className="created-date">
                <i className="bi bi-calendar"></i> Created: {new Date(created_at).toLocaleDateString()}
              </p>
            </div>
            
            <div className="specs-section">
              <h3><i className="bi bi-graph-up"></i> Combat Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">
                    <i className="bi bi-heart-fill"></i> Health
                  </span>
                  <div className="stat-bar">
                    <div 
                      className="stat-fill health-fill" 
                      style={{width: `${health}%`}}
                    ></div>
                    <span className="stat-value">{health}</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">
                    <i className="bi bi-lightning-fill"></i> Damage
                  </span>
                  <div className="stat-bar">
                    <div 
                      className="stat-fill damage-fill" 
                      style={{width: `${damage}%`}}
                    ></div>
                    <span className="stat-value">{damage}</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <span className="stat-label">
                    <i className="bi bi-shield-fill"></i> Armor
                  </span>
                  <div className="stat-bar">
                    <div 
                      className="stat-fill armor-fill" 
                      style={{width: `${armor}%`}}
                    ></div>
                    <span className="stat-value">{armor}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="specs-actions">
              <button 
                className="enlist-btn-large"
                onClick={() => onEnlist(bot)}
              >
                <i className="bi bi-plus-circle"></i> Enlist in Army
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;