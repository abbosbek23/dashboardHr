import Navbarstatistics from './navbarstatistics'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import DoughnutChart from "./positionpieChart";
import GenderPieChart from "./genderpiechart";

const Genderoverview = () => {
  return (
    <>
    <Navbarstatistics/>
    <div style={{display:"flex"}}>
    <Box sx={{width:"45%",height:"405px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Gender</Typography> 
                <GenderPieChart/>
    </Box>
    <Box sx={{width:"45%",height:"405px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginLeft:"25px",}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Positions</Typography>  
                <DoughnutChart/>
                </Box>
    </div>
    </>
  )
}

export default Genderoverview