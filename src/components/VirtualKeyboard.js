import React from 'react';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Keyboard, { KeyboardReactInterface } from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import '../../src/index.css'


const VirtualKeyboard = ({ user, text, state }) => {
  const keyboardRef = useRef(KeyboardReactInterface)
  let ind = -1;
  useEffect(() => {
    // console.log("use effect")
    if(ind===-1) onKeyPress(text.charAt(0))
    window.addEventListener('keypress', event)

    return () => window.removeEventListener('keypress', event)
  }, [text])

  useEffect(()=>{
    if (state === "start") {
      keyboardRef.current.removeButtonTheme("a b c d e f g h i j k l m n o p q r s t u v w x y z", "highlight")
      keyboardRef.current.clearInput()
    }
  })

  const event = (e) => {
    onKeyPress(e.key)
  }
  
  const onChange = (input) => {
    // console.log("Input changed ", input)
  }

  const onKeyPress = (button) => {
    // console.log("Button Pressed ", button);
    // console.log(text)
    ind++;
    if (ind > 0) keyboardRef.current.removeButtonTheme(`${text.charAt(ind - 1)}`, "highlight")
    keyboardRef.current.addButtonTheme(`${text.charAt(ind)}`, "highlight")
  }
  
  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      onChange={onChange}
      onKeyPress={onKeyPress}
      theme={"simple-keyboard hg-theme-default hg-layout-default"}
      physicalKeyboardHighlight={true}
      syncInstanceInputs={true}
      mergeDisplay={true}
    />
  )
}

export default VirtualKeyboard