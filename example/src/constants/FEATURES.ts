import PeopleIcon from '@mui/icons-material/People';
import SourceIcon from '@mui/icons-material/Source';
// import CookieIcon from '@mui/icons-material/Cookie';
// import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import { CustomEventPage } from '../pages/CustomEvent.page';
import { GoalConversionsPage } from '../pages/GoalConversions.page';
import { ECommercePage } from '../pages/ECommercePage';

export const FEATURES = [
  { id: 1, name: 'Content Tracking', component: CustomEventPage, url: '/feature/content-tracking', description: 'Let’s talk about a scenario in which simple page view tracking is not enough.', icon: SourceIcon },
  // { id: 2, name: 'Cookie Management', component: CustomEventPage, url: '/feature/cookie-management', description: '', icon: CookieIcon },
  // { id: 3, name: 'Custom Dimensions', component: CustomEventPage, url: '/feature/custom-dimensions', description: '', icon: DashboardCustomizeIcon },
  { id: 4, name: 'Custom Events', component: CustomEventPage, url: '/feature/custom-events', description: 'Custom events enable tracking visitor actions that are not predefined in the existing JavaScript Tracking Client API.', icon: EmojiEventsIcon },
  { id: 5, name: 'Download and outlink', component: CustomEventPage, url: '/feature/download-and-outlink', description: 'Download and outlinks are links on your site that point to content that normally can’t be tracked (e.g. non-HTML files - downloads or pages outside your domain - outlinks).', icon: CloudDownloadIcon },
  { id: 6, name: 'eCommerce', component: ECommercePage, url: '/feature/e-commerce', description: 'JavaScript API supports 3 types of e-commerce interactions: Category and product views, Cart updates and Orders.', icon: ShoppingCartIcon },
  { id: 7, name: 'Goal Conversions', component: GoalConversionsPage, url: '/feature/goal-conversions', description: 'At this point we have tracked many different types of events.', icon: SportsSoccerIcon },
  { id: 8, name: 'Page Views', component: CustomEventPage, url: '/feature/page-views', description: 'Page view is the most basic type of the tracked event. It represents a single page viewing action.', icon: VisibilityIcon },
  { id: 9, name: 'Site Search', component: CustomEventPage, url: '/feature/site-search', description: 'Site search tracking gives you insight into how visitors interact with the search engine on your website - what they search for and how many results they get back.', icon: SearchIcon },
  { id: 10, name: 'User Management', component: CustomEventPage, url: '/feature/user-management', description: 'User ID is an additional parameter that allows you to aggregate data.', icon: PeopleIcon },
]
