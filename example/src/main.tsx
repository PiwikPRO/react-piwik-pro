import Header from './layout/Header.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { routes } from './routes.tsx'
import { Box, CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import PiwikPro from '@piwikpro/react-piwik-pro'

PiwikPro.initialize(
  '0c0a8661-8c10-4f59-b8fc-1c926cbac184',
  'https://astralprojection.promilci.com'
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
// @ts-ignore
createRoot(container).render(<App />)
