import React from 'react'
import Btn from '../../components/button/Btn'
import './project.css'

const Project = () => {
  return (
    <div className='project-container'>
      <div className="project-left">
        <div className="edit-head">
          <h1>Project title</h1>
          <i className="fas fa-pencil-alt"></i>Created by:<span className='admin'>vsvdzv@gmail.com</span>
        </div>
        <p>New Description</p>
        <div className="members">
          <span>Members: </span>
          <ul>
            <li>
              <i className="fas fa-user-shield"></i>  toto@gmail.com
            </li>
          </ul>
        </div>
        <div className="dicussion">
          <label htmlFor="discussion">Add new discussion</label>
          <form>
            <input type="text" ></input>
            <Btn color='black' bgcolor='yellow' text="+ new dicussion " />
          </form>
          <div className="chat">
            <div className="chat-head">
              <span>Discussion</span>
              <div>
                <i className="fas fa-cogs"></i>
                <i className="fas fa-trash"></i>
              </div>
            </div>
            <div className="chat-body">
              <ul>
                <li>
                  <i className="fa-solid fa-comment-dots"></i>
                  <div>
                    <b>jidsnfu@gmail.com</b>
                    <p>Hello</p>
                  </div>
                  <i className="fa-solid fa-pencil"></i>
                </li>
              </ul>
            </div>
            <form className="chat-bottom">
              <input type="text" ></input>
              <Btn color='black' bgcolor='yellow' text="Send" />
            </form>
          </div>
          <div className="task">
            <label htmlFor="task">Add new task</label>
            <form>
              <input type="text" ></input>
              <Btn color='black' bgcolor='yellow' text="+ new task" />
            </form>

            <p>Tasks: </p>
            <ul>
              <li>
                <div>
                  <b>boss@gmail.com</b>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem possimus quidem odit modi asperiores praesentium voluptatem reprehenderit, temporibus placeat!</p>
                </div>
                <input type="checkbox" name="" id=""></input>

              </li>
            </ul>
          </div>
          <div className="attachment">
            <label htmlFor="">Add new attachment</label>
            <form>
            <input type="file" name="avatar" id="id_avatar"></input>
              <Btn color='black' bgcolor='yellow' icon={[<i className="fa-solid fa-file-circle-plus"></i>]} />
            </form>
          </div>
        </div>
      </div>
      <div className="project-rigth">
        cvhgvj
      </div>

    </div>
  )
}

export default Project
