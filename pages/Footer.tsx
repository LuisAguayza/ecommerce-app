import React from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";
import useStyles from "../styles/UseStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link color="inherit">Contacto</Link>
              </Box>
              <Box>
                <Link color="inherit">Soporte</Link>
              </Box>
              <Box>
                <Link color="inherit">Acerca de</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link color="inherit">Contacto</Link>
              </Box>
              <Box>
                <Link color="inherit">Soporte</Link>
              </Box>
              <Box>
                <Link color="inherit">Acerca de</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link color="inherit">Contacto</Link>
              </Box>
              <Box>
                <Link color="inherit">Soporte</Link>
              </Box>
              <Box>
                <Link color="inherit">Acerca de</Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Material UI &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
