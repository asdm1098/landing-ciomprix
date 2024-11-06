import React from 'react';
import { Box, Button, styled, Typography } from "@mui/material";


export const Article = () => {
    return (
        <Box
            display={"flex"}
            alignContent="center"
            textAlign={"center"}
        >
            <Box sx={{ flex: "1" }}>
                <img 
                    src="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2016/09/11/5QsPMUFzYjEHoIcq9rRNhJWa/Main-01/images/icon-1.png" 
                    alt="img" 
                />
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: "18px",
                        color: "#687690",
                        fontWeight: "500",
                        mt: 10,
                        mb: 4,
                    }}
                >
                    Welcome to Besnik Agency
                </Typography>

            </Box>

        </Box>
    )
}
