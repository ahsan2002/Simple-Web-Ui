import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className="myimg">
                    <h2>About Us</h2>
                    <p>Do you want to be even more successful? Learn to love learning and growth. <br/>The more effort you put into improving your skills,</p>
                    <p style={{marginTop:"20px"}}>Copyright ©2023 All rights reserved | This template is made with ❤  by Ahsan</p>
                    
                </div>

                <div className="last">
                    <h2>Newsletter</h2>
                    <p>Stay updated with our latest trends</p>
                    <input type="text" placeholder='Enter your E-mail' />

                    <div className="mybtn">
                        <button>Sign In</button>
                    </div>
                </div>

                <div className="icon">
                    <h2>Follow Us</h2>
                    <p>Let be Social</p>
                    <div className="icons">
                        <FacebookSharpIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Footer