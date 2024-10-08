import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const WorkViewUL = (props) => {
  return (
    <>
        <Card className=''>
            <div className='text-center banner'><img clasName="img-fluid" src={props.ledbanner} alt="icon"/></div>
            <Card.Body>
                <h4 className="m-0 title">{props.titleproject}</h4>
                <p className="m-0 fontsize12">{props.paragraph_text}</p>
                <Link to={ `${process.env.PUBLIC_URL}/` + props.viewlink } target="_blank" className='ul-btn'>{props.viewbtn}</Link>
            </Card.Body>
        </Card>
    </>
  )
}

export default WorkViewUL;