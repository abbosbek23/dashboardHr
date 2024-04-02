import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import BarchartHorizontal from './barcharthorizontal';
import LanguageChart from './barcharts';
import Navbarstatistics from './navbarstatistics';

const EduLang = () => {
  return (
    <>
    <Navbarstatistics/>
    <div style={{height:"100vh",display:"flex",paddingTop:"10px",marginLeft:"0px"}}>
        <Box sx={{width:"47%",height:"460px",padding:" 8px 14px 37px 0px",borderRadius: "20px",backgroundColor:"#F7F9FB",marginRight:"10px",marginLeft:"20px",alignItems:"center"}}>
                <Typography sx={{color:"#1C1F21",
                fontfamily: "Poppins,sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "-0.48px",textAlign:"center"}}>Education level distribution</Typography>
                <BarchartHorizontal/> 
        </Box>
        <Box className={"barvertical"} sx={{width:"45%",height:"460px",padding:" 10px 0px 37px 10px",borderRadius: "20px",backgroundColor:"#F7F9FB",alignItems:"center"}}>
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
    </>
  )
}

export default EduLang