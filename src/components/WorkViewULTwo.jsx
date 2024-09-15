import React from 'react';
import {Card, Nav} from "react-bootstrap";

const WorkViewUL = (props) => {
  return (
    <>
      <div className='col-xx-3 col-xl-4 col-lg-6 col-md-6 mb-4'>
        <Card className='h-auto'>
            <div className='text-center banner'><img clasName="img-fluid" src={props.ledbanner} alt="icon"/></div>
            <Card.Body>
                <h4 className="m-0 title">{props.titleproject}</h4>
                <p className="m-0 fontsize12">{props.paragraph_text}</p>
                <Nav.Link href={'' + props.viewlink} target="_blank" className='ul-btn'>{props.viewbtn}</Nav.Link>
            </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default WorkViewUL;