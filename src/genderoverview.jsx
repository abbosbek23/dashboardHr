// import Navbarstatistics from './navbarstatistics'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import GenderPieChart from "./genderpiechart";
import MalesPieChart from './PieChartComponent';
import FemalePieChart from './FemalePieChart';



// import NavbargenderOverview from './NavbargenderOverview';
import Navbarstatistics from './navbarstatistics';

const Genderoverview = () => {

  


  return (
    <Box>
    {/* <NavbargenderOverview/> */}
    <Navbarstatistics namepage={"Gender overview"}/>
    <div style={{display:"flex"}}>
    <Box sx={{width:"45%",height:"505px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Gender</Typography> 
                <GenderPieChart/>
    </Box>
    <Box sx={{width:"45%",height:"505px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginLeft:"25px",}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Males by Age</Typography>  
                {/* <DoughnutChart/> */}
                <MalesPieChart/>
                </Box>
                <Box sx={{width:"45%",height:"505px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginLeft:"25px",marginRight:"15px"}}>
                <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "18px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center"}}>Female by Age</Typography>  
                {/* <DoughnutChart/> */}
                <FemalePieChart/>
                </Box>
    </div>
    </Box>
  )
}

export default Genderoverview