import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#181818 "
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projects</MenuItem>
                </StyledToolbar>

            </AppBar>
        </>
    )
}

export default NavBar