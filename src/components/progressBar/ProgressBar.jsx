import React from 'react'
import PropTypes from 'prop-types'
import './ProgressBar.css'

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar
