// import React from 'react'
import { Box } from '@mui/system';
import EmployeeDepartment from './EmployeeDepatment';
import DoughnutChart from "./positionpieChart";
import { Typography } from '@mui/material';
import Navbarstatistics from './navbarstatistics';
import Distrubutionbyreasons from './Distrubutionbyreasons';

const Departmentoverview = () => {
  return (
    <div>
      <Navbarstatistics/>
       <Box sx={{display:"flex"}}>
       <Box sx={{width:"45%",height:"405px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
        <Typography sx={{textAlign:"center",fontWeight:"600",marginTop:"10px"}}>Employee proportion by Department</Typography>
       <EmployeeDepartment/>
        </Box>
        <Box sx={{width:"51%",height:"405px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
         <Box> 
        <Typography sx={{textAlign:"center",fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>Employee proportion by Position</Typography>
        <DoughnutChart/>
        </Box>
        </Box>
       </Box>
        <Box sx={{width:"97%",height:"400px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginTop:"10px",marginRight:"0px",marginLeft:"20px",marginBottom:"20px"}}>
          <Typography sx={{textAlign:"center",fontSize:"20px",fontWeight:"600",paddingTop:"15px",marginBottom:"10px"}}>Employee distribution by dismissal</Typography>
         <Distrubutionbyreasons/> 
        </Box> 
    </div>
  )
}

export default Departmentoverview