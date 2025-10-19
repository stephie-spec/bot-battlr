import BotCard from './BotCard';

function BotCollection({ bots, onAddToArmy, onSelectBot }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map(bot => (
          <BotCard 
            key={bot.id}
            bot={bot}
            onAddToArmy={onAddToArmy}
            onSelect={onSelectBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;