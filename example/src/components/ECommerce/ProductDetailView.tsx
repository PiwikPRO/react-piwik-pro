import { Product } from '../../../../src/interfaces/product.ts'
import { FunctionComponent } from 'react'
import {
  Dialog,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from '@mui/material'

type Props = {
  product: Product | null
  isOpen: boolean
  close: () => void
}

const ProductDetailView: FunctionComponent<Props> = ({
  product,
  isOpen,
  close
}) => {
  return (
    <Dialog onClose={close} open={isOpen}>
      {product && (
        <Grid container>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography fontWeight={500}>{product.name}</Typography>
            <List>
              {Object.entries(product).map(([productKey, productValue]) => {
                return (
                  <ListItem key={productKey} sx={{ py: 1, px: 0 }}>
                    <ListItemText
                      primary={productKey}
                      secondary={JSON.stringify(productValue)}
                    />
                  </ListItem>
                )
              })}
            </List>
          </Paper>
        </Grid>
      )}
    </Dialog>
  )
}

export default ProductDetailView