import React from 'react'
import './btn.css'

const Btn = (props) => {
  return (
    <button key={props.key} className='btn' style={{backgroundColor: `${props.bgcolor}`, color: `${props.color}`}}>{props.icon} {props.text}</button>
    
  )
}

export default Btn
