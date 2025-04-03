import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#919192",

        },
        secondary: {
            main: "#7713bd",
        },

    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});

theme = responsiveFontSizes(theme);


export default theme;