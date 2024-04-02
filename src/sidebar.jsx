import { useState, useRef, useEffect } from 'react';
import './Sidebar.css'; 
import { Box } from '@mui/system';
import imagelogo from "./assets/imagelogo.png"
import line from "./assets/line.svg";
import dashboardicon from "./assets/dashboardicon.svg"
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [dashboardHeight, setDashboardHeight] = useState('0px');
  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false);
  const [EmployeeHeight, setEmployeeHeight] = useState('0px');
  const [activeButton, setActiveButton] = useState(null); // State to track active button
  const [activesButton, setActivesButton] = useState(null); // State to track active button
  const dashboardRef = useRef(null);
  const EmployeeRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    setDashboardHeight(isDashboardOpen ? `${dashboardRef.current.scrollHeight}px` : '0px');
    setEmployeeHeight(isEmployeeOpen ? `${EmployeeRef.current.scrollHeight}px` : '0px');

  }, [isDashboardOpen,isEmployeeOpen]);

  const handleDashboardClick = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };
  const handleEmployeeClick = () => {
    setIsEmployeeOpen(!isEmployeeOpen)
  } 

  const handleButtonClicks =(buttonNames) => {
    setActivesButton(buttonNames)
  }

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={'sidebar'}>
      <Box sx={{display:"flex",alignItems:"center",padding:"5px",backgroundColor:"#FFF",width:"100%",height:60,marginLeft:"0px",marginTop:"20px",borderRadius:"10px",textAlign:"start"}}>
        <img src={imagelogo} style={{marginLeft:"0px",marginRight:"0px"}} width={50} height={50} alt="icon" />
        <Typography sx={{marginLeft:"10px",fontSize:"19px",fontWeight:"600"}}>Xalq Bank</Typography>
      </Box>
      <img src={line} width={"100%"} alt="line" />
      <Box>
        <Typography onClick={handleDashboardClick} sx={{width:"80%",marginTop:"20px",padding:"10px",borderRadius:"10px",color:isDashboardOpen ?"white":"#00DEA3",display:"flex",alignItems:"center",transition:"0.2s linear",backgroundColor:isDashboardOpen ? "#00DEA3":"white"}}>
          <img style={{marginLeft:"10px",marginRight:"15px", backgroundColor: activeButton === 'dashboard' ? "#00DEA3" : "white"}} src={dashboardicon} width={20} height={20} onClick={() => handleButtonClick('dashboard')}/> Dashboard
        </Typography>
        <ul ref={dashboardRef} style={{height: dashboardHeight, overflow: 'hidden',marginTop:"10px", transition: 'height 0.5s'}}>
          <li onClick={() => {navigate('edulang'); handleButtonClick('edulang')}} style={{backgroundColor: activeButton === 'edulang' ? "#00DEA3" : "white",color:activeButton === 'edulang' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>EduLang Overview</li>
          <li onClick={() => {navigate('nationoverview'); handleButtonClick('nationoverview')}} style={{backgroundColor: activeButton === 'nationoverview' ? "#00DEA3" : "white",color:activeButton === 'nationoverview' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Nation Overview</li>
          <li onClick={() => {navigate('interdepartment'); handleButtonClick('interdepartment')}} style={{backgroundColor: activeButton === 'interdepartment' ? "#00DEA3" : "white",color:activeButton === 'interdepartment' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Interdeparment Overview</li>
          <li onClick={() => {navigate('genderoverview'); handleButtonClick('genderoverview')}} style={{backgroundColor: activeButton === 'genderoverview' ? "#00DEA3" : "white",color:activeButton === 'genderoverview' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Gender Overview</li>
        </ul>
      </Box>
      <Box>
        <Typography onClick={handleEmployeeClick} sx={{width:"80%",marginTop:"20px",padding:"10px",borderRadius:"10px",color:isEmployeeOpen ?"white":"#00DEA3",display:"flex",alignItems:"center",transition:"0.2s linear",backgroundColor:isEmployeeOpen ? "#00DEA3":"white"}}>
          <img style={{marginLeft:"10px",marginRight:"15px", backgroundColor: activesButton === 'dashboard' ? "#00DEA3" : "white"}} src={dashboardicon} width={20} height={20} onClick={() => handleButtonClick('dashboard')}/> Employee
        </Typography>
        <ul ref={EmployeeRef} style={{height: EmployeeHeight, overflow: 'hidden',marginTop:"10px", transition: 'height 0.5s'}}>
          <li onClick={() => {navigate('edulang'); handleButtonClicks('edulang')}} style={{backgroundColor: activesButton === 'edulang' ? "#00DEA3" : "white",color:activesButton === 'edulang' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Employee Overview</li>
          <li onClick={() => {navigate('experience'); handleButtonClicks('experience')}} style={{backgroundColor: activesButton === 'experience' ? "#00DEA3" : "white",color:activesButton === 'experience' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Experience Overview</li>
        </ul>
      </Box>
    </div>
  );
};

export default Sidebar;
