import { Box } from '@mui/system';
import HorizontalBarChart from "./barcharthorizontal2"; 
import LavozimlarTable from "./teammemberstable";
import Navbarstatistics from './navbarstatistics';
const Interdepartmentoverview = () => {
  return (
    <>
    <Navbarstatistics/>
    <div style={{display:"flex"}}>
        <Box height={405} className={'barvertical'} sx={{width:"45%",margin:"0px 0px 20px 20px",padding:"25px",borderRadius:"20px",backgroundColor:"#F7F9FB"}} >
                <LavozimlarTable/>
       </Box>
       <Box sx={{width:"45%",height:"405px",padding:"0px 30px 0px 30px",borderRadius:"20px",background:"#F7F9FB",margin:"0 0px 0px 30px"}}>
                <HorizontalBarChart/>          
       </Box>
    </div>
    </>
  )
}

export default Interdepartmentoverview