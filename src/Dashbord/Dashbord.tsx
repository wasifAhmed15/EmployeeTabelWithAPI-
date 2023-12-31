import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Route,Routes,useNavigate  } from 'react-router-dom';
import Employe from './Employelist';
import Product from './Product';
import EditData from './EditData';
import Add from './Add';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}


export default function Dashbord(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let  [text,settext]= useState([
    {
      name:"Employee list",
      routeUrls:"Employe",
    icon:<FormatListBulletedIcon/>
  },

  {
    name:"Product",
    routeUrls:"Product",

},
{
  routeUrls:"Edit",
},

{
  routeUrls:"Add",
}



  ])

  const Navigate = useNavigate()
  const clickchange = (routeUrls:any)=>{
    Navigate(`/Admin/${routeUrls}`)
  }


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {text.map((x, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={()=>clickchange(x.routeUrls)}>
              <ListItemIcon>
                {x.icon ? x.icon : ""}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );
  
  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className='py-3'
      >
       
            <div className='d-flex justify-content-end   px-3'>
            <Button variant="contained" color='error'>Login Out</Button>

             
            </div>
             
        
      

        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       

<Routes>
  <Route path='/Employe' element={<Employe/>} />
  <Route path="/Product" element={<Product/>}/>
  <Route path="/Edit/:id" element={<EditData/>}/>
  <Route path="/Add" element={<Add/>}/>
</Routes>
      </Box>
    </Box>
  );
}