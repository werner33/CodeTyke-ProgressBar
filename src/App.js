import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import LearningModule from './components/learningModule/LearningModule';
import ProgressBar from './components/progressBar/ProgressBar';

import './styles/App.scss';

function App() {
  const [gameStatus, setGameStatus] = React.useState({message: "Welcome", loadIntro: true});

  return (
    <div>
      <Navbar />
      <div id="mainWrapper">
        <ProgressBar progress={33} />
        { gameStatus.loadIntro && 
          <Intro setGameStatus={setGameStatus} gameStatus={gameStatus} />
        }
        
        { !gameStatus.loadIntro &&
          <LearningModule setGameStatus={setGameStatus}/>
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
