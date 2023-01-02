import React from 'react'

const Text = ({text, user}) => {
  text+=""
  user+=""
  // console.log(text + " " + user)
  const userArr = user.split('')
  const textArr = text.split('')
  // console.log(textArr + " " + userArr)

  return (
    <div style={{height:"30px", fontWeight:"bolder", fontSize:"20px"}}>
      {textArr.map((ch, ind) => {
        if(ind<userArr.length) {
          if (ch == userArr[ind]) {
            return <span key={ind} style={{ color: "green" }}>{ch}</span>
          } else {
            return <span key={ind} style={{ color: "red" }}>{ch}</span>
          }
        } else return <span key={ind}>{ch}</span>
      })}
    </div>
  )
}

export default Text