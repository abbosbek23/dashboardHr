import { Table, TableBody, TableCell, TableHead, TableRow, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';

function LavozimlarTable() {
  const [lavozim, setLavozim] = useState([]);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  useEffect(() => {
    const getLavozim = async () => {
      try {
        const { data } = await axios.get("https://dev.ikramovna.me/api/v1/staff/transfer");
        setLavozim(data);
      } catch (error) {
        console.log(error);
      }
    };
    getLavozim();
  }, []);

  const handleExpandRow = (index) => {
    setExpandedRowIndex(index === expandedRowIndex ? null : index);
  };

  return (
    <Box>
      <Typography sx={{ marginLeft: "15px", color: "#1C1F21", fontSize: "24px",textAlign:"center" }}>Transfer Staffs</Typography>
      <Table sx={{ height: "100%" }}>
        <TableHead>
          <TableRow sx={{ width: "100%" }}>
            <TableCell sx={{ width: "33.2%", padding: "10px", fontWeight: 600 }}>Previous position</TableCell>
            <TableCell sx={{ width: "34%", padding: "10px", fontWeight: 600, textAlign: "center" }}>Date of transfer</TableCell>
            <TableCell sx={{ width: "33.2%", padding: "10px", fontWeight: 600 }}>Current position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lavozim.map((lavozimlar, index) => (
            <Fragment key={index}>
              <TableRow>
                <TableCell sx={{ padding: "10px" }}>{lavozimlar["Олдинги лавозими"]}</TableCell>
                <TableCell sx={{ padding: "10px", textAlign: "center" }}>{lavozimlar["Янги лавозимга ўтган санаси"]}</TableCell>
                <TableCell sx={{ padding: "10px" }}>
                  {expandedRowIndex === index ? (
                    <div>
                      {lavozimlar["Хозирги лавозими"]}
                      <Button onClick={() => handleExpandRow(index)}>Collapse</Button>
                    </div>
                  ) : (
                    <div>
                      <div style={{ maxHeight: expandedRowIndex === index ? "none" : "50px", overflow: "hidden" }}>
                        {lavozimlar["Хозирги лавозими"]}
                      </div>
                      <Button onClick={() => handleExpandRow(index)}>Expand</Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default LavozimlarTable;
