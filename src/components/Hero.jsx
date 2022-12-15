import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

export const Hero = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundImage: `url(http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2016/09/11/5QsPMUFzYjEHoIcq9rRNhJWa/Main-01/images/header-bg.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "block",
        backgroundPosition: "top",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(0),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor:"#6ec8c7",
        color:"#FFFFFF",
        borderRadius:"30px",
        fontWeight: "700",
        fontSize: "14px",
        textTransform: "none",
        padding: "0.5rem 1.25rem",
        marginBottom: "1em"
    }));

    const customImg = styled(Box)

    return (
        <Box sx={{ backgroundColor: "#262d32", minHeight: "80vh" }}>
            <CustomBox>
                <Navbar />
                <Box 
                    sx={{ flex: "1" }}
                >
                    <Box 
                        sx={{ 
                            flex: "1.25", 
                            padding: "10px"
                    }}
                    >
                        <img
                            src={"http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2016/09/11/5QsPMUFzYjEHoIcq9rRNhJWa/Main-01/images/header-logo.png"}
                            alt="heroImg"
                            style={{ maxWidth: "100%", marginBottom: "1em" }}
                        />
                    </Box>
                    <Box sx={{ flex: "1.25"}}
                        display={"flex"}
                        justifyContent= "center"
                        
                    >
                        {[...Array(4)].map((_, index) => (
                            <Box
                                key={index}
                                backgroundColor="#6ec8c7"
                                borderRadius="5px"
                                height="5px"
                                width="5px"
                                marginX={"6px"}
                            />
                        ))}
                    </Box>

                    <Typography
                        variant="h1"
                        sx={{ fontSize: "16px", fontStyle:"italic" ,color: "#FFFFFF", my: 2 }}
                    >
                        Responsive Email Template
                    </Typography>
                    
                    <Box
                        display="flex"
                        justifyContent={"center"}    
                    >
                        <CustomButton>
                            Get 30 Days Trial
                        </CustomButton>
                    </Box>
                </Box>
            </CustomBox> 
        </Box>
    )
};
