import React from 'react';


const Header = () => {
    return (
        <>
            <div className="main">

                <div className="intro" style={{marginLeft:"10px"}}>
                    <h1>Mass People <br />
                    Oriented Software</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Voluptatibus magnam cum <br />corrupti ut ab quibusdam assumenda deserunt,</p>

                    <div className="btns">
                    <button className='my-btn1'>Get Started</button>
                    <button className='my-btn2'>Download</button>
                        
                    </div>
                </div>

                <div className="myimg">
                    <img src="./images/header.jpg" alt="" />

                </div>

            </div>
        </>
    )
}

export default Header