// import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Distrubutionbyreasons from './Distrubutionbyreasons';
import HorizontalBarChart from "./barcharthorizontal2"; 
import LavozimlarTable from "./teammemberstable";
import BarChart from "./demobarchart";
import Transfer from "./Transfer";
import BarchartHorizontal from './barcharthorizontal';
import LanguageChart from './barcharts';

const Others = () => {
  return (
    <div>
        <Box sx={{width:"97%",height:"400px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginTop:"10px",marginRight:"0px",marginLeft:"20px",marginBottom:"20px"}}>
          <Typography sx={{textAlign:"center",fontSize:"20px",fontWeight:"600",paddingTop:"15px",marginBottom:"10px"}}>Employee distribution by dismissal</Typography>
         <Distrubutionbyreasons/> 
        </Box>  
        <div style={{display:"flex"}}>
        <Box height={405} className={'barvertical'} sx={{width:"45%",margin:"0px 0px 20px 20px",padding:"25px",borderRadius:"20px",backgroundColor:"#F7F9FB"}} >
                <LavozimlarTable/>
       </Box>
       <Box sx={{width:"45%",height:"405px",padding:"0px 30px 0px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"0 0px 0px 30px"}}>
                <HorizontalBarChart/>          
       </Box>
    </div>
    <div style={{display:"flex"}}>
    <Box sx={{
            width: "45%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "20px 0 0 20px ",
          }}>
          <Typography sx={{textAlign:"center",fontWeight:600,paddingTop:"10px"}}>Employee Nation</Typography>
          <BarChart/>
          </Box>
          <Box 
        sx={{
            width: "45%",
            padding: "0px 24px 8px 24px",
            borderRadius: "20px",
            background: "#F7F9FB",
            margin: "20px 0 0 30px",
            height:"440px"
          }}
        >
            <Transfer/>
        </Box>
    </div>
    <div style={{height:"100vh",display:"flex",paddingTop:"10px",marginLeft:"0px"}}>
        <Box sx={{width:"45%",height:"460px",padding:" 8px 14px 37px 0px",borderRadius: "20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"20px",alignItems:"center"}}>
                <Typography sx={{color:"#1C1F21",
                fontfamily: "Poppins,sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "-0.48px",textAlign:"center"}}>Education level distribution</Typography>
                <BarchartHorizontal/> 
        </Box>
        <Box className={"barvertical"} sx={{width:"45%",height:"460px",padding:" 10px 0px 37px 10px",borderRadius: "20px",backgroundColor:"#F7F9FB",alignItems:"center",marginLeft:"30px"}}>
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
    </div>
    </div>
  )
}

export default Others