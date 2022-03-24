import React, { useState } from "react"
import { Box, Grid, List, ListItem, ListItemText, IconButton } from "@mui/material"
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSnackbar } from "notistack";

import { eCommerce } from '@piwikpro/react-piwik-pro';

interface Product {
  sku: string;
  name: string;
  desc: string;
  price: number;
}

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const products: Product[] = [
  {
    sku: 'sku-1',
    name: 'Product 1',
    desc: 'A nice thing',
    price: 9.99,
  },
  {
    sku: 'sku-2',
    name: 'Product 2',
    desc: 'Another thing',
    price: 3.45,
  },
  {
    sku: 'sku-3',
    name: 'Product 3',
    desc: 'Something else',
    price: 6.51,
  },
  {
    sku: 'sku-4',
    name: 'Product 4',
    desc: 'Best thing of all',
    price: 14.11,
  },
];

export const Checkout: React.FC = () => {
  const [ cart, addToCart ] = useState<Product[]>([]);
  const { enqueueSnackbar } = useSnackbar();

  const handlelAddToCart = (product: Product) => {
    enqueueSnackbar(`eCommerce.addEcommerceItem()`, { variant: 'success'})
    eCommerce.addEcommerceItem(
      product.sku,
      product.name,
      'product-category',
      product.price,
      1
    )
    addToCart([
      ...cart,
      product
    ])
  }

  const handleCheckout = () => {
    const total = Number(cart.reduce((productTotal, currentProduct) => productTotal + currentProduct.price, 0).toFixed(2));
    const tax = Number((total * 0.77).toFixed(2));

    enqueueSnackbar(`eCommerce.trackEcommerceOrder()`, { variant: 'success'})
    eCommerce.trackEcommerceOrder('order-id', total, total, tax, 0, 0);

  }

  return (
    <Grid container spacing={4}>
      <Grid xs={12} sm={7} item>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography fontWeight={500}>Product list</Typography>
          <List>
            { products.map((product) => {
              return (
                <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={product.name} secondary={product.desc} />
                  <Typography variant="body2">${product.price}</Typography>
                  <Box ml={2}>
                    <IconButton
                      component={"span"}
                      color={"primary"}
                      onClick={() => handlelAddToCart(product)}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Box>
                </ListItem>
              )
            }) }
          </List>
        </Paper>
      </Grid>
      <Grid xs={12} sm={5} item>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Typography fontWeight={500}>
            Checkout
          </Typography>
          <Grid item container direction="column" xs={12}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Payment details
            </Typography>
            <Grid item xs={12}>
              <List>
                { cart.map((product: Product) => {
                  return (
                    <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                      <ListItemText primary={product.name} secondary={product.desc} />
                      <Typography variant="body2">${product.price}</Typography>
                    </ListItem>
                  )
                }) }
              </List>
            </Grid>
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item sm={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              onClick={handleCheckout}
              sx={{ ml: 1 }}
            >
              Place order
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}
