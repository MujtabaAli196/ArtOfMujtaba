import React from 'react';
import { Link } from 'react-router-dom';

// 
import finderimg from "../images/finder.png";

const Empty = () => {
  return (
    <>
      <div className='h-100'>
        <div className='d-flex align-item-center'>
          <div className="empty-state">
            <div className="empty-state__content text-center">
              <div className="empty-state__icon">
                <img src={finderimg} alt="icon"/>
              </div>
              <div className="empty-state__message">This page is outside of the universe.</div>
              <div className="empty-state__help">The page you are trying to access doesn't exist or has been moved. <br/> Try going back to my homepage..</div>
              <Link to={'/'} className='btn btn-web mt-4 fontweightbold border-0'>Go Back To Home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Empty;