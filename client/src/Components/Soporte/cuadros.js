//import React from 'react'
import Cuadro from './cuadro'
import "../../Styles/Soporte/cuadro.css"
import usuario1 from "../../assets/imagen/usuario1.png"
import inicio from '../../assets/imagen/inicio1.jpg'
import codigobarra1 from '../../assets/imagen/codigobarra1.png'
import inventario from '../../assets/imagen/inventario.jpg'
import producto1 from '../../assets/imagen/producto1.jpg'
import eliminar1 from '../../assets/imagen/eliminar1.png'

/*
contiene la informacion de ada cuadro


/**
 * Function Cuadros muestra los cuadros en pantalla
 * return imagen del cuadro, titulo del cuadro, texto del cuadro y boton del cuadro
 */
/*

export default function Cuadros() {
  return (
    
  )
}
*/

import React, { Component, useState, useContext, useEffect } from "react";
import "../../Styles/Inventario/inventario.css";
import "../../Styles/Inventario/App.css";
//import "../../Components/Inventario/funcion.js";
import casa from "../../assets/casa.png";
import provo2 from "../../assets/provo2.png";
// import { AiOutlineHome } from 'react-icons/ai';
import "../../Styles/Inventario/mediaProductos.css";

import Container from "@mui/material/Container";
import { styled, useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { Card } from "../Login/Card";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ViewListIcon from "@mui/icons-material/ViewList";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ButtonBase from "@mui/material/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import support from "../../assets/support.png";
import Swal from "sweetalert2";
import "../../Styles/Home/home.css";
/* Context */
import UserContext from "../../Context/User/UserContext";
import { useNavigate } from "react-router-dom";

window.document.title = "Home -> Dashboard";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
    backgroundPosition: "center",
    height: "100vh",
  },
  typography: {
    color: "#606060",
    fontFamily: "Open Sans Condensed",
  },
}));

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 190,
  [theme.breakpoints.down("sm")]: {
    width: "80% !important", // Overrides inline-style
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "2px solid currentColor",
    },
  },
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "length",
  backgroundPosition: "center 50%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="common.white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Attendance
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Cuadros() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const userContext = useContext(UserContext);
  const {
    cerrarSecion,
    datoUsuario,
  } = userContext;
  const navigate = useNavigate();

  const classes = useStyles();


  const buttons = (type) => {
    if (type === "Perfil") {
      Swal.fire({
        icon: "success",
        title: "Nombre " + datoUsuario.nombre,
        showConfirmButton: false,
        timer: 3000,
      });
    }
    if (type === "Cerrar sesión") {
      cerrarSecion();
      navigate("/login");
    }
    if (type === "Modulos") {
      console.log("Modulos");
      navigate("/dashboard");
    }
  };



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const cuadros = [
    {
      id: 1,
      title: "controlar mi inventario",
      image: inventario,
      text: "Para controlar tu inventario, solo debes llevar un orden de tus productos, la cantidad que ingresa, la cantidad que se vende, tambien teniendo en cuenta los precios de costo y los precios de venta. Revisar la cantidad en fisico y la cantidad virtual.",
      boton: "Leer mas...",
      funci: function(){  
        document.getElementById("hideText").style.display = "block";
        
      }
      
    },
    {
      id: 2,
      title: "¿Como agregar un producto nuevo?",
      image: producto1,
      text: "Tienes que dirigirte a inventarios y dale a la opcion añadir articulos, debes colocar el nombre, el precio, una descripcion que es opcional y guardarlo, ya esta listo para que puedas facturar el nuevo producto.",
      boton: "Leer mas...",
      funci: function(){
        document.getElementById("hideText").style.display= "none";
        
      }
    },
    {
      id:3,
      title: "¿como crear mi usuario?",
      image: usuario1,
      text: "Para crear un nuevo usuario debes registrate con un correo y una contraseña, se recomienda que sea privada y no compartirla.",
      boton: "Leer mas...",
      funci: function(){
        
        document.getElementById("hideText").style.display = "block";
        
        
      }
    },
    {
      id:4,
      title: "¿Como elimino un producto?",
      image: eliminar1,
      text: "Para eliminar un producto debes ir a articulos y darle opciones y despues eliminar",
      boton: "Leer mas..."
    },
    {
      id:5,
      title: "¿Puedo utilizar codigo de barras?",
      image: codigobarra1,
      text: "En el momento se esta implementando, puedes asignarle el codigo de barras a articulo y buscarlo por el codigo o por el nombre",
      boton: "Leer mas..."
    },
    {
      id:6,
      title: "¿Quieres volver al inicio?",
      image: inicio,
      boton: "Inicio"
    }
  
  ]


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
					<ListItemButton onClick={() => buttons('Perfil')}>
						<ListItemIcon><AccountCircleIcon /></ListItemIcon>
						<ListItemText primary="Perfil" /></ListItemButton>
				<ListItemButton onClick={() => buttons('Modulos')}>
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
        <div className='bodyCuadrosHelp'>
          <div className='containerCuadros'>
            <div className='row'> 
              {
                cuadros.map(cuadro => (
                  <div className='col-md-4' key={cuadro.id}>
                    <Cuadro id={cuadro.id} imageSource={cuadro.image} title ={cuadro.title} text ={cuadro.text} boton ={cuadro.boton} funci={cuadro.funci}/>
                    
                  </div>
                ))
              }
            </div>     
          </div>
        </div>
            
			</Box>
		</Box>
  );
}


