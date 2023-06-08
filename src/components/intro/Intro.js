import React from 'react';
import Button from '../button/Button';

import './Styles.scss';

const Intro = ({gameStatus, setGameStatus, setAddProgress }) => {

   function handelButton (){
      setGameStatus({loadIntro: false});
      setAddProgress(0);
   }
    return (
        <div className="introContainer">
                <div className="introContainer--logo">
                    <img alt="logo" src="assets/logo.png" />            
                </div>
                <div className="introContainer--message">
                    {gameStatus.message}
                </div>
                <Button label="start" handleSubmit={handelButton} />
        </div>
    )
}

export default Intro
