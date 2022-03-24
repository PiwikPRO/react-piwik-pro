import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import { FEATURES } from '../constants/FEATURES';
import { FeatureItem } from './FeatureItem';

export const featureItems = (
  <>
    <ListSubheader component="div" inset>
      Features
    </ListSubheader>
    {
      FEATURES.map((feature) => {
        return (
          <FeatureItem key={feature.id} title={feature.name} url={feature.url} icon={<feature.icon />} />
        )
      })
    }
  </>
);
