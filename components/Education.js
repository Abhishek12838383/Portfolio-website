import React from 'react'
import './Education.css'

function Education() {
  return (
    <div className='education'>
      <h1>My Education</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eaque nulla aliquid atque distinctio ab accusantium voluptates dolores eos temporibus vitae nesciunt libero incidunt quas ratione saepe adipisci unde natus nisi voluptatum. Similique iste voluptatum quidem sequi perferendis aliquid esse ea, neque tempora nostrum minima nisi labore ex commodi amet!</h4>
       <div className="edu">
        <div className="edu-1">
            <div className="edu-1-icon">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2721/2721264.png" alt="" /> */}
            </div>
            <h1>T.R.M Public School </h1>
            <h5>10th</h5>
            <p>April 2015 - April 2016</p>
        </div>
        <div className="edu-2">
            <div className="edu-2-icon">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/6348/6348379.png" alt="" /> */}
            </div>
            <h1>T.R.M Public School </h1>
            <h5>12th</h5>
            <p>April 2017 - April 2018</p>
        </div>
        <div className="edu-3">
            <div className="edu-3-icon">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2721/2721304.png" alt="" /> */}
            </div>
            <h1>R.D Engineering College</h1>
            <h5>B.tech</h5>
            <p>July 2018 - May 2022</p>
        </div>
        </div>
    </div>
  )
}

export default Education
