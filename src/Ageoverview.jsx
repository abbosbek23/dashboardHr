// import React from 'react'
import EmployeeAgeDistribution from "./barchart";
import { Box } from "@mui/system";
import Navbarstatistics from "./navbarstatistics";
import Agerangebyposition from "./Agerangebyposition";
// import { Typography } from '@mui/material';


const Ageoverview = () => {
  return (
    <div>
        <Navbarstatistics namepage={"Age overview"}/>
      <div style={{display:"flex"}}>
        <Box sx={{width:"47%"}}>
        <Box
          sx={{
            width: "100%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "0px",
          }}
        >
          <EmployeeAgeDistribution />
          
          
        </Box>

        </Box>
        <Box sx={{width:"47%"}}>
        <Box
          sx={{
            width: "95%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "0px",
            height:"425px"
          }}
        >
          <Agerangebyposition/>
        </Box>
        
        </Box>
      </div>
    </div>
  );
};

export default Ageoverview;
