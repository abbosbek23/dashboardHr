// import React from 'react'
import { Box } from '@mui/system';
import EmployeeDepartment from './EmployeeDepatment';
import DoughnutChart from "./positionpieChart";
import { Typography } from '@mui/material';
// import Navbarstatistics from './navbarstatistics';
import NavbargenderOverview from './NavbargenderOverview';


const Departmentoverview = () => {
  return (
    <div>
      {/* <Navbarstatistics namepage={"Department overview"}/> */}
      <NavbargenderOverview namepage={"Department overview"}/>
       <Box sx={{display:"flex"}}>
       <Box className={"login"} sx={{width:"48%",height:"605px",overflow:"scroll" ,overflowX:"hidden",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
        <Typography sx={{fontSize:"20px",textAlign:"center",fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>Employee proportion by Department</Typography>
       <EmployeeDepartment/>
        </Box>
        <Box sx={{width:"50%",height:"605px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
         <Box> 
        <Typography sx={{fontSize:"20px",textAlign:"center",fontWeight:"600",marginTop:"10px",marginBottom:"10px"}}>Employee proportion by Position</Typography>
        <DoughnutChart/>
        </Box>
        </Box>
       </Box>
        
    </div>
  )
}

export default Departmentoverview