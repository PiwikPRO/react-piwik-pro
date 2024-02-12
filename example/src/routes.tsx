import HomePage from './pages/HomePage.tsx'
import ECommercePage from './pages/ECommercePage.tsx'
import CustomEventPage from './pages/CustomEventPage.tsx'
import GoalConversionsPage from './pages/GoalConversionsPage.tsx'
import ContentTrackingPage from './pages/ContentTrackingPage.tsx'

export const routes = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />
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
  },
  {
    path: '/content-tracking',
    name: 'Content Tracking',
    element: <ContentTrackingPage />
  }
]
