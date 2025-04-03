import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#F5F3F5",

        },
        secondary: {
            main: "#051424",
        }, //#7713bd hover
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});

theme = responsiveFontSizes(theme);


export default theme;