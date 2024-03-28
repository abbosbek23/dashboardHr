// import React from 'react'

import { Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { Box } from "@mui/system";
import firstIcon from "../src/assets/firsticon.png"
import dismissedicon from "../src/assets/dismissedicon.svg"
import averageicon from "../src/assets/averageageicon.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeAgeDistribution from './barchart';
import BarchartHorizontal from "./barcharthorizontal";
import "./index.css"
import LanguageChart from "./barcharts";
import HorizontalBarChart from "./barcharthorizontal2"; 
import DoughnutChart from "./positionpieChart";
import BarChart from "./demobarchart";
// import BarChartComponent from "./boshliqlarbarchart";
import LavozimlarTable from "./teammemberstable";
import GenderPieChart from "./genderpiechart";

function DashboardHr() {


  const [staffnumber,setStaffNumber] = useState({})

  useEffect(()=>{
    document.body.style.backgroundColor = '#FFF';
   const getStaffnumber = async() => {
    try {
        const {data} = await axios.get("https://dev.ikramovna.me/api/v1/age")
        // console.log(data);
        setStaffNumber(data)
    } catch (error) {
        console.log(error);
    }
   }
   getStaffnumber()
   
  },[])
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
                <Box sx={{padding:"30px 10px",display:"flex",marginLeft:"25px"}}>
              <Box sx={{width:"100%", borderRadius: "20px", background: "#E3F5FF",marginRight:"10px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={firstIcon}
                    width={54}
                    height={54}
                    style={{margin:"20px 10px"}}
                    alt="icons"
                  />
                  <Box sx={{marginRight:"35px",marginLeft:"10px"}}>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "20px",
                        letterSpacing: "-0.28px",
                        margin:"15px 0px 0px 0px"
                      }}
                    >
                      Number of staff
                    </Typography>
                    <Typography sx={{fontSize:"12px",marginBottom:"5px"}}>
                    Number current staffs
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.48px",
                        padding:"0px 20px 20px 20px"
                      }}
                    >
                      {staffnumber.staff_count}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
              <Box sx={{width:"100%", borderRadius: "20px", background: "#C6C7F8",marginRight:"10px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={dismissedicon}
                    width={54}
                    height={54}
                    style={{margin:"20px 10px"}}
                    alt="icons"
                  />
                 <Box sx={{marginRight:"20px",marginLeft:"10px",textAlign:"center"}}>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "20px",
                        letterSpacing: "-0.28px",
                        margin:"15px 0px 0px 0px"
                      }}
                    >
                      Dismissed
                    </Typography>
                    <Typography sx={{fontSize:"13px",marginBottom:"5px"}}>
                    2020-2024 layoffs
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.48px",
                        padding:"0px 0px 20px 0px",
                        marginLeft:"0px"
                      }}
                    >
                      {staffnumber.dismissed_count}
                    </Typography>
                  </Box>    
                </Box>
              </Box>
              <Box sx={{width:"100%", borderRadius: "20px", background: "#BAEDBD",marginRight:"0px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={averageicon}
                    width={54}
                    height={54}
                    style={{margin:"20px 8px"}}
                    alt="icons"
                  />
                    <Box sx={{marginRight:"20px",marginLeft:"10px",textAlign:"center"}}>
                    <Typography
                     sx={{
                      color: "#1C1F21",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "20px",
                      letterSpacing: "-0.28px",
                      margin:"15px 0px 0px 0px"
                    }}
                    >
                      Average age
                    </Typography>
                    <Typography sx={{fontSize:"13px",marginBottom:"5px"}}>
                    average age of staffs
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.48px",
                        padding:"0px 20px 20px 20px"
                      }}
                    >
                      {staffnumber.average_age}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              </Box>
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
                <LavozimlarTable/>
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
                <DoughnutChart/>
                </Box>
                <Box sx={{width:"47%",height:"345px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"0px"}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Gender</Typography> 
                <GenderPieChart/>
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
                <HorizontalBarChart/>          
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
}

export default DashboardHr;
