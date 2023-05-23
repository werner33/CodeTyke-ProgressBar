import React from 'react'

const progressBar = ({width}) => {
  return (
    <div className style={{width: '100%', height: '1px', backgroundColor: 'red'}}>
        <div style={{ width: width+"%", height: '15px', backgroundColor: '#9c53fd', borderRadius: '30px'}}></div>
    </div>
  )
}

export default progressBar