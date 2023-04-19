import React from 'react'
import './editproject.css'
import Btn from '../../components/button/Btn'

const EditProject = () => {
    return (
        <div className='edit-container'>
            <div className="edit-head">
                <h1>Project title</h1>
                <i class="fas fa-pencil-alt"></i>Created by:<span className='admin'>vsvdzv@gmail.com</span>
            </div>
            <div className="edit-body">
                <div>
                <label htmlFor="name">Name</label>
                <form>

                    <input type="text" className='input' id="name"></input>
                    <Btn text='Update name' bgcolor='gray' color='white' />
                </form>
                <label htmlFor="desc">Description</label>
                <form className="line">

                    <textarea className='input' id="desc"></textarea>
                    <Btn text='Update description' bgcolor='gray' color='white' />
                </form>
                <label htmlFor="email">Add Member (email)</label>
                <form className="line">

                    <input type="email" className='input' id="email"></input>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
                    <span>Admin</span>
                    </div>
                    
                    <Btn icon={[<i class="fa fa-user-plus" aria-hidden="true"></i>]} bgcolor='yellow' color='black' />
                </form>
                </div>
            </div>
        </div>
    )
}

export default EditProject
