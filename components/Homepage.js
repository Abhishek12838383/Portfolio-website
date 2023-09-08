import React from 'react'
import Navbar from './Navbar'
import './Homepage.css'

function Homepage() {
  // function toggleMenu(){
  //   const menu = document.querySelector(".homepage");
  //   menu.className.toggle("open");
  // }
  
  return (
    <div className='homepage' >
    <Navbar/>
      

      <div className="hero">
  
      <div className="hero-text">
      <span className='icon-menu' onclick="toggleMenu()" class="material-symbols-outlined">
menu
</span>
      <h1>I'm Abhishek Sharma <mark>Front End</mark> Developer</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quam blanditiis provident placeat veniam quod asperiores facere! Cupiditate saepe laboriosam facere voluptatem aliquid ad molestias consequuntur inventore ipsam voluptatibus consectetur beatae perferendis obcaecati quibusdam expedita temporibus, sint doloremque modi asperiores vero ducimus pariatur? Quos quibusdam libero aperiam, voluptatem voluptate explicabo.</p>
<button className="hire"> HIRE ME <span className='arrow' class="material-symbols-outlined">
arrow_forward
</span></button>
      </div>

<div className="hero-img">
  <img src="https://png.pngtree.com/png-vector/20190121/ourlarge/pngtree-cartoon-style-people-jobs-formal-wear-png-image_509230.jpg" alt="" />
</div>
      </div>
      
    </div>
  )
}

export default Homepage

