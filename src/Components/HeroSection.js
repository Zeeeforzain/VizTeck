import { Box, Typography, Button } from "@mui/material";
import React from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      className="box"
      width={{ xs: "100%", md: "60%" }}
      height={{xs:'auto',md:"80vh"}}
      margin={{ xs: "15px 20px 20px 15px", md: "20px 20% 10px 100px" }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "700",
          color: "white",
          fontSize: { xs: "1.75rem", md: "3.75rem" },
        }}
      >
        Transforming Mobile and Web App Development Services
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "white", marginTop: "20px", marginBottom: "20px" }}
      >
        Company focused on crafting business solutions that optimize and elevate
        business operations.
      </Typography>
      <Box width={"138px"} height={"6vh"}>
        {" "}
        <Button
          onClick={() => {
            navigate("/ContactForm");
          }}
          variant="contained"
          color="primary"
          sx={{
            "&:hover": {
              width: "140px",
              height: "7vh",
              transition: "width 0.6s ease-out, height 0.6s ease-out",
            },
          }}
        >
          {" "}
          Let's Talk <ArrowRightRoundedIcon fontSize="medium" />
        </Button>
      </Box>
      {/* <Box
        display={"flex"}
        marginTop={"50px"}
        marginBottom={"50px"}
        width={{xs:'80%',md:"50%"}}
        alignItems={'center'}
        justifyContent={"space-between"}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            fontWeight: "500",
            marginTop: "20",
            marginBottom: "20",
            width:'40%'
          }}
        >
          Trusted By:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width:'100%',
          }}
        >
          <img
            width={"130px"}
            height={"45px"}
            src="Images/nesma.png"
            alt="logo"
          />
          <img
            width={"130px"}
            height={"45px"}
            src="Images/mygroser.png"
            alt="logo"
          />
        </Box> */}
    </Box>
  );
}
