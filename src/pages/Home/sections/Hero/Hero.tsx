import { Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBg from "../../../../components/AnimatedBg/AnimetedBg";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px"
        },
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        borderRadius: "50%",
        position: "relative",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }))

    return (
        <>
            <StyledHero>
                {/* Background Animation */}
                <AnimatedBg />

                <Container maxWidth="lg">
                    <Grid container spacing={2}
                        alignItems="center">
                        <Grid size={{ xs: 12, md: 5 }} display="flex"
                            p={{ xs: 1, md: 2 }}
                        >
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Melyssa Silva</Typography>
                            <Typography color="secondary.light" variant="h2" textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, fontWeight: 'bold' }}>Software Developer |</Typography>
                            <Typography color="secondary.light" variant="h2" textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, fontWeight: 'bold' }}>Computer Science Student</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid component="div" size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("download")}
                                    >
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid component="div" size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("contact")}>
                                        <EmailIcon />
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero >
        </>
    )
}

export default Hero