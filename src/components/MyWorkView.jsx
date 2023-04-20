import React from 'react';
import {NavLink} from "react-router-dom";

// import img
const MyWorkView = (props) => {
  return (
    <>
        <li className={"d-none d-lg-block portfolio-item " + props.bordercolor }>
            <NavLink to={`${process.env.PUBLIC_URL}/`+ props.links_url } target={props.targeturl} className="d-block" >
                <div className={"portfolio_img " + props.overlay_color}><img className='w-100 img-fluid' src={props.portfolio_img} alt="icon"/></div>
                <div className="content">
                  <h2>{props.title}</h2>
                </div>
            </NavLink>
        </li>
    </>
  )
}

export default MyWorkView;