import React, { useContext, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ViewListIcon from '@mui/icons-material/ViewList';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

/* Imagenes */
import grafica1 from '../../assets/g1.png'
import grafica2 from '../../assets/g2.png'
import grafica3 from '../../assets/g3.png'
import grafica4 from '../../assets/g4.webp'
import grafica5 from '../../assets/g5.png'
import grafica6 from '../../assets/g6.png'

/* Styles */
import '../../Styles/MargeSales/margeSales.css'
import '../../Styles/MargeSales/mediaMargeSales.css'

/* Context */
import UserContext from '../../Context/User/UserContext';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'auto',
		backgroundPosition: 'center',
		height: '100vh',
	},
	typography: {
		color: "#606060",
		fontFamily: 'Open Sans Condensed',

	  }
	  
}));

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);

export const MargenSales = () => {

  const navigate = useNavigate();

  const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const classes = useStyles()

  const userContext = useContext(UserContext);
  const {usuarioAutenticado, verificarAutenticada, datoUsuario, cerrarSecion} = userContext;

	useEffect(() => {

		const elem = window.localStorage.getItem('usuario')
        const dato = elem ? JSON.parse(elem) : null

		if(usuarioAutenticado || dato){

			verificarAutenticada();

		}else{
      Swal.fire({
        icon: 'error',
        title: ' Debes iniciar secion ',
        showConfirmButton: false,
        timer: 3000,
      }).then(function() {
        navigate("/login");
      });
            
      return <></>
    }

	}, [])
	
	const handleSubmit = async (e) =>{
		//setBody({...body,[e.target.name]: e.target.value});
		//console.log("handleChange"+ body);
		buttons('Perfil');
        
    };

	const buttons = (type) =>{
		
		if(type === 'Perfil'){
			Swal.fire({
				icon: 'success',
				title: 'Nombre '+ datoUsuario.nombre,
				showConfirmButton: false,
				timer: 3000,
			})
		}
		if(type === 'Cerrar sesión'){
			cerrarSecion();
			navigate("/login");
		}
        if(type === 'modulos'){
            navigate("/dashboard");
        }
	}

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

  return <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={open} style={{ background: '#FFFFFF' }}>
      <Toolbar >
        <IconButton
          className={classes.typography}
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" noWrap component="div" className={classes.typography}>
          Interfaz principal
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItemButton onClick={(e) => handleSubmit(e)}>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Perfil" /></ListItemButton>
      <ListItemButton onClick={() => buttons('modulos')}>
        <ListItemIcon>
        <ViewListIcon />
        </ListItemIcon>
        <ListItemText primary="Modulos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
        <ContactSupportIcon />
        </ListItemIcon>
        <ListItemText primary="Sobre PROVO." />
      </ListItemButton>
      <ListItemButton onClick={() => buttons('Cerrar sesión')}>
        <ListItemIcon>
        <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Cerrar sesión" />
      </ListItemButton>
      </List>
      <Divider />			
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{padding:'0'}}>
      <div className='bodyMargeSales'>
        <div className='BodyMS'>
          <div className='headerMS'>
            <div className='contTitle'>
              <h1>SALES MARGIN</h1>
            </div>
            <div className='icon'>
              <img src='https://www.latercera.com/resizer/EFm8se8COcJZjqcvfvUkJ2PuOOk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/VAPOYBTRO5GF7G4XJ2NIMNC6KA.jpg' alt='.../' ></img>
            </div>
          </div>
          <div className='cuerpoMS' >
            <div className='GraficasSales'>
              <div className='ventasProduct'>
                <img src={grafica1} alt='' />
                <img src={grafica2} alt='' />
              </div>
              <div className='ventasDias'>
                <img src={grafica3} alt='' />
              </div>
            </div>
            <div className='TotalVentas'>
              <img src={grafica4} alt='' />
              <img src={grafica3} alt='' />
            </div>
            <div className='infoInventario'>
              <img src={grafica4} alt='' />
            </div>
            <div className='Contfacturas'></div>
            <div className='infoStore'></div>
          </div>
        </div>
      </div>;
    </Box>
  </Box>

};
