import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import LearningModule from './components/learningModule/LearningModule';
import ProgressBar from './components/progressBar/progressBar';

import './styles/App.scss';

function App() {
  const [gameStatus, setGameStatus] = React.useState({message: "Welcome", loadIntro: true});
  const [addStatus, setAddStatus] = React.useState(0)

  return (
    <div>
      <Navbar />
      <div id="mainWrapper">
        { gameStatus.loadIntro && 
          <Intro setGameStatus={setGameStatus} gameStatus={gameStatus} />
        }
        
        { !gameStatus.loadIntro &&
         <div>
            <ProgressBar setGameStatus={setGameStatus} width={addStatus}/> 
            <LearningModule setGameStatus={setGameStatus} 
                            setAddStatus={setAddStatus} 
                            addSatus={addStatus}/> 
          </div>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
