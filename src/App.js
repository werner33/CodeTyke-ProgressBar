import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import LearningModule from './components/learningModule/LearningModule';
import ProgressBar from './components/progressBar/progressBar';

import './styles/App.scss';

function App() {
  const [gameStatus, setGameStatus] = React.useState({message: "Welcome", loadIntro: true});
  const [addProgress, setAddProgress] = React.useState(0)

  return (
    <div>
      <Navbar />
      <div id="mainWrapper">
        { gameStatus.loadIntro && 
          <Intro setGameStatus={setGameStatus} gameStatus={gameStatus} />
        }
        
        { !gameStatus.loadIntro &&
         <div className='StatusContainer'>
            <ProgressBar setGameStatus={setGameStatus} width={addProgress}/> 
            <LearningModule setGameStatus={setGameStatus} 
                            setAddProgress={setAddProgress} 
                            addProgress={addProgress}/> 
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
