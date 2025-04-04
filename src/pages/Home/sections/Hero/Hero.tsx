import { Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBg from "../../../../components/AnimatedBg/AnimetedBg";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        height: "100vh",
        display: "flex",
        alignItems: "center",
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
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Melyssa Silva</Typography>
                            <Typography color="secondary.light" variant="h2" textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, fontWeight: 'bold' }}>Software Developer |</Typography>
                            <Typography color="secondary.light" variant="h2" textAlign="center" sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, fontWeight: 'bold' }}>Computer Science Student</Typography>
                            <Grid container display="flex" justifyContent="center" spacing={3}>
                                <Grid component="div" size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid component="div" size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton>
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