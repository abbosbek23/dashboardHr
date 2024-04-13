/* eslint-disable react/prop-types */
//import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import axios from 'axios';
// import firstIcon from "../src/assets/firsticon.png"
// import dismissedicon from "../src/assets/dismissedicon.svg"
import averageicon from "../src/assets/averageageicon.svg"
import maleicon from "./assets/mangenderoverview.png"
import femaleicon from "./assets/femalegenderoverview.png"
import { useState, useEffect } from 'react';

const NavbargenderOverview = ({namepage}) => {

  const [staffnumber,setStaffNumber] = useState({})

  useEffect(()=>{
    document.body.style.backgroundColor = '#EFF3FD';
   const getStaffnumber = async() => {
    try {
        const {data} = await axios.get("https://dev.ikramovna.me/api/v1/age")
        console.log(data);
        setStaffNumber(data)
    } catch (error) {
        console.log(error);
    }
   }
   getStaffnumber()
   
  },[])
  const [maleCount,setMaleCount] = useState("")
  const [malepercent,setMalePercent] = useState("")
  const [femaleCount,setFeMaleCount] = useState("")
  const [femalepercent,setFeMalePersent] = useState("")
  useEffect(()=>{
   const fetchData = async () => {
     try {
       const response = await axios.get("https://dev.ikramovna.me/api/v1/age-gender");
       const data = response.data; 
       setMaleCount(data.male_count);
       setFeMaleCount(data.female_count)
       setMalePercent(data.male_percent)
       setFeMalePersent(data.female_percent)
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   fetchData();
  },[])


  return (
    <div>
      <Box sx={{padding:"30px 10px",display:"flex",backgroundColor:"#EFF3FD"}}>
        <Box sx={{width:"100%",height:"140px", borderRadius: "20px", background: "#c8dce8",marginRight:"10px",marginLeft:"0px"}}>
        <Box sx={{marginTop:"20px"}}>
                 <span style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"red",display:"block",marginBottom:"10px"}}></span>
                 <Typography style={{fontSize:"25px",textAlign:"center",width:"100%",paddingLeft:"40px",paddingRight:"40px",lineHeight:"25px"}}>
                  {namepage}
                 </Typography>
                 </Box>
              </Box>
              <Box sx={{width:"100%", borderRadius: "20px", background: "#BAEDBD"}}>
                <Box sx={{ display: "flex",paddingTop:"0px" }}>
                  <img
                    src={averageicon}
                    width={54}
                    height={54}
                    style={{marginRight:"10px",marginTop:"20px"}}
                    alt="icons"
                  />
                    <Box sx={{marginLeft:"10px",textAlign:"center"}}>
                    <Typography
                     sx={{
                      color: "#1C1F21",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "20px",
                      letterSpacing: "-0.28px",
                      margin:"15px 0px 0px 0px"
                    }}
                    >
                     Total Employee
                    </Typography>
                    <Typography sx={{marginTop:"5px",fontSize:"15px",marginBottom:"5px"}}>
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
                        padding:"0px 20px 20px 20px",
                        marginTop:"0px"
                      }}
                    >
                    {staffnumber.staff_count}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{width:"100%", borderRadius: "20px", background: "#95A4FC",marginLeft:"10px"}}>
                <Box sx={{ display: "flex" }}>
                  
                  <img src={maleicon} width={54} height={54} style={{marginRight:"10px",marginTop:"30px",padding:"10px",backgroundColor:"white",borderRadius:"50%"}} alt="" />
                    <Box sx={{marginLeft:"10px",textAlign:"center"}}>
                    <Typography
                     sx={{
                      color: "#1C1F21",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "20px",
                      letterSpacing: "-0.28px",
                      margin:"15px 0px 0px 0px"
                    }}
                    >
                      Males
                    </Typography>
                    <Typography sx={{fontSize:"15px",width:170}}>Percentage and number</Typography>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.48px",
                        padding:"10px 20px 0px 20px"
                      }}
                    >
                     {maleCount}
                    </Typography>
                        <Typography sx={{fontSize:"20px",marginBottom:"0px",marginTop:"3px"}}>
                        {malepercent}%
                        </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{width:"100%", borderRadius: "20px", background: "#C6C7F8",marginLeft:"10px"}}>
                <Box sx={{ display: "flex"}}>
                  {/* <img
                    src={averageicon}
                    width={54}
                    height={54}
                    style={{margin:"35px 8px"}}
                    alt="icons"
                  /> */}
                  <img src={femaleicon} width={54} height={54} style={{marginRight:"10px",marginTop:"30px",padding:"10px",backgroundColor:"white",borderRadius:"50%"}} alt="" />
                    <Box sx={{marginLeft:"10px",textAlign:"center"}}>
                    <Typography
                     sx={{
                      color: "#1C1F21",
                      fontFamily: "Inter,sans-serif",
                      fontSize: "20px",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "20px",
                      letterSpacing: "-0.28px",
                      margin:"15px 0px 0px 0px",
                     
                    }}
                    >
                      Female
                    </Typography>
                    <Typography sx={{fontSize:"15px",width:170}}>Percentage and number</Typography>
                    <Typography
                      sx={{
                        color: "#1C1F21",
                        fontFamily: "Inter,sans-serif",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "24px",
                        letterSpacing: "-0.48px",
                        padding:"10px 20px 0px 20px"
                      }}
                    >
                      {femaleCount}
                    </Typography>
                        <Typography sx={{fontSize:"20px",marginBottom:"0px",marginTop:"5px"}}>
                          {femalepercent}%
                        </Typography>
                  </Box>
                </Box>
              </Box>
              </Box>
    </div>
  )
}

export default NavbargenderOverview