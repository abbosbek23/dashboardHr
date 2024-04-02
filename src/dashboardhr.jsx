// import React from 'react'

import { Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { Box } from "@mui/system";

// import { useEffect, } from "react";
// import axios from "axios";
import EmployeeAgeDistribution from './barchart';
import BarchartHorizontal from "./barcharthorizontal";
import "./index.css"
import LanguageChart from "./barcharts";


import BarChart from "./demobarchart";
// import BarChartComponent from "./boshliqlarbarchart";


import Sidebar from "./sidebar";

function DashboardHr() {


  // const [staffnumber,setStaffNumber] = useState({})

  // useEffect(()=>{
  //   document.body.style.backgroundColor = '#EFF3FD';
  //  const getStaffnumber = async() => {
  //   try {
  //       const {data} = await axios.get("https://dev.ikramovna.me/api/v1/age")
  //       // console.log(data);
  //       setStaffNumber(data)
  //   } catch (error) {
  //       console.log(error);
  //   }
  //  }
  //  getStaffnumber()
   
  // },[])
// console.log(staffnumber);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100vh",
      }}
    >
      <Grid
        container
        sx={{ width: "100%"}}>
            <Grid
              xs={12}
              sm={7}
              sx={{
                marginLeft:"10px",
                marginRight:"0px"
              }}
            >
              <Sidebar/>
                
              <Box sx={{display:"flex"}}>
              <Box sx={{width:"47%",height:"260px",padding:" 8px 14px 37px 0px",borderRadius: "20px",backgroundColor:"#F7F9FB",marginRight:"10px",marginLeft:"40px",alignItems:"center"}}>
                <Typography sx={{color:"#1C1F21",
                fontfamily: "Poppins,sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "-0.48px",textAlign:"center"}}>Education level distribution</Typography>
                <BarchartHorizontal/> 
              </Box>
              <Box className={"barvertical"} sx={{width:"45%",height:"260px",padding:" 10px 0px 37px 10px",borderRadius: "20px",backgroundColor:"#F7F9FB",alignItems:"center"}}>
                <Typography sx={{color:"#1C1F21",
fontfamily: "Poppins,sans-serif",
fontSize: "16px",
fontStyle: "normal",
fontWeight: 700,
lineHeight: "15px",
letterSpacing: "-0.48px",textAlign:"center",marginTop:"0px"}}>
                Language proficiency
                </Typography>
                <LanguageChart/>
              </Box>
              </Box>
              <Box height={405} className={'barvertical'} sx={{margin:"20px 0px 20px 45px",padding:"25px",borderRadius:"20px",backgroundColor:"#F7F9FB", overflow:"scroll",overflowX:"hidden"}} >
                {/* <LavozimlarTable/> */}
              </Box>
              <Box sx={{display:"flex",marginLeft:"20px"}}>
                <Box sx={{width:"47%",height:"345px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginLeft:"25px",}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Positions</Typography>  
                {/* <DoughnutChart/> */}
                </Box>
                <Box sx={{width:"47%",height:"345px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"0px"}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Gender</Typography> 
                {/* <GenderPieChart/> */}
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={4}
              sx={{
                marginLeft:"0px",
                marginRight:"20px"
              }}
            >
                <Box sx={{padding: "0px 24px 8px 24px",borderRadius: "20px",background:"#F7F9FB",margin:"30px"}}>
                      <EmployeeAgeDistribution/>
                </Box>
                <Box sx={{padding:"0px 30px 30px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"30px"}}>
                <Typography sx={{textAlign:"center",fontWeight:600,paddingTop:"10px"}}>Staffs Nation</Typography>
                <BarChart/>
                 
                </Box>
                <Box sx={{padding:"0px 30px 30px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"30px"}}>
                {/* <HorizontalBarChart/>           */}
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
}

export default DashboardHr;