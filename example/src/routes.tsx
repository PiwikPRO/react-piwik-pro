import Home from './pages/Home.tsx'
import ECommercePage from './pages/ECommerce.tsx'
import CustomEventPage from './pages/CustomEvent.tsx'
import GoalConversionsPage from './pages/GoalConversions.tsx'

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />
  },
  {
    path: '/e-commerce',
    name: 'eCommerce',
    element: <ECommercePage />
  },
  {
    path: '/custom-event',
    name: 'Custom Event',
    element: <CustomEventPage />
  },
  {
    path: '/goal-conversions',
    name: 'Goal Conversions',
    element: <GoalConversionsPage />
  }
]
