import React from 'react';
import Data from './Data';

const Middle = () => {
  return (
    <>
    <div className="middle">
        <h1>HOW IT WORK FOR YOU?</h1>
        <p style={{fontSize: "26px"}}>Lets Explore More</p>


        <div className="middle1">
            
            {
                Data.map((item,i)=>{
                    return(
                        <div className="my">
                            <div>{item.img}</div>
                            <h2>{item.head}</h2>
                            <p>{item.des}</p>
                        </div>
                    )
                })
            }

        </div>


    </div>
    </>
  )
}

export default Middle