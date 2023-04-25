import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join Our Defi Community</h2>
            <form action="https://getform.io/f/a8682b52-cedc-4a0b-a475-a098f53e078f" method='POST'>
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='Enter your Email.' />
                    <button className='btn'>Sign Up</button>
                </div>
                <div className='form-container'>
                    <input type="checkbox" /><p>Yes, i agree to recive email commuications from DeFi.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe