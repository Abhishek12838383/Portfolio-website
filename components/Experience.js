import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <div className="title">
        <h1>My Experience</h1>

        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque esse pariatur maiores voluptate, eligendi libero sunt quis sapiente et ipsum nesciunt quidem harum quia repudiandae doloremque reprehenderit eius suscipit inventore ipsam ducimus tenetur veritatis a. Velit vitae assumenda accusamus exercitationem at iste dolore corrupti sint totam! Assumenda at omnis quibusdam.</h4>
      </div>
     
        <div className="exp">
        <div className="exp-1">
            <div className="exp-1-icon">
      <img src="https://cdn-icons-png.flaticon.com/512/2721/2721264.png" alt="" />
            </div>
            <h1>UI/UX Design</h1>
            <p>Oct 2022 - Dec 2022</p>
        </div>
        <div className="exp-2">
            <div className="exp-2-icon">
      <img src="https://cdn-icons-png.flaticon.com/512/6348/6348379.png" alt="" />
            </div>
            <h1>Product Design</h1>
            <p>Jun 2022 - Aug 2022</p>
        </div>
        <div className="exp-3">
            <div className="exp-3-icon">
      <img src="https://cdn-icons-png.flaticon.com/512/2721/2721304.png" alt="" />
            </div>
            <h1>Interface Designer</h1>
            <p>May 2022 - Jun 2022</p>
        </div>
        </div>

     
    </div>
  )
}

export default Experience
