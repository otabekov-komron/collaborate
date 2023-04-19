import React from 'react'
import Btn from '../../components/button/Btn'

const Project = () => {
  return (
    <div className='project-container'>
      <div className="project-left">
        <div className="edit-head">
          <h1>Project title</h1>
          <i class="fas fa-pencil-alt"></i>Created by:<span className='admin'>vsvdzv@gmail.com</span>
        </div>
        <p>New Description</p>
        <div className="members">
          <span>Members: </span>
          <ul>
            <li>
              <i class="fas fa-user-shield"></i>  toto@gmail.com
            </li>
          </ul>
        </div>
        <div className="dicussion">
          <label htmlFor="discussion">Add new discussion</label>
          <form>
            <input type="text" ></input>
            <Btn color='black' bgcolor='yellow'  text="+ new dicussion "/>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Project
