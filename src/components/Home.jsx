import React from "react";
import { Col, Row, Nav, InputGroup, NavItem, Form, Button } from "react-bootstrap";
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import OwlCarousel from "react-owl-carousel";
// import component
import ExperienceLoop from "../components/ExperienceLoop";
import FrontendSkillsLoop from "../components/FrontendSkillsLoop";
import BackendSkillsLoop from "../components/BackendSkillsLoop";
// import WordpressSkillsLoop from "../components/WordpressSkillsLoop";
import ToolsLoop from "../components/ToolsLoop";
import ExperienceUL from "../components/ExperienceUL";
import SocialLink from "../components/SocialLink";
// import MyWorkView from "../components/MyWorkView";
// import WorkViewUL from "../components/WorkViewUL";
import Footer from "../components/Footer";

// import import
import experience1 from "../images/emblem.png";
import experience2 from "../images/check-mark.png";
import experience3 from "../images/happy.png";
import arrowimg from "../images/arrow-right-svgrepo.svg";
import facebookicon from "../images/fbicon.svg";
import phoneimg from "../images/whatsapp-svgr.svg";
import gmailimg from "../images/gmail-svg.svg";
// import twitter from "../images/twicon.svg";
import linkedinicon from "../images/lindicon.svg";
import Instagramicon from "../images/Instagramicon.svg";
import upworkicon from "../images/upwork-icon.svg";
import fiverricon from "../images/fiverr-icon.svg";
import githubicon from "../images/github-svgr.svg";
// import userimg from "../images/hero-imguserimg.png";
import blogimg from "../images/about-img2.png";
import addressicon from "../images/address.png";
import phoneicon from "../images/phone.png";
import emailicon from "../images/email.png";
// forntendskills tab icons
import HTML5icon from "../images/html5-svg.svg";
import CSS3icon from "../images/css3-svg.svg";
import javascripticon from "../images/javascript-svg.svg";
import jqueryicon from "../images/jquery-svg.svg";
import bootstrapicon from "../images/bootstrap-svg.svg";
import reacticon from "../images/react-svg.svg";
import vueicon from "../images/vue-svg.svg";
import sassicon from "../images/sass-svg.svg";
import lessicon from "../images/less-svg.svg";
import ebayicon from "../images/ebay-svg.svg";
import tailwindicon from "../images/tailwind-svg.svg";
// forntendskills tab icons
import phpicon from "../images/php-svgr.svg";
import laravelicon from "../images/laravel-svgr.svg";
import codeignitericon from "../images/codeigniter-svgr.svg";
// tools tab icons
import ajaxicon from "../images/ajax.png";
import giticon from "../images/git-svg.svg";
import webpackicon from "../images/webpack-svg.svg";
import npmicon from "../images/npm-svg.svg";
import vscodeicon from "../images/vscode-svg.svg";
import adobephotoshopicon from "../images/adobe-photoshop-svg.svg";
import adobeillustratoricon from "../images/adobe-illustrator-svg.svg";
import figmaicon from "../images/figma-svg.svg";
// 
import arhamsoft_img from "../images/arhamsoft.png";
import eshpdesigner_img from "../images/eshpdesigner.png";
import xperts_img from "../images/xperts.png";
import face44_img from "../images/face44.png";
import tecmyer_img from "../images/tecmyer.png";
import aliftech_img from "../images/aliftech.png";
import dtmhelderberg_img from "../images/dtmhelderberg.png";
import exactprinto_img from "../images/exactprinto.png";
import showdesign from "../images/show-design.png";
import testimonials from "../images/testimonials.png";
// 
// import portfolio_foodzilla_img from "../images/portfolio_foodzilla_img.png";
// import portfolio_walupp_img from "../images/portfolio_walupp_img.png";
import portfolio_fs_img from "../images/portfolio_fs_img.png";
import portfolio_yzee_img from "../images/portfolio_yzee_img.png";
import portfolio_aribstrumed_img from "../images/portfolio_aribstrumed_img.png";
import portfolio_listandsell_img from "../images/portfolio_listandsell_img.png";
import portfolio_alphaauto_img from "../images/portfolio_alphaauto_img.png";
import portfolio_numero_img from "../images/portfolio_numero_img.png";
import portfolio_alloywheels_img from "../images/portfolio_alloywheels_img.png";
import portfolio_meditro_img from "../images/portfolio_meditro_img.png";
import portfolio_SMMProject_img from "../images/portfolio_SMMProject_img.png";
// import portfolio_bitvortex_img from "../images/portfolio_bitvortex_img.png";
// import portfolio_empty_img from "../images/portfolio_empty_img.png";

import mobileScreen_01 from "../images/mobileScreen_01.png";
import mobileScreen_02 from "../images/mobileScreen_02.png";
import mobileScreen_03 from "../images/mobileScreen_03.png";
import mobileScreen_04 from "../images/mobileScreen_04.png";
import mobileScreen_05 from "../images/mobileScreen_05.png";
import mobileScreen_06 from "../images/mobileScreen_06.png";
import mobileScreen_07 from "../images/mobileScreen_07.png";
import mobileScreen_08 from "../images/mobileScreen_08.png";

