import React from 'react'
import './Styles.scss';

const ProgressBar = ({width}) => {
  return (
    <div className='progressBar' >
        <div id='totalProgress' 
             className='progressBar--progress' 
             style={{ width: width+"%"}}></div>
    </div>
  )
}

export default ProgressBar