// import React from 'react'

import NavbargenderOverview from "./NavbargenderOverview"
import { Box } from '@mui/system';

const Filiallar = () => {
  return (
    <div>
        <NavbargenderOverview namepage={"Branches Overview"}/>
        <Box sx={{padding:"0 20px",width:"100%",position: "relative",overflow: "hidden",minHeight: "500px",}}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1y2DT8SagBgF_nPSxnP7pD-0YeyM52Mc&ehbc=2E312F" style={{border:"none",width: "98%",height: "150%",position: "absolute",bottom: "-25%",left:"1%",right:"40%"}}  height="480"></iframe>
        </Box>
    </div>
  )
}

export default Filiallar