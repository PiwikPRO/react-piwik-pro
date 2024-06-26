import Header from './layout/Header.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { routes } from './routes.tsx'
import { Box, CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import PiwikPro from '@piwikpro/react-piwik-pro'

PiwikPro.initialize(
  '957285ba-7867-4c6b-a8be-5e3e6c069b71',
  'https://astralprojection.promilci.com',
  { dataLayerName: 'myDataLayer' }
)

const App = () => (
  <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    maxSnack={10}
  >
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Routes>
            {routes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </Box>
      </Box>
    </Router>
  </SnackbarProvider>
)

const container = document.getElementById('root')
if (!container) {
  throw new Error('#root element not found')
}

createRoot(container).render(<App />)
