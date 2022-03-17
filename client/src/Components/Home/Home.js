
import { styled, useTheme } from '@mui/material/styles';
import React, { useState, useContext, useEffect } from 'react';
import {Card} from '../Login/Card'
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
import ButtonBase from '@mui/material/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import inventory from '../../assets/inventory.png';
import products from '../../assets/products.png';
import sales from '../../assets/sales.png';
import support from '../../assets/support.png';
import Swal from 'sweetalert2';
import '../../Styles/Home/home.css';
/* Context */
import UserContext from '../../Context/User/UserContext';
import { useNavigate } from "react-router-dom";

window.document.title = 'Home -> Dashboard';
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

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 190,
	[theme.breakpoints.down('sm')]: {
		width: '80% !important', // Overrides inline-style
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '2px solid currentColor',
		},
	},
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
const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'length',
	backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.5,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));


export default function Home() {
	
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const userContext = useContext(UserContext);
  	const {usuarioAutenticado, verificarAutenticada, cerrarSecion, datoUsuario} = userContext;
	const navigate = useNavigate();

	const classes = useStyles()

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

	/** For the Buttons */
	const images = [
		{
			url: inventory,
			title: 'Facturacion',
			width: '188px',

		},
		{
			url: products,
			title: 'Productos',
			width: '188px',
		},
		{
			url: sales,
			title: 'Contabilidad',
			width: '188px',
		},
		{
			url: support,
			title: 'Ayuda',
			width: '188px',
		},
	];

	const onSubmit = () => {
		//xconsole.log(body)

	}

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
	}

	const toFunction = (title) => {
		console.log(title);
		if(title === 'Facturacion'){
			navigate("/facturacion");
		}else if(title === 'Productos'){
			navigate("/productos");
		}else if(title === 'Contabilidad'){
			navigate("/margenventas");
		}else if(title === 'Ayuda'){
			navigate("/ayuda");
		}
	};


	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: 'flex' }}>
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
				<ListItemButton>
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
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Box sx={{
					display: 'flex', flexWrap: 'wrap',
					position: 'absolute', left: '55%', top: '60%',
					transform: 'translate(-50%, -50%)'
				}}>
					{images.map((image) => (
						<ImageButton
							focusRipple
							key={image.title}
							onClick={() => toFunction(image.title)}
							style={{
								width: image.width,
								border: '4px solid white',
								margin: '10px'
							}}
							
						>
							<ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<Image>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
									}}
								>
									{image.title}
									<ImageMarked className="MuiImageMarked-root" />
								</Typography>
							</Image>
						</ImageButton>
					))}
				</Box>
			</Box>
		</Box>
	);
}
