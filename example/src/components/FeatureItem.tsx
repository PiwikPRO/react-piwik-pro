import React from "react"

import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Link } from "react-router-dom"

interface FeatureItemProps {
  title: string;
  icon?: React.ReactNode;
  url: string;
}

export const FeatureItem = ({ title, icon, url }: FeatureItemProps) => {
  return (
    <Link to={url} style={{ textDecoration: 'none', color: 'darkslategray' }}>
      <ListItemButton>
        <ListItemIcon>
          { icon && icon }
        </ListItemIcon>
        <ListItemText primary={ title } />
      </ListItemButton>
    </Link>
  )
}
