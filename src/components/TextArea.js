import React, {useEffect, useRef} from 'react'

const TextArea = ({ user, onChange, onKeyPress, state }) => {
  let input
  const userInput = useRef(null)
  useEffect(() => {
    input = document.getElementById('mytext')
    input.onkeydown = function (e) {
      if (e.code === "Backspace" || e.code === "Delete") e.preventDefault()
    }
    console.log(userInput)
      if(userInput) userInput.current.focus()
  }, [state])
  
  // console.log(user)

  return (
    <textarea id="mytext" ref={userInput} name="game" cols="0" rows="0" value={user} onChange={onChange} onKeyUp={onKeyPress} disabled={state === "start"} style={{opacity: "0"}}></textarea>
  )
}

export default TextArea