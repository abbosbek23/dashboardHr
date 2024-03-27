import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
// import ActiveIcon from './assets/activeicon.svg'; // Active rasm manzili
import { Box } from '@mui/system';

function LavozimlarTable() {
  const lavozimlar = [
    {
      "Олдинги лавозими": "Bank rahbariyati ma`lumotlarini jamlash bo`limi Bosh mutaxassis",
      "Янги лавозимга ўтган санаси": "03.01.2020",
      "Хозирги лавозими": "VNE ShTAT BULIMI Yuridik shaxslarga xizmat amaliyotlarini nazorat qilish bo`limi Bosh mutaxassis"
    },
    {
      "Олдинги лавозими": "Filiallar ichki nazoratini muvofiqlashtirish bo`limi Bosh mutaxassis",
      "Янги лавозимга ўтган санаси": "03.01.2020",
      "Хозирги лавозими": "Boshqaruv Ichki nazorat xizmati departamenti Jinoiy faoliyatdan olingan daromadlarni legallashtirishga qarshi kurashish bo`yicha ichki nazoratni muvofiqlashtirish boshqarmasi Gumonli va shubhali operatsiyalarni aniqlash bo`limi Bosh mutaxassis"
    },
    {
      "Олдинги лавозими": "Xalkaro xisob-kitoblar va SVIFT bo`limi Bo`lim boshlig`i",
      "Янги лавозимга ўтган санаси": "03.01.2020",
      "Хозирги лавозими": "Boshqaruv Gaznachilik departamenti Xorijiy valyutadagi g`aznachilik boshqarmasi boshlig'i"
    },
    {
      "Олдинги лавозими": "Pul bozori operatsiyalari boshqarmasi Bosh mutaxassis",
      "Янги лавозимга ўтган санаси": "03.01.2020",
      "Хозирги лавозими": "Boshqaruv Gaznachilik departamenti Chakana g`aznachilik boshqarmasi boshlig'i"
    },
    {
      "Олдинги лавозими": "Infratuzilmani rivojlantirish bo`yicha injiniring kompaniyasi DUK texnik nazorat bo`limi bosh mutaxassisi",
      "Янги лавозимга ўтган санаси": "03.01.2020",
      "Хозирги лавозими": null
    }
  ];

  return (
    <Box>
        <Typography sx={{marginLeft:"15px",color: "#1C1F21",fontSize: "24px"}}>Team Members</Typography>
    <Table sx={{height:"100%"}}>
      <TableHead>
        <TableRow sx={{width:"100%"}}>
          <TableCell sx={{width:"25%",padding:"10px"}}>Олдинги лавозими</TableCell>
          <TableCell sx={{width:"25%",padding:"10px"}}>Status</TableCell>
          <TableCell sx={{width:"20%",padding:"10px"}}>Янги лавозимга ўтган санаси</TableCell>
          <TableCell sx={{width:"25%",padding:"10px"}}>Хозирги лавозими</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {lavozimlar.map((lavozim, index) => (
          <TableRow key={index}>
            <TableCell>{lavozim["Олдинги лавозими"]}</TableCell>
            <TableCell>{lavozim["Хозирги лавозими"] ? <Typography sx={{width:"50%",padding:"0 8px",alignItems:"center",display:"flex",border: "1px solid rgba(28, 31, 33, 0.20)",borderRadius: "6px",backgroundColor:"white"}}><span style={{display:"block",width:"5px",height:"5px",borderRadius:"50%",backgroundColor:"#7AE582",marginRight:"3px",marginLeft:"0px"}}></span>Active</Typography> : <Typography sx={{alignItems:"center",display:"flex"}}><span style={{display:"block",width:"5px",height:"5px",borderRadius:"50%",backgroundColor:"red",marginRight:"3px",marginLeft:"0px"}}></span>Inactive</Typography>}</TableCell>
            <TableCell>{lavozim["Янги лавозимга ўтган санаси"]}</TableCell>
            <TableCell>{lavozim["Хозирги лавозими"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Box>
  );
}

export default LavozimlarTable;
