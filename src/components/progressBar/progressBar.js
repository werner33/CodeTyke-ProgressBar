import React from 'react'
import './Styles.scss';

const progressBar = ({width}) => {
  return (
    <div className='progressBar' >
        <div className='progressBar--progress' style={{ width: width+"%",}}></div>
    </div>
  )
}

export default progressBar