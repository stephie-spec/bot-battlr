import { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/BotArmy';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setBots(bots.filter(bot => bot.id !== botId));
        setArmy(army.filter(bot => bot.id !== botId));
      }
    })
    .catch(error => console.error('Error deleting bot:', error));
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Bot Battlr</h1>
        <p>Build Your Bot Army!</p>
      </header>
      
      <YourBotArmy 
        army={army} 
        onRelease={releaseFromArmy}
        onDischarge={dischargeBot}
      />
      
      <BotCollection 
        bots={bots}
        onAddToArmy={addToArmy}
        onSelectBot={setSelectedBot}
      />
    </div>
  );
}

export default App;