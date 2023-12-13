import { routes } from '../routes'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material'

const drawerWidth: number = 270

function Header() {
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
            <ListItemButton component='a' href={path}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default Header
