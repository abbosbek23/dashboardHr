import { useState, useRef } from 'react';
import './Sidebar.css'; 
import { Box } from '@mui/system';
import imagelogo from "./assets/imagelogo.png"
import line from "./assets/line.svg";
// import dashboardicon from "./assets/dashboardicon.svg"
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const Sidebar = () => {
 
  const [activeButton, setActiveButton] = useState(null); // State to track active button
  // const [activesButton, setActivesButton] = useState(null); // State to track active button
  const dashboardRef = useRef(null);
  // const EmployeeRef = useRef(null);
  const navigate = useNavigate()




  // const handleButtonClicks =(buttonNames) => {
  //   setActivesButton(buttonNames)
  // }

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };


  return (
    <>
       {
        window.location.pathname === "/" ? (
          <Box></Box>
        ):(
        
        <div className={'sidebar'}>
          <Box sx={{display:"flex",alignItems:"center",padding:"5px",backgroundColor:"#FFF",width:"100%",height:60,marginLeft:"0px",marginTop:"20px",borderRadius:"10px",textAlign:"start"}}>
            <img src={imagelogo} style={{marginLeft:"0px",marginRight:"0px"}} width={50} height={50} alt="icon" />
            <Typography sx={{marginLeft:"10px",fontSize:"19px",fontWeight:"600"}}>Xalq Bank</Typography>
          </Box>
          <img src={line} width={"100%"} alt="line" />
          <Box>
            <Typography  sx={{width:"80%",fontWeight:"600",marginTop:"20px",padding:"10px",color:"#000",display:"flex",alignItems:"center",fontSize:"16px"}}>
               Navigation Panel
            </Typography>
            <ul ref={dashboardRef} style={{ marginTop:"20px", transition: 'height 0.5s'}}>
              <li onClick={() => {navigate('departmentoverview'); handleButtonClick('departmentoverview')}} style={{marginBlock:"10px",paddingBlock:"15px",backgroundColor: activeButton === 'departmentoverview' ? "#00DEA3" : "white",color:activeButton === 'departmentoverview' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Department Overview</li>
              <li onClick={() => {navigate('interdepartment'); handleButtonClick('interdepartment')}} style={{marginBlock:"10px",paddingBlock:"15px",backgroundColor: activeButton === 'interdepartment' ? "#00DEA3" : "white",color:activeButton === 'interdepartment' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Experience Overview</li>
              <li onClick={() => {navigate('ageoverview'); handleButtonClick('ageoverview')}} style={{marginBlock:"10px",paddingBlock:"15px",backgroundColor: activeButton === 'ageoverview' ? "#00DEA3" : "white",color:activeButton === 'ageoverview' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Age Overview</li>
              <li onClick={() => {navigate('genderoverview'); handleButtonClick('genderoverview')}} style={{marginBlock:"10px",paddingBlock:"15px",backgroundColor: activeButton === 'genderoverview' ? "#00DEA3" : "white",color:activeButton === 'genderoverview' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Gender Overview</li>
              <li onClick={() => {navigate('edulang'); handleButtonClick('edulang')}} style={{marginBlock:"10px",paddingBlock:"15px", backgroundColor: activeButton === 'edulang' ? "#00DEA3" : "white",color:activeButton === 'edulang' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Termination Overview</li>
              <li onClick={() => {navigate('employeetable'); handleButtonClick('employeetable')}} style={{marginBlock:"10px",paddingBlock:"15px",backgroundColor: activeButton === 'employeetable' ? "#00DEA3" : "white",color:activeButton === 'employeetable' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Employee Overview</li>
              <li onClick={() => {navigate('filiallar'); handleButtonClick('filiallar')}} style={{marginBlock:"10px",paddingBlock:"15px",backgroundColor: activeButton === 'filiallar' ? "#00DEA3" : "white",color:activeButton === 'filiallar' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Branches Overview</li>
              <li onClick={() => {navigate('others'); handleButtonClick('others')}} style={{marginBlock:"10px",paddingBlock:"15px" ,backgroundColor: activeButton === 'others' ? "#00DEA3" : "white",color:activeButton === 'others' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Others</li>
              {/* <li onClick={() => {navigate('nationoverview'); handleButtonClick('nationoverview')}} style={{backgroundColor: activeButton === 'nationoverview' ? "#00DEA3" : "white",color:activeButton === 'nationoverview' ? "#FFF":"#000",cursor:"pointer",borderRadius:"12px"}}>Nation Overview</li> */}
            </ul>
          </Box>
          <Box>
             
           
          </Box>
        </div>)
       }   
    </>
  );
};

export default Sidebar;
