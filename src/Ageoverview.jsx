// import React from 'react'
import EmployeeAgeDistribution from "./barchart";
import { Box } from "@mui/system";
import Navbarstatistics from "./navbarstatistics";
import Agerangebyposition from "./Agerangebyposition";
import { Typography } from '@mui/material';
import BarChart from "./demobarchart";
import Transfer from "./Transfer";
const Ageoverview = () => {
  return (
    <div>
        <Navbarstatistics/>
      <div style={{display:"flex"}}>
        <Box sx={{width:"47%"}}>
        <Box
          sx={{
            width: "100%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "30px",
          }}
        >
          <EmployeeAgeDistribution />
          
          
        </Box>
        <Box sx={{
            width: "100%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "30px",
          }}>
          <Typography sx={{textAlign:"center",fontWeight:600,paddingTop:"10px"}}>Employee Nation</Typography>
          <BarChart/>
          </Box>
        </Box>
        <Box sx={{width:"47%"}}>
        <Box
          sx={{
            width: "95%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "30px",
            height:"425px"
          }}
        >
          <Agerangebyposition/>
        </Box>
        <Box 
        sx={{
            width: "95%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "30px",
            height:"440px"
          }}
        >
            <Transfer/>
        </Box>
        </Box>
      </div>
    </div>
  );
};

export default Ageoverview;
