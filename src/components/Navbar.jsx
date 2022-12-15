import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/top-logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
        event.type === "keydown" &&
        (event.type === "Tab" || event.type === "Shift")
        ) {
        return;
        }

        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {["PRODUCTS", "SERVICE", "CONTACT"].map(
            (text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        {index === 0 && <FeaturedPlayListIcon />}
                        {index === 1 && <MiscellaneousServicesIcon />}
                        {index === 2 && <ContactsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            )
            )}
        </List>
        </Box>
    );

    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#FFFFFF",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
        color: "#fff",
        },
    }));

    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
        display: "none",
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
        display: "block",
        },
    }));

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
        display: "none",
        },
    }));

    return (
        <NavbarContainer>
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.5rem",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                <Drawer
                    anchor="left"
                    open={mobileMenu["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
                <NavbarLogo src={logoImg} alt="logo" />
                </Box>

                <NavbarLinksBox>
                    <NavLink variant="body2">PRODUCTS</NavLink>
                    <NavLink variant="body2">SERVICE</NavLink>
                    <NavLink variant="body2">CONTACT</NavLink>
                </NavbarLinksBox>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <NavLink variant="body2">Sign Up</NavLink>
                <CustomButton
                    backgroundColor="#6ec8c7"
                    color="#fff"
                    buttonText="Register"
                />
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;
