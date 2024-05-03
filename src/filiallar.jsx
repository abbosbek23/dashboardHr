// import React from 'react'

import NavbargenderOverview from "./NavbargenderOverview"
import { Box } from '@mui/system';

const Filiallar = () => {
  return (
    <div>
        <NavbargenderOverview namepage={"Branches Overview"}/>
        <Box sx={{height:"80vh",padding:"0 10px",width:"100%"}}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1y2DT8SagBgF_nPSxnP7pD-0YeyM52Mc&ehbc=2E312F" style={{border:"none",width:"100%"}}  height="480"></iframe>
        </Box>
    </div>
  )
}

export default Filiallar