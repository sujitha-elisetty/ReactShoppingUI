import React from 'react'

const Header = () => {
  return (
    <div className = 'headerSection'>
          <div className = 'Left'>
            <div className="title">
              <h2>Shopping Center</h2>
            </div>
          </div>
          <div className = 'Center'>
            <ul>
              <li>Women</li>
              <li>Men</li>
              <li>Children</li>
              <li>Beauty</li>
            </ul>
          </div>
          <div className="Search">
            <input type="text" placeholder ="Search..." />
          </div>
          <div className = 'Right'>
            <div className="signin"> SignIn/SignUp</div>
          <div className="cart"> Cart
           </div>
          </div>
    </div>

  )
}

export default Header