import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { featureItems } from './listItems';
import { Route, Switch } from 'react-router-dom';
import { FEATURES } from '../constants/FEATURES';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PiwikProLogo from '../assets/pp-logo_white.svg';
import ReactLogo from '../assets/reactjs-ar21.svg';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Piwik PRO
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 270;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container>
              <Grid item>
                <img
                  src={ReactLogo}
                  alt="react-js" />
              </Grid>
              <Grid item>
                <span style={{
                  fontSize: '28px',
                  marginTop: '10px',
                  display: 'block',
                  marginRight: '10px',
                }}>+</span>
              </Grid>
              <Grid item>
                <img
                  height={'18px'}
                  src={PiwikProLogo}
                  style={{
                    marginTop: '22px'
                  }}
                  alt="piwik-pro" />
              </Grid>
            </Grid>
            {/*<IconButton color="inherit">*/}
            {/*  <Badge badgeContent={4} color="secondary">*/}
            {/*    <NotificationsIcon />*/}
            {/*  </Badge>*/}
            {/*</IconButton>*/}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            { featureItems }
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Switch>
                  <Route path={'/'} exact>
                    <Grid
                      container
                      direction="row"
                      justifyContent="start"
                      alignItems="stretch"
                      spacing={4}
                    >
                      {
                        FEATURES.map((feature) => (
                          <Grid key={feature.id} item width={'33%'} height={220}>
                            <Card raised style={{ height: '100%' }}>
                              <CardContent>
                                <Typography display={'flex'} gutterBottom variant="h5" component="div">
                                  <feature.icon fontSize="large" /> <span style={{ marginLeft: '10px' }}>{ feature.name }</span>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  { feature.description }
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        ))
                      }
                    </Grid>
                  </Route>
                  {
                    FEATURES.map((feature) => (
                      <Route key={feature.id} path={feature.url}>
                        <feature.component />
                      </Route>
                    ))
                  }
                </Switch>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
