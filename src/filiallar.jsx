// import React from 'react'

import NavbargenderOverview from "./NavbargenderOverview"
import { Box } from '@mui/system';

const Filiallar = () => {
  return (
    <div>
        <NavbargenderOverview/>
        <Box sx={{height:"80vh",marginLeft:"15px"}}>
        <iframe src="https://www.google.com/maps/d/embed?mid=1y2DT8SagBgF_nPSxnP7pD-0YeyM52Mc&ehbc=2E312F" style={{border:"none"}} width="1070" height="480"></iframe>
        </Box>
    </div>
  )
}

export default Filiallar