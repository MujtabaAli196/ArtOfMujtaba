import React from 'react';
import {Card} from "react-bootstrap";

const WorkViewUL = (props) => {
  return (
    <>
        <Card className=''>
            <div className='text-center banner'><img clasName="img-fluid" src={props.ledbanner} alt="icon"/></div>
            <Card.Body>
                <h4 className="m-0 title">{props.titleproject}</h4>
                <p className="m-0 fontsize12">{props.paragraph_text}</p>
                <a href={'/' + props.viewlink} target="_blank" className='ul-btn'>{props.viewbtn}</a>
            </Card.Body>
        </Card>
    </>
  )
}

export default WorkViewUL;