import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/BotArmy';
import BotSpecs from './components/BotSpecs';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [view, setView] = useState('collection'); 

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
    setView('collection'); 
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
        setSelectedBot(null);
        setView('collection');
      }
    })
    .catch(error => console.error('Error deleting bot:', error));
  };

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
    setView('specs');
  };

  const handleBackToCollection = () => {
    setSelectedBot(null);
    setView('collection');
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Bot Battlr</h1>
        <p>Build Your Bot Army!</p>
      </header>
      
      <div className="main-content">
        {view === 'specs' && selectedBot ? (
          <div className="specs-view">
            <BotSpecs 
              bot={selectedBot}
              onBack={handleBackToCollection}
              onEnlist={addToArmy}
            />
          </div>
        ) : (
          <>
            <BotCollection 
              bots={bots}
              onAddToArmy={addToArmy}
              onSelectBot={handleSelectBot}
            />
            
            <YourBotArmy 
              army={army} 
              onRelease={releaseFromArmy}
              onDischarge={dischargeBot}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;