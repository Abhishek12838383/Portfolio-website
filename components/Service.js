import React from 'react'
import './Service.css'

function Service() {
  return (
    <div className='service'>
      <h1 className='heading'>My Service</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laudantium ab laborum, consequuntur qui aliquam, perspiciatis corporis sint, eligendi mollitia molestias assumenda voluptatum reprehenderit debitis in. Nostrum, officia ipsum. Id dignissimos esse, culpa odio non ut laboriosam saepe a maxime, excepturi cupiditate delectus iusto tempore obcaecati debitis facilis perferendis unde!</h4>

      <div className="services">
        <div className="service-1">
            <div className="service-1-icon">
      <img src="https://cdn-icons-png.flaticon.com/512/2721/2721264.png" alt="" />
            </div>
            <h1>UI/UX Design</h1>
            <p>Mobile design, web design</p>
        </div>
        <div className="service-2">
<div className="service-2-icon">
<img src="https://cdn1.vectorstock.com/i/1000x1000/33/10/ux-ui-design-icon-outline-vector-33243310.jpg" alt="" />
            </div>
           
            <h1>Front End Developer</h1>
            <p>E-commerce, blogs</p>
        </div>
      </div>
    </div>
  )
}

export default Service
