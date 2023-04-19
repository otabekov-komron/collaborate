import React from 'react'
import Btn from '../../components/button/Btn'
import './projects.css';

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <div className="buttons">
        <button><i className="fas fa-star-of-life"></i> All projects</button>
        <button><i class="fas fa-pencil-alt"></i> Created by me</button>
        <button><i class="fas fa-users-cog"></i> Shared with me</button>
      </div>
      <ul className="list">
        <li className='list-item'>
          <div className="item-head">
            <div className="left">
              <h2>New Project!!</h2>
              <i class="fas fa-pencil-alt"></i> <span>gdgr@gmail.com</span>
            </div>
            <div className="right">
              <i class="fas fa-cog"></i>
            </div>
          </div>
          <div className="item-body">
            <p>Description</p>            
          </div>
          <div className="item-bottom">
              <div className="first">
                <i class="fas fa-user-friends"></i> <span>1</span>
                <i class="fas fa-comments"></i>
                <span>0</span>
              </div>
              <div className="second">
                <i class="fas fa-trash"></i>
              </div>
            </div>
        </li>
        
        <li className='list-item'>
          <div className="item-head">
            <div className="left">
              <h2>New Project!!</h2>
              <i class="fas fa-pencil-alt"></i> <span>gdgr@gmail.com</span>
            </div>
            <div className="right">
              <i class="fas fa-cog"></i>
            </div>
          </div>
          <div className="item-body">
            <p>Description</p>            
          </div>
          <div className="item-bottom">
              <div className="first">
                <i class="fas fa-user-friends"></i> <span>1</span>
                <i class="fas fa-comments"></i>
                <span>0</span>
              </div>
              <div className="second">
                <i class="fas fa-trash"></i>
              </div>
            </div>
        </li>
        <li className='list-item'>
          <div className="item-head">
            <div className="left">
              <h2>New Project!!</h2>
              <i class="fas fa-pencil-alt"></i> <span>gdgr@gmail.com</span>
            </div>
            <div className="right">
              <i class="fas fa-cog"></i>
            </div>
          </div>
          <div className="item-body">
            <p>Description</p>            
          </div>
          <div className="item-bottom">
              <div className="first">
                <i class="fas fa-user-friends"></i> <span>1</span>
                <i class="fas fa-comments"></i>
                <span>0</span>
              </div>
              <div className="second">
                <i class="fas fa-trash"></i>
              </div>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default Projects
