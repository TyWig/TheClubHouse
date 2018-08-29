import HomePage from 'components/home-page'
import LoginComponent from 'components/login'
import EventsPage from 'components/events-page'

export const routes = [
  { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
  { path: '/login', component: LoginComponent, display: 'Login', style: 'glyphicon glyphicon-home' },
  { path: '/events', component: EventsPage, display: 'Events', style: 'fa fa=' },
]

export const authenticatedRoutes = [
  { path: '/events', display: 'Events', style: 'glyphicon glyphicon-home' }
]