// 
// import project_01 from "../images/project_01.png";
// import project_02 from "../images/project_02.png";
// import project_03 from "../images/project_03.png";
// import project_04 from "../images/project_04.png";
// import project_05 from "../images/project_05.png";
// import project_06 from "../images/project_06.png";
// import project_07 from "../images/project_07.png";

// CheackBoxLoopArray
const ExperienceLoopArray = [
  {
    key: "0",
    experienceimg: experience1,
    arrowicon: arrowimg,
    title: "07+",
    text: "Years of Experience",
    movetolink: "portfolio",
  },
  {
    key: "1",
    experienceimg: experience2,
    arrowicon: arrowimg,
    title: "200+",
    text: "Completed Projects",
    movetolink: "projects",
  },
  {
    key: "2",
    experienceimg: experience3,
    arrowicon: arrowimg,
    title: "60+",
    text: "Happy Clients",
    movetolink: "testimonials",
  },
]
// SocialLinkArray
const SocialLinkArray = [
  {
    key: "0",
    social_link: "https://www.fiverr.com/artofmujtaba",
    sociall_img: fiverricon,
    title: "fiverr",
  },
  {
    key: "1",
    social_link: "https://www.facebook.com/mujtaba.ali.73550794",
    sociall_img: facebookicon,
    title: "Facebook",
  },
  {
    key: "2",
    social_link: "https://github.com/MujtabaAli196",
    sociall_img: githubicon,
    title: "Github",
  },
  {
    key: "3",
    social_link: "https://www.linkedin.com/in/mujtaba-ali-809a24a0/",
    sociall_img: linkedinicon,
    title: "LinkedIn",
  },
  {
    key: "4",
    social_link: "https://www.instagram.com/mujtabaa158/",
    sociall_img: Instagramicon,
    title: "Instagram",
  },
  {
    key: "5",
    social_link: "https://www.upwork.com/freelancers/mujtabaali3",
    sociall_img: upworkicon,
    title: "upwork",
  },
]
// FrontendSkillsLoopArray
const FrontendSkillsLoopArray = [
  {
    key: "0",
    iconimg: HTML5icon,
    tooltiptext: "HTML5",
  },
  {
    key: "1",
    iconimg: CSS3icon,
    tooltiptext: "CSS3",
  },
  {
    key: "2",
    iconimg: tailwindicon,
    tooltiptext: "tailwind",
  },
  {
    key: "3",
    iconimg: javascripticon,
    tooltiptext: "JavaScript",
  },
  {
    key: "4",
    iconimg: jqueryicon,
    tooltiptext: "Jquery",
  },
  {
    key: "5",
    iconimg: bootstrapicon,
    tooltiptext: "Bootstrap",
  },
  {
    key: "6",
    iconimg: reacticon,
    tooltiptext: "React",
  },
  {
    key: "7",
    iconimg: vueicon,
    tooltiptext: "Vue",
  },
  {
    key: "8",
    iconimg: sassicon,
    tooltiptext: "Sass",
  },
  {
    key: "9",
    iconimg: lessicon,
    tooltiptext: "Less",
  },
  {
    key: "10",
    iconimg: ebayicon,
    tooltiptext: "eBay Stores",
  },
]
// BackendSkillsLoopArray
const BackendSkillsLoopArray = [
  {
    key: "0",
    iconimg: phpicon,
    tooltiptext: "PHP",
  },
  {
    key: "1",
    iconimg: laravelicon,
    tooltiptext: "Laravel",
  },
  {
    key: "2",
    iconimg: codeignitericon,
    tooltiptext: "Codeigniter",
  },
]
// WordpressSkillsLoopArray
// const WordpressSkillsLoopArray = [
//   {
//     key: "0",
//     iconimg:phpicon,
//     tooltiptext:"PHP",
//   },
// ]
// WorkViewULArray
// const WorkViewULArray =[
//   {
//     key:'0',
//     viewbtn:'View Live',
//     viewlink:'https://foodzilla.co/',
//     ledbanner:project_01,
//     titleproject:'FoodZilla',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
//   {
//     key:'1',
//     viewbtn:'View Live',
//     viewlink:'https://walupp.com/',
//     ledbanner:project_02,
//     titleproject:'Walupp',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
//   {
//     key:'2',
//     viewbtn:'View Live',
//     viewlink:'https://ar-instrumed.com.au/',
//     ledbanner:project_03,
//     titleproject:'A-R Instrumed',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
//   {
//     key:'3',
//     viewbtn:'View Live',
//     viewlink:'https://www.artofmujtaba.com/portfolio_projects/smm-project/',
//     ledbanner:project_04,
//     titleproject:'SMM Project',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
//   {
//     key:'4',
//     viewbtn:'View Live',
//     viewlink:'https://www.artofmujtaba.com/portfolio_projects/qualifyhealths/',
//     ledbanner:project_05,
//     titleproject:'Qualify Healths',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
//   {
//     key:'5',
//     viewbtn:'View Live',
//     viewlink:'https://www.artofmujtaba.com/portfolio_projects/meditro/',
//     ledbanner:project_06,
//     titleproject:'Doc-Tro',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
//   {
//     key:'6',
//     viewbtn:'View Live',
//     viewlink:'https://www.artofmujtaba.com/portfolio_projects/numero/',
//     ledbanner:project_07,
//     titleproject:'Numero IX',
//     paragraph_text:'Responsive design Slider/scroller Server upload Browser compatibility',
//   },
// ]
// ToolsLoopArray
const ToolsLoopArray = [
  {
    key: "0",
    iconimg: ajaxicon,
    tooltiptext: "Ajex",
  },
  {
    key: "1",
    iconimg: giticon,
    tooltiptext: "Git (GitHub)",
  },
  {
    key: "2",
    iconimg: webpackicon,
    tooltiptext: "Webpack",
  },
  {
    key: "3",
    iconimg: npmicon,
    tooltiptext: "NPM",
  },
  {
    key: "4",
    iconimg: vscodeicon,
    tooltiptext: "VS Code",
  },
  {
    key: "5",
    iconimg: adobephotoshopicon,
    tooltiptext: "Photoshop",
  },
  {
    key: "6",
    iconimg: adobeillustratoricon,
    tooltiptext: "illustrator",
  },
  {
    key: "7",
    iconimg: figmaicon,
    tooltiptext: "Figma",
  },
]
// ExperienceULArray
const ExperienceULArray = [
  {
    key: "0",
    avatar_pic: xperts_img,
    title: "Xperts.net.pk",
    multi_color: 'xpert_bg-color',
    subtitle: "Learing Developments & Designing",
    paragraph: "Monitored technical aspects of the front-end delivery for projects.",
    date: "2012 To 2014",
    linkgo: "https://www.xperts.net.pk/",
  },
  {
    key: "1",
    avatar_pic: eshpdesigner_img,
    title: "eCommerce websites & eBay Stores Designs",
    multi_color: 'eshopdesigner_bg-color',
    subtitle: "eCommerce-eBay Developer",
    paragraph: "Converted Photoshop layouts to web & eBay stores using HTML.",
    date: "2015 To 2017",
    linkgo: "https://www.eshopdesigners.com/",
  },
  {
    key: "2",
    avatar_pic: arhamsoft_img,
    title: "Web Design & Development - ArhamSoft",
    subtitle: "Senior Team Lead Front-End Developer",
    multi_color: 'arhamsoft_bg-color',
    paragraph: "Collaborate with creative and development teams on the execution of ideas.",
    date: "2018 To 2019",
    linkgo: "https://www.arhamsoft.com/",
  },
  {
    key: "3",
    avatar_pic: face44_img,
    title: "Digital Design Support Agency - Face44",
    multi_color: 'face44_bg-color',
    subtitle: "Senior Front-End Developer & UI Designer",
    paragraph: "Collaborate with creative and development teams on the execution of ideas.",
    date: "2019",
    linkgo: "https://face44.com/",
  },
  {
    key: "4",
    avatar_pic: tecmyer_img,
    title: "Tecmyer Australia",
    multi_color: 'tecmyer_bg-color',
    subtitle: "Senior Front-End Developer & UI Designer",
    paragraph: "Collaborate with creative and development teams on the execution of ideas.",
    date: "2020 To 2021",
    linkgo: "https://tecmyer.com.au/",
  },
  {
    key: "5",
    avatar_pic: aliftech_img,
    title: "Alif Tech",
    multi_color: 'aliftech_bg-color',
    subtitle: "Senior Front-End Developer & UI Designer",
    paragraph: "Collaborate with creative and development teams on the execution of ideas.",
    date: "Present",
    linkgo: "https://alliftech.com/",
  },
  {
    key: "6",
    avatar_pic: dtmhelderberg_img,
    title: "dtmhelderberg",
    multi_color: 'dtmhelderberg_bg-color',
    subtitle: "Senior Front-End Developer & UI Designer",
    paragraph: "Collaborate with creative and development teams on the execution of ideas.",
    date: "Present",
    linkgo: "https://dtmhelderberg.co.za/",
  },
  {
    key: "7",
    avatar_pic: exactprinto_img,
    title: "ExactPrinto",
    multi_color: 'exactprinto_bg-color',
    subtitle: "Senior Graphic Designer",
    paragraph: "Create visual concepts, using computer software, to communicate ideas that inspire, captivate consumers.",
    date: "Present",
    linkgo: "https://www.exactprinto.com/",
  },
]
// optionsprojects
const optionsprojects = {
  margin: 30,
  responsiveClass: true,
  autoplayHoverPause: true,
  nav: false,
  dots: true,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 300,
  center: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1500: {
      items: 1,
    },
  },
};
// workviewprojects
const workviewprojects = {
  margin: 5,
  responsiveClass: true,
  nav: false,
  dots: true,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 300,
  // center: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
// Home
const Home = () => {
  return (
    <>
      <main>
        {/* Home */}
        <div id="home" className="hero-section position-relative d-grid align-items-center">
          <div className='hero-img d-flex'>
            {/* <div className='layer'></div> */}
            <div className='hero_content text-start d-grid col-xxl-9 col-lg-10 col-11 mx-auto text-center text-lg-start'>
              <Row className="align-items-center">
                <Col lg={'7'}>
                  <Button variant='' className='hello-btn d-inline-flex align-items-center justify-content-center mx-lg-0 mx-auto'>Hello!</Button>
                  <h1 className="mb-0">I'm <span className="heading_fontLobster">Mujtaba</span></h1>
                  <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start" style={{ gap: '15px' }}>
                    <h3 className="mb-0">We are Monst In</h3>
                    <TypeAnimation
                      preRenderFirstString={true}
                      sequence={[
                        500,
                        'Adobe Photoshop',
                        1000,
                        'Adobe Illustrator',
                        500,
                        'Figma',
                        1000,
                        'Html 5',
                        500,
                        'Css 3',
                        1000,
                        'JavaScript',
                        500,
                        'WordPress',
                        1000,
                        'React.js',
                        500,
                        'Social Meda Post Designs',
                        1000,
                      ]}
                      speed={20}
                      style={{ fontSize: '2rem' }}
                      repeat={Infinity}
                    />
                  </div>
                  <p className="mb-0 d-md-block d-none">ArtofMujtaba is committed to excellence in the field of software development. We're a Web and Mobile Design and Development Agency, With expertise in UI/UX design and development, using HTML, CSS, JavaScript, Bootstrap, SCSS/SASS, Reactjs, WordPress, NodeJS & JSON, and PHP, Laravel, codeigniter with online shopping store services, we engineer solutions that captivate users from the first click. Trust <Link style={{textDecoration:'underline'}} href="https://wa.me/%2B923344558449?text=Feel%20free%20to%20contact%20me%2024%2F7hours.">www.artofmujtaba.com</Link> to bring your vision to life.</p>
                  <Link rel="_blank" href="https://www.artofmujtaba.com/portfolio_projects/cv/Mujtaba_Front-End_Developer_resume.pdf" class="hire">View CV<div class="shine"></div></Link>
                  <div className="social_2 justify-content-center d-md-none d-flex">
                    <Nav className="justify-content-between w-100">
                      {SocialLinkArray.map((val) => {
                        return (
                          <SocialLink
                            key={val.key}
                            social_link={val.social_link}
                            sociall_img={val.sociall_img}
                            title={val.title}
                          />
                        )
                      })}
                    </Nav>
                  </div>
                </Col>
                <Col lg={'5'} className="text-end d-lg-block d-none"><img className="img-fluid" src={showdesign} alt="show-design" /></Col>
              </Row>
            </div>
            {/* <div className='layer'><img className='img-fluid' src={userimg} alt="icon"/></div> */}
            <div className="scroll-down d-none d-sm-flex"><Link to="about" title="Scroll Down" spy={true} smooth={true}>Scroll</Link></div>
            {/*  */}
            <div className='social d-md-flex d-none'>
              <Nav className="">
                {SocialLinkArray.map((val) => {
                  return (
                    <SocialLink
                      key={val.key}
                      social_link={val.social_link}
                      sociall_img={val.sociall_img}
                      title={val.title}
                    />
                  )
                })}
                {/* <NavItem className=''>
                        <Link rel={'_blank'} to="https://github.com/MujtabaAli196" className="has-tooltip">
                          <p className='m-0'><img src={twitter} className="img-fluid" alt="icon"/></p>
                          <div className='custom-tooltip'>GitHub</div>
                        </Link>
                      </NavItem> */}
              </Nav>
            </div>
          </div>
          {/* <div className="hero-text">
                  <h1> We Design+Develop &amp; Build <br/> Creative Products </h1>
                  <a href="#contact" className="btn main_bg border-0">Get In Touch</a>
                </div> */}
        </div>
        {/*  */}
        <div className='pb-5'>
          <Col className='col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto'>
            <Row className='gx-0 align-items-center statistics-items justify-content-center'>
              {ExperienceLoopArray.map((val) => {
                return (
                  <ExperienceLoop
                    key={val.key}
                    experienceimg={val.experienceimg}
                    arrowicon={val.arrowicon}
                    title={val.title}
                    text={val.text}
                    movetolink={val.movetolink}
                  />
                )
              })}
            </Row>
          </Col>
        </div>
        {/* about */}
        <div id="about" className="section">
          <Col className='col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto'>
            <Row className='align-items-center'>
              <Col className="about-img col-lg-6 col-12">
                <div className="layer"><img src={blogimg} alt="User Name" /></div>
                <div className="layer"><img src={blogimg} alt="User Name" /></div>
              </Col>
              <Col className="col-lg-6 col-12">
                <div className='text-box-inline'>
                  <span className='subtitle'>About Me</span>
                  <h2> Need a <span className="heading_fontLobster">Creative Product?</span> <br /> I can Help You! </h2>
                  <p className=''>My name is Mujtaba Ali, I am a full stack web developer and graphic designer who has passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts.</p>
                  <div className='btns mt-4'>
                    {/* spy={true} smooth={true} */}
                    <a href='https://www.fiverr.com/artofmujtaba?up_rollout=true' rel="_blank" className='btn btn-web me-4'>Hire Me</a>
                    {/* <a href={'https://www.artofmujtaba.com/portfolio_projects/cv/Mujtaba_Front-End_Developer_resume.pdf'} rel="_blank" className='btn btn-outline-light d-inline-flex align-items-center justify-content-center' style={{fontWeight:'600',fontSize:'14px', minWidth:'120px', maxWidth:'120px'}}>View CV</a> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
        {/* Skill */}
        <div id="skills" className="section">
          <Col className='col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto'>
            <Tabs>
              <Row className='align-items-center'>
                <Col className="col-lg-6 col-12 mb-4 mb-lg-0">
                  <div className="text-box-inline">
                    <span className='subtitle'>My Skills</span>
                    <h2> What My Programming <br /> <span className="heading_fontLobster"> Skills Included?</span> </h2>
                    <p className="mb-5">I develop simple, intuitive and responsive user interface that helps users get things done with less effort and time with those technologies.</p>
                    <TabList>
                      <Tab>Frontend Skills</Tab>
                      <Tab>Tools</Tab>
                      <Tab>Backend Skills</Tab>
                      {/* <Tab>WordPress Skills</Tab> */}
                    </TabList>
                  </div>
                </Col>
                <Col className="col-lg-6 col-12">
                  <TabPanel>
                    <div className='skills-items'>
                      {FrontendSkillsLoopArray.map((val) => {
                        return (
                          <FrontendSkillsLoop
                            key={val.key}
                            iconimg={val.iconimg}
                            tooltiptext={val.tooltiptext}
                          />
                        )
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='skills-items'>
                      {ToolsLoopArray.map((val) => {
                        return (
                          <ToolsLoop
                            key={val.key}
                            iconimg={val.iconimg}
                            tooltiptext={val.tooltiptext}
                          />
                        )
                      })}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className='skills-items'>
                      {BackendSkillsLoopArray.map((val) => {
                        return (
                          <BackendSkillsLoop
                            key={val.key}
                            iconimg={val.iconimg}
                            tooltiptext={val.tooltiptext}
                          />
                        )
                      })}
                    </div>
                  </TabPanel>
                  {/* <TabPanel>
                          <div className='skills-items'>
                            {WordpressSkillsLoopArray.map((val) => {
                              return(
                                <WordpressSkillsLoop
                                  key={val.key}
                                  iconimg={val.iconimg}
                                  tooltiptext={val.tooltiptext}
                                />
                              )
                            })}
                          </div>
                        </TabPanel> */}
                </Col>
              </Row>
            </Tabs>
          </Col>
        </div>
        {/* Portfolio */}
        <div id="portfolio" className="section">
          <Col className='col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto'>
            <Row className=''>
              <Col className="col-lg-6 col-12 mb-4 mb-lg-0 order-lg-0 order-1">
                <div className="experience_ul">
                  <OwlCarousel className='owl-theme' {...optionsprojects}>
                    {ExperienceULArray.map((val) => {
                      return (
                        <ExperienceUL
                          key={val.key}
                          avatar_pic={val.avatar_pic}
                          title={val.title}
                          multi_color={val.multi_color}
                          subtitle={val.subtitle}
                          paragraph={val.paragraph}
                          date={val.date}
                          linkgo={val.linkgo}
                        />
                      )
                    })}
                  </OwlCarousel>
                </div>
              </Col>
              <Col className="col-lg-6 col-12 order-0">
                <div className="text-box-inline">
                  <span className='subtitle'>Experience</span>
                  <h2> 7+ Years of <span className="heading_fontLobster">Experience With Many<br /> Awards!</span> </h2>
                  <p className="mb-3 mb-lg-5">I have been developing sites for 7 years and i know for sure the main trends and directions of modern design, I have been a visionary and a reliable software engineering partner for world-class brands. You will get a decent result as you expect.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
        {/* Project */}
        <div id="project" className="section">
          <Col className='col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto'>
            <ul className="portfolio-items list-unstyled">
              <li className='nav-itemm'>
                <div className="text-box-inline">
                  <span className='subtitle'>MY WORKS</span>
                  <h2> See My Works Which <br /><span className="heading_fontLobster">Will Amaze You!</span> </h2>
                  <p className="mb-3 mb-lg-5">We develop the best quality website that serves for the long-term. Well-documented, clean, easy and elegant interface helps any non-technical clients.</p>
                </div>
              </li>
              <ul className="d-none d-lg-block">
                <li className="portfolio-item fslegals_border">
                  <a href="https://fslegals.com/" rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_fslegals"><img className='w-100 img-fluid' src={portfolio_fs_img} alt="icon" /></div>
                    <div className="content"><h2>FSLegals <br /> <small>Wordpress Project</small></h2></div>
                  </a>
                </li>
                {/* <li className="portfolio-item foodzilla_border">
                        <a href="https://foodzilla.co/" rel="" className="d-block" >
                            <div className="portfolio_img overlay overlay_foodzilla"><img className='w-100 img-fluid' src={portfolio_foodzilla_img} alt="icon"/></div>
                            <div className="content"><h2>Foodzilla Web <br/> <small>E-Commrence Project</small></h2></div>
                        </a>
                      </li>
                      <li className="portfolio-item walupp_border">
                        <a href="http://walupp.com/orders" rel="" className="d-block" >
                            <div className="portfolio_img overlay overlay_walupp"><img className='w-100 img-fluid' src={portfolio_walupp_img} alt="icon"/></div>
                            <div className="content"><h2>Walupp Web <br/> <small>Best Food Deals</small></h2></div>
                        </a>
                      </li> */}
                <li className="portfolio-item alphaauto_border">
                  <NavLink to={`${process.env.PUBLIC_URL}/empty`} rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_alphaauto"><img className='w-100 img-fluid' src={portfolio_alphaauto_img} alt="icon" /></div>
                    <div className="content"><h2>Alphaauto eBay Store <br /> <small>eBay Stores</small></h2></div>
                  </NavLink>
                </li>
                <li className="portfolio-item listandsell_border">
                  <a href="https://listandsell.co.za/" rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_listandsell"><img className='w-100 img-fluid' src={portfolio_listandsell_img} alt="icon" /></div>
                    <div className="content"><h2>List and Sell <br /> <small>Best Cars Deals</small></h2></div>
                  </a>
                </li>
                <li className="portfolio-item arinstrumed_border">
                  <a href="https://ar-instrumed.com.au/" rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_arinstrumed"><img className='w-100 img-fluid' src={portfolio_aribstrumed_img} alt="icon" /></div>
                    <div className="content"><h2>AR Instrumed Web <br /> <small>Best Surgical Instruments</small></h2></div>
                  </a>
                </li>
                <li className="portfolio-item alloywheels_border">
                  <NavLink to={`${process.env.PUBLIC_URL}/empty`} rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_alloywheels"><img className='w-100 img-fluid' src={portfolio_alloywheels_img} alt="icon" /></div>
                    <div className="content"><h2>CSA Alloy Wheels eBay Store <br /> <small>eBay Stores</small></h2></div>
                  </NavLink>
                </li>
                <li className="portfolio-item numero_border">
                  <a href="https://www.artofmujtaba.com/portfolio_projects/numero/" rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_numero"><img className='w-100 img-fluid' src={portfolio_numero_img} alt="icon" /></div>
                    <div className="content"><h2>Numero XI Web <br /> <small>Cocktails</small></h2></div>
                  </a>
                </li>
                <li className="portfolio-item fslegals_border">
                  <NavLink to={`${process.env.PUBLIC_URL}/empty`} rel="" className="d-block" >
                    <div className="portfolio_img overlay overlay_fslegals"><img className='w-100 img-fluid' src={portfolio_yzee_img} alt="icon" /></div>
                    <div className="content"><h2>Y-Zee <br /> <small>E-Commrence Project</small></h2></div>
                  </NavLink>
                </li>
                <li className="portfolio-item meditro_border">
                  <a href="https://www.artofmujtaba.com/portfolio_projects/meditro/" rel="nofollow" className="d-block" >
                    <div className="portfolio_img overlay overlay_meditro"><img className='w-100 img-fluid' src={portfolio_meditro_img} alt="icon" /></div>
                    <div className="content"><h2>Doc-Tro Web <br /> <small>Medical</small></h2></div>
                  </a>
                </li>
                <li className="portfolio-item smmProject_border">
                  <a href="https://www.artofmujtaba.com/portfolio_projects/smm-project/" rel="nofollow" className="d-block" >
                    <div className="portfolio_img overlay overlay_smmProject"><img className='w-100 img-fluid' src={portfolio_SMMProject_img} alt="icon" /></div>
                    <div className="content"><h2>SMM Project <br /> <small>Post Management</small></h2></div>
                  </a>
                </li>
                {/* <li className="portfolio-item bitvortex_border">
                        <a href="https://bitvortex.ltd/" rel="nofollow" className="d-block" >
                            <div className="portfolio_img overlay overlay_bitvortex"><img className='w-100 img-fluid' src={portfolio_bitvortex_img} alt="icon"/></div>
                            <div className="content">
                              <h2>BitVortex <br/> <small>Power of Cloud Mining</small></h2>
                            </div>
                        </a>
                      </li> */}
                {/* <li className="portfolio-item empty empty_border">
                        <NavLink to={`${process.env.PUBLIC_URL}/all-portfolio`} rel="" className="d-block">
                            <div className="portfolio_img overlay"><img className='w-100 img-fluid' src={portfolio_empty_img} alt="icon"/></div>
                            <div className="content"><h2>View More</h2></div>
                        </NavLink>
                      </li> */}
              </ul>
              {/* display max width */}
              <div className="workview_ul d-lg-none">
                <OwlCarousel className='owl-theme workview_ul-owl' {...workviewprojects}>
                  <a href="https://foodzilla.co/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_01} alt='icon' /></a>
                  <a href="https://bitvortex.ltd/development/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_02} alt='icon' /></a>
                  <a href="https://listandsell.co.za/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_08} alt='icon' /></a>
                  <a href="http://walupp.com/orders" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_03} alt='icon' /></a>
                  <a href="https://www.ar-instrumed.com/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_04} alt='icon' /></a>
                  <a href="/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_05} alt='icon' /></a>
                  <a href="https://www.artofmujtaba.com/portfolio_projects/meditro/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_06} alt='icon' /></a>
                  <a href="https://www.artofmujtaba.com/portfolio_projects/smm-project/" rel='_blank' className=''><img className='img-fluid' src={mobileScreen_07} alt='icon' /></a>
                  {/* {WorkViewULArray.map((val) =>{
                            return(
                              <WorkViewUL
                                key={val.key}
                                viewbtn={val.viewbtn}
                                viewlink={val.viewlink}
                                ledbanner={val.ledbanner}
                                titleproject={val.titleproject}
                                paragraph_text={val.paragraph_text}
                              />
                            )
                          })} */}
                </OwlCarousel>
              </div>
              {/* <li className="portfolio-item">
                      <Link to={`${process.env.PUBLIC_URL}/all-portfolio`} className="d-flex align-items-center h-100 justify-content-center empty" rel={'_blank'}>Veiw More</Link>
                    </li> */}
            </ul>
          </Col>
        </div>
        {/* Testimonials */}
        <div id="" className="section">
          <Col className='col-xxl-9 col-xl-9 col-lg-11 col-11 mx-auto'>
            <Row className='align-items-center'>
              <Col className="col-lg-6 col-12 order-1 order-lg-0 text-center"><img className="img-fluid" src={testimonials} alt="testimonials" /></Col>
              <Col className="col-lg-6 col-12 order-0 ps-lg-4">
                <div className='text-box-inline'>
                  <span className='subtitle'>Testimonilas</span>
                  <h2> What they <span className="heading_fontLobster">Said!</span></h2>
                  <p className=''>Frontend development is all about crafting the perfect user experience. It's where design meets functionality to create something beautiful and intuitive for users.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
        {/* Contact */}
        <div id="contact" className="section contact">
          <Col className='col-xxl-9 col-xl-10 col-lg-11 col-11 mx-auto'>
            <Row className='align-items-center'>
              <Col className="col-lg-6 col-12 order-1 order-lg-0">
                <div className='text-box-inline'>
                  <span className='subtitle'>Contact</span>
                  <h2> Have You Any Project? <br /> <span className="heading_fontLobster">Please Drop a Message</span></h2>
                  <p className=''>Get in touch and let me know how i can help. Fill out the form and i’ll be in touch as soon as possible.</p>
                </div>
                {/*  */}
                <div className="contact-info">
                  <NavItem>
                    <img className='img-fluid me-4' src={addressicon} alt='icon' />
                    <div><strong className='d-block white_text fontsize16'>Address:</strong> Sambrial, Sialkot, Punjab, Pakistan </div>
                  </NavItem>
                  <NavItem>
                    <img className='img-fluid me-4' src={phoneicon} alt='icon' />
                    <div>
                      <strong className='d-block white_text fontsize16'>Phone:</strong>
                      <Form.Label className={'d-block ms-lg-4 m-0 p-1'} style={{ background: '#2a2a2a', width: 'fit-content', fontSize: '12px', }}>For Frontend Developer</Form.Label>
                      <Nav.Link href="https://wa.me/%2B923344558449?text=Feel%20free%20to%20contact%20me%2024%2F7hours." rel={'_blank'} className='p-0 paragraph_text'><img className={'img-fluid me-2'} src={phoneimg} width={'15'} alt={'icon'} /> (+92) 334 455 8449</Nav.Link>
                      <Form.Label className={'d-block ms-lg-4 m-0 p-1'} style={{ background: '#2a2a2a', width: 'fit-content', fontSize: '12px', }}>For Backend Developer</Form.Label>
                      <Nav.Link href="https://wa.me/%2B923034396715?text=Feel%20free%20to%20contact%20me%2024%2F7hours." rel={'_blank'} className='p-0 paragraph_text d-flex align-items-center'><img className={'img-fluid me-2'} src={phoneimg} width={'15'} alt={'icon'} /> (+92) 303 4396715</Nav.Link>
                    </div>
                  </NavItem>
                  <NavItem>
                    <img className='img-fluid me-4' src={emailicon} alt='icon' />
                    <div>
                      <strong className='d-block white_text fontsize16'>E-mail:</strong>
                      <Form.Label className={'d-block ms-lg-4 m-0 p-1'} style={{ background: '#2a2a2a', width: 'fit-content', fontSize: '12px', }}>For Frontend Developer</Form.Label>
                      <Nav.Link href="mailto:artofmujtaba@gmail.com" className='p-0 paragraph_text'><img className={'img-fluid me-2'} src={gmailimg} width={'15'} alt={'icon'} /> artofmujtaba@gmail.com</Nav.Link>
                      <Nav.Link href="mailto:mujtabaa196@gmail.com" className='p-0 paragraph_text'><img className={'img-fluid me-2'} src={gmailimg} width={'15'} alt={'icon'} /> mujtabaa196@gmail.com</Nav.Link>
                      <Form.Label className={'d-block ms-lg-4 m-0 p-1'} style={{ background: '#2a2a2a', width: 'fit-content', fontSize: '12px', }}>For Backend Developer</Form.Label>
                      <Nav.Link href="mailto:arslanuog53@gmail.com" className='p-0 paragraph_text'><img className={'img-fluid me-2'} src={gmailimg} width={'15'} alt={'icon'} /> arslanuog53@gmail.com</Nav.Link>
                    </div>
                  </NavItem>
                </div>
                {/*  */}
                {/* <div className='social_bottom'>
                        <Nav className="">
                          <NavItem className=''>
                            <NavLink rel={'_blank'} to={`${process.env.PUBLIC_URL}/`} className="has-tooltip">
                              <p className='m-0'><FontAwesomeIcon icon="fab fa-facebook-f" /></p>
                              <div className='custom-tooltip'>Facebook</div>
                            </NavLink>
                          </NavItem>
                          <NavItem className=''>
                            <NavLink rel={'_blank'} to={`${process.env.PUBLIC_URL}/`} className="has-tooltip">
                              <p className='m-0'><img width={15} className='img-fluid' src={twitter} alt='icon'/></p>
                              <div className='custom-tooltip'>Twitter</div>
                            </NavLink>
                          </NavItem>
                          <NavItem className=''>
                            <NavLink rel={'_blank'} to={`${process.env.PUBLIC_URL}/`} className="has-tooltip">
                              <p className='m-0'><img width={20} className='img-fluid' src={linkedin} alt='icon'/></p>
                              <div className='custom-tooltip'>LinkedIn</div>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </div> */}
              </Col>
              <Col className="col-lg-6 col-12 mb-4 mb-lg-0 order-0">
                <Form className="contact-form">
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <InputGroup className="mb-0">
                      <i className='prefix-icon'><FontAwesomeIcon icon={faUser} /></i>
                      <Form.Control type={'text'} name={'name'} placeholder={'e.g. Mujtaba Ali'} required aria-label={'Username'} />
                    </InputGroup>
                  </Form.Group>
                  {/*  */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <InputGroup className="mb-0">
                      <i className='prefix-icon'><FontAwesomeIcon icon={faEnvelope} /></i>
                      <Form.Control type={'email'} name={'email'} placeholder={'e.g. mujtabaa196@gmail.com'} required aria-label={'email'} />
                    </InputGroup>
                  </Form.Group>
                  {/*  */}
                  <Form.Group className="mb-3">
                    <Form.Label>Phone <i className='fontweightregular paragraph_text'>(Optional)</i></Form.Label>
                    <InputGroup className="mb-0">
                      <i className='prefix-icon'><FontAwesomeIcon icon={faPhone} /></i>
                      <Form.Control type={'tel'} name={'phone'} placeholder={'Phone Number'} aria-label={'phone'} />
                    </InputGroup>
                  </Form.Group>
                  {/*  */}
                  <Form.Group className="mb-3">
                    <Form.Label>Message </Form.Label>
                    <InputGroup className="mb-0">
                      <i className='prefix-icon align-items-start'><FontAwesomeIcon icon={faComments} /></i>
                      <Form.Control type={''} rows={3} className="h-auto" name={'message'} required placeholder={'Write message...'} as="textarea" aria-label="With textarea" />
                    </InputGroup>
                  </Form.Group>
                  <Button variant="" className='btn btn-web black_text fontweightbold w-100 white_bg border-0'>Send</Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </div>
        {/* footer */}
        <Footer />
      </main>
    </>
  )
}

export default Home;
// float:none;max-width:100%;padding:0 40px;position:relative;width:100%;