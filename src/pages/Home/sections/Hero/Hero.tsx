import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "#919192",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "10%",

    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImg src={Avatar} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography color="secondary" variant="h1" textAlign="center">Melyssa Silva</Typography>
                            <Typography color="secondary" variant="h2" textAlign="center">Software Developer | Computer Science Student</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid component="div" size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <DownloadIcon />
                                        Download CV</Button>
                                </Grid>
                                <Grid component="div" size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <EmailIcon />
                                        Contact me</Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>



            </StyledHero>
        </>
    )
}

export default Hero