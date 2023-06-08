import React from 'react'
import './Styles.scss';

const ProgressBar = ({width}) => {
  return (
      <div className='progresBar-Container'>
          <div className='progressBar' >
              <div id='totalProgress' 
                  className='progressBar--progress' 
                  style={{ width: width+"%"}}></div>
          </div>
          <div className='progresBar-Container--dotted' 
                  style={{height: `${width === 100 ? '15px': '9px'}`, 
                          backgroundColor: `${width === 100 ? '#9C53FD': '#CECECE'}`,
                          marginTop: `${width === 100 ? '-7px': '-5px'}`,
                          borderRadius: `${width === 100 ? '0px 50px 50px 0px': '50%'}`,
                          transition: '1.05s' }}></div> 
      </div>  
  )
}

export default ProgressBar