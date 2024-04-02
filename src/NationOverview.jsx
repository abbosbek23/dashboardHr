import { Box } from '@mui/system';
import EmployeeAgeDistribution from './barchart';
import { Typography } from '@mui/material';
import BarChart from "./demobarchart";
import Navbarstatistics from './navbarstatistics';

const NationOverview = () => {
  return (
    <>
        <Navbarstatistics/>
    <div style={{display:"flex"}}>

                 <Box sx={{ width:"45%",padding: "0px 24px 8px 24px",borderRadius: "20px",background:"#F7F9FB",margin:"30px"}}>
                      <EmployeeAgeDistribution/>
                </Box>
                <Box sx={{width:"45%",padding:"0px 30px 30px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"30px"}}>
                <Typography sx={{textAlign:"center",fontWeight:600,paddingTop:"10px"}}>Employee Nation</Typography>
                <BarChart/>
                </Box>
    </div>
    </>
  )
}

export default NationOverview