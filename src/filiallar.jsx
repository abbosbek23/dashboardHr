// import React from 'react'

import NavbargenderOverview from "./NavbargenderOverview"
import { Box } from '@mui/system';

const Filiallar = () => {
  return (
    <div>
        <NavbargenderOverview namepage={"Branches Overview"}/>
        <Box sx={{height:"80vh",padding:"0 20px",width:"100%",position: "relative",overflow: "hidden",minHeight: "500px",}}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1J0v5W1rXD3vSM08x4hE9j3d250doBrk&ehbc=2E312F" style={{border:"none",width: "98%",height: "100%",position: "absolute",left:"1%",right:"40%"}}></iframe>
        </Box>
    </div>
  )
}

export default Filiallar