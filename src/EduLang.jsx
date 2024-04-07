import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import Navbarstatistics from './navbarstatistics';
import TotalTerminationYearandMonth from './TotalTerminationYear';
import TotalTerminationbyMonth from './TotalTerminationbyMonth';
import TotalTerminationbyReasons from './TotalTerminationbyReasons';

const EduLang = () => {
  return (
    <>
    <Navbarstatistics namepage={"Termination overview"}/>
    <div style={{display:"flex"}}>
      <Box sx={{width:"100%",display:"flex"}}>
        <Box width={"33%"}>
        <Typography sx={{textAlign:"center",fontSize:"20px",fontWeight:"700"}}>
          Total Termination By Year and Month
        </Typography>
      <TotalTerminationYearandMonth/> 
      </Box>
      <Box width={"33%"}>
      <Typography sx={{textAlign:"center",fontSize:"20px",fontWeight:"700",marginBottom:"40px"}}>
          Total Termination by Month (whole period)
        </Typography>
        <TotalTerminationbyMonth/>
      </Box>
      <Box width={"33%"}>
        <Typography sx={{textAlign:"center",fontSize:"20px",fontWeight:"700",marginBottom:"40px"}}>
         Termination by Reasons
        </Typography>
        <TotalTerminationbyReasons/>
      </Box>
      </Box>
    </div>
    </>
  )
}

export default EduLang