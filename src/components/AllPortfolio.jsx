import React from 'react';
import {Col} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";
import WorkViewULTwo from "../components/WorkViewULTwo";


// 
import project_01 from "../images/project_01.png";
import project_02 from "../images/project_02.png";
import project_03 from "../images/project_03.png";
import project_04 from "../images/project_04.png";
import project_05 from "../images/project_05.png";
import project_06 from "../images/project_06.png";
import project_07 from "../images/project_07.png";

// WorkViewULArray
const WorkViewULTwoArray =[
  {
    key:'0',
    viewbtn:'View Live',
    viewlink:'https://foodzilla.co/',
    ledbanner:project_01,
    titleproject:'FoodZilla',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
  {
    key:'1',
    viewbtn:'View Live',
    viewlink:'https://walupp.com/',
    ledbanner:project_02,
    titleproject:'Walupp',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
  {
    key:'2',
    viewbtn:'View Live',
    viewlink:'https://ar-instrumed.com.au/',
    ledbanner:project_03,
    titleproject:'A-R Instrumed',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
  {
    key:'3',
    viewbtn:'View Live',
    viewlink:'http://www.relixnetworks.com/',
    ledbanner:project_04,
    titleproject:'Relix Networks',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
  {
    key:'4',
    viewbtn:'View Live',
    viewlink:'https://www.artofmujtaba.com/portfolio_projects/qualifyhealths/',
    ledbanner:project_05,
    titleproject:'Qualify Healths',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
  {
    key:'5',
    viewbtn:'View Live',
    viewlink:'https://www.artofmujtaba.com/portfolio_projects/meditro/',
    ledbanner:project_06,
    titleproject:'Meditro',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
  {
    key:'6',
    viewbtn:'View Live',
    viewlink:'https://www.artofmujtaba.com/portfolio_projects/numero/',
    ledbanner:project_07,
    titleproject:'Numero IX',
    paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
  },
]
const AllPortfolio =() => {
  return (
    <>
        <div className=''>
        <Col className='col-xx-9 col-xl-10 col-lg-11 col-11 mx-auto'>
          <div className='row workview_ul align-items-center'>
            <Col className='col-6'><div className='header position-relative'><div className='navbar h-auto'><Link to={'/'} className={'navbar-brand'}><h1 className='fontsize26 text-white'><span>M</span>ujtaba</h1></Link></div></div></Col>
            <Col className='col-6 text-end'><Link to={'/'} className="btn main_bg text-white">Go To Preview</Link></Col>
              {WorkViewULTwoArray.map((val) =>{
                return(
                  <WorkViewULTwo
                    key={val.key}
                    viewbtn={val.viewbtn}
                    viewlink={val.viewlink}
                    ledbanner={val.ledbanner}
                    titleproject={val.titleproject}
                    paragraph_text={val.paragraph_text}
                  />
                )
              })}
          </div>
          </Col>
        </div>
    </>
  )
}

export default AllPortfolio;