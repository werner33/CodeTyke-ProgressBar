import React, {useState}  from 'react';

import './Styles.scss';

const Button = (props) => {
  const [counter, setCounter] = useState(0)
  function handelProps () {
    setCounter(counter += 1)
    // console.log(counter)
   
  }

  return (
    <div className={"submitButton"} onClick={props.handleSubmit} onChange={handelProps}>
      {props.label}
    </div>
  )
}

export default Button;