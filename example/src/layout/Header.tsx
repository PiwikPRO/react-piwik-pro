import { routes } from '../routes'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const drawerWidth: number = 270

function Header() {
  const { pathname } = useLocation()

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <List>
        {routes.map(({ path, name }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={path}
              selected={pathname === path}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Header
