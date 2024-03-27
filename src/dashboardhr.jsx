// import React from 'react'

import { Typography } from "@mui/material";
import Grid from '@material-ui/core/Grid';
import { Box } from "@mui/system";
import firstIcon from "../src/assets/firsticon.png"
import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeAgeDistribution from './barchart';
import BarchartHorizontal from "./barcharthorizontal";
import "./index.css"
import LanguageChart from "./barcharts";
// import HorizontalBarChart from "./barcharthorizontal2"; 
import DoughnutChart from "./positionpieChart";
import BarChart from "./demobarchart";
import BarChartComponent from "./boshliqlarbarchart";
import LavozimlarTable from "./teammemberstable";

function DashboardHr() {


  const [staffnumber,setStaffNumber] = useState({})

  useEffect(()=>{
   const getStaffnumber = async() => {
    try {
        const {data} = await axios.get("http://64.227.121.87/api/v1/age-dynamics")
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
              sm={8}
              item
              sx={{
                marginLeft:"10px",
              }}
            >
                <Box sx={{padding:"30px",display:"flex"}}>
              <Box sx={{width:"25%", borderRadius: "20px", background: "#E3F5FF",marginRight:"10px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={firstIcon}
                    width={44}
                    height={44}
                    style={{margin:"20px 10px"}}
                    alt="icons"
                  />
                  <Box sx={{marginRight:"20px"}}>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-0.28px",
                        margin:"15px 0px 5px 0px"
                      }}
                    >
                      Number of staff
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
              <Box sx={{width:"25%", borderRadius: "20px", background: "#E3F5FF",marginRight:"10px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={firstIcon}
                    width={44}
                    height={44}
                    style={{margin:"20px 10px"}}
                    alt="icons"
                  />
                  <Box sx={{marginRight:"20px"}}>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-0.28px",
                        margin:"15px 0px 5px 0px"
                      }}
                    >
                      Number of staff
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
              <Box sx={{width:"25%", borderRadius: "20px", background: "#E3F5FF",marginRight:"10px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={firstIcon}
                    width={44}
                    height={44}
                    style={{margin:"20px 10px"}}
                    alt="icons"
                  />
                 <Box sx={{marginRight:"20px"}}>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-0.28px",
                        margin:"15px 0px 5px 0px"
                      }}
                    >
                      Number of staff
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
                      1470
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{width:"25%", borderRadius: "20px", background: "#E3F5FF",marginRight:"10px",marginLeft:"0px"}}>
                <Box sx={{ display: "flex" }}>
                  <img
                    src={firstIcon}
                    width={44}
                    height={44}
                    style={{margin:"20px 10px"}}
                    alt="icons"
                  />
                  <Box sx={{marginRight:"20px"}}>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "20px",
                        letterSpacing: "-0.28px",
                        margin:"15px 0px 5px 0px"
                      }}
                    >
                      Number of staff
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
                      1470
                    </Typography>
                  </Box>
                </Box>
              </Box>
              </Box>
              <Box sx={{display:"flex"}}>
              <Box sx={{width:"420px",height:"260px",padding:" 24px 24px 37px 24px",borderRadius: "20px",backgroundColor:"#F7F9FB",marginLeft:"40px"}}>
                <BarchartHorizontal/>
              </Box>
              <Box className={"barvertical"} sx={{width:"400px",height:"260px",padding:" 10px 0px 37px 10px",borderRadius: "20px",backgroundColor:"#F7F9FB"}}>
                <LanguageChart/>
              </Box>
              </Box>
              <Box height={405} className={'barvertical'} sx={{margin:"20px 20px 20px 35px",padding:"25px",borderRadius:"20px",backgroundColor:"#F7F9FB", overflow:"scroll",overflowX:"hidden"}} >
                <LavozimlarTable/>
              </Box>
              <Box>
                <DoughnutChart/>
              </Box>
            </Grid>
            <Grid
              xs={12}
              sm={4}
              item
              sx={{
              }}
            >
                <Box sx={{padding: "0px 24px 24px 24px",borderRadius: "20px",background:"#F7F9FB",margin:"20px"}}>
                      <EmployeeAgeDistribution agegroups={staffnumber.age_groups}/>
                </Box>
                <Box sx={{padding:"0px 30px 30px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"20px"}}>
                <BarChart/>
                  {/* <HorizontalBarChart/> */}
                </Box>
                <Box  sx={{padding:"0px 30px 30px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"20px"}}>
                <BarChartComponent/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
}

export default DashboardHr;
