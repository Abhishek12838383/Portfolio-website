import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-box">
        <div className="circle-1">
        <span title='Home' class="material-symbols-outlined">
home
</span>
        </div>
        <div className="circle-2">
        <span title='Service' class="material-symbols-outlined">
settings
</span>
        </div>
        <div className="circle-2">
        <span title='Education' class="material-symbols-outlined">
school
</span>
        </div>
        <div className="circle-2">
        <span title='Work' class="material-symbols-outlined">
work
</span>
        </div>
        <div className="circle-2">
        <span title='Portfolio' class="material-symbols-outlined">
Description
</span>
        </div>
        <div className="circle-2">
        <span title='Contact' class="material-symbols-outlined">
call
</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
