import React from 'react'
import Btn from '../../components/button/Btn'
import './newproject.css'

const NewProject = () => {
  return (
    <div className='new-container'>
      <h1>New Project</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
        <label htmlFor="desc">Description</label>
        <textarea id="desc"></textarea>
        <div>
        <Btn text='Create Project' bgcolor="#575757"/>
        </div>
      </form>
    </div>
  )
}

export default NewProject
