// import { Box } from '@mui/system';
import Typography from "@mui/material/Typography"
import EmployeeExperienceBarChart from './EmployeeExperience';
// import Navbarstatistics from './navbarstatistics';
import { Box } from '@mui/system';
import NavbargenderOverview from "./NavbargenderOverview";
const Interdepartmentoverview = () => {
  return (
    <>
    {/* <Navbarstatistics namepage={"Experience"}/> */}
    <NavbargenderOverview namepage={"Experience overview"}/>
    <div style={{display:"flex"}}>
    <Box sx={{width:"45%",height:"600px",borderRadius:"20px",backgroundColor:"#F7F9FB",marginRight:"0px",marginLeft:"15px"}}>
    <Typography sx={{color:"#1C1F21",
                 fontFamily: "Poppins,sans-serif",
                 fontSize: "20px",
                 fontStyle: "normal",
                 fontWeight: 700,
                 lineHeight: "30px",
                 letterSpacing: "-0.36px",marginTop:"14px",marginLeft:"14px",textAlign:"center",marginBottom:"10px"}}>
     Years with bank
    </Typography>  
    <EmployeeExperienceBarChart/>
    </Box>
    
    </div>
    </>
  )
}

export default Interdepartmentoverview