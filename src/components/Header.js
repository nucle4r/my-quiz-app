import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Drawer,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "../ToggleColorMode";
import Logo from "../assets/logo.png";
import { useColorMode } from '../theme-context'; 

function Header({ setDifficulty, setQuizStarted }) {
  const [open, setOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const handleBack = () => {
    setDifficulty("");
    setQuizStarted(false);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.6)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "140px",
              height: "auto",
              cursor: "pointer",
              marginRight: "auto",
            }}
            onClick={() => handleBack()}
          />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <MenuItem
              onClick={() => scrollToSection("features")}
              sx={{ color: "#29323c", fontWeight: "bold" }}
            >
              Features
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("testimonials")}
              sx={{ color: "#29323c", fontWeight: "bold" }}
            >
              Testimonials
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("highlights")}
              sx={{ color: "#29323c", fontWeight: "bold" }}
            >
              Highlights
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("pricing")}
              sx={{ color: "#29323c", fontWeight: "bold" }}
            >
              Pricing
            </MenuItem>
            <MenuItem
              onClick={() => scrollToSection("faq")}
              sx={{ color: "#29323c", fontWeight: "bold" }}
            >
              FAQ
            </MenuItem>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Box>
          <Button
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
            color="inherit"
          >
            <MenuIcon sx={{ color: "#29323c" }}/>
          </Button>
          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Box sx={{ my: 2 }}>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Sample Menu
                </Typography>
              </Box>
              <Divider />
              <MenuItem onClick={() => scrollToSection("features")}>
                Features
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("highlights")}>
                Highlights
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("pricing")}>
                Pricing
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
              <Divider />
              <MenuItem>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  href="/sign-up"
                  sx={{ mt: 1 }}
                >
                  Sign up
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  color="primary"
                  variant="outlined"
                  fullWidth
                  href="/sign-in"
                  sx={{ mb: 1 }}
                >
                  Sign in
                </Button>
              </MenuItem>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Header;
