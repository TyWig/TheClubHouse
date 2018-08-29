import HomePage from 'components/home-page'
import LoginComponent from 'components/login'
import EventsPage from 'components/events-page'
import RegistrationPage from 'components/registration'

export const routes = [
  { path: '/', component: HomePage, display: 'Home', style: 'fa fa-thumbs-up' },
  { path: '/login', component: LoginComponent, display: 'Login', style: 'fa fa-thumbs-up' },
  { path: '/events', component: EventsPage, display: 'Events', style: 'fa fa-thumbs-up' },
  { path: '/register', component: RegistrationPage, display: 'Register', style: 'fa fa-thumbs-up' }
]

export const authenticatedRoutes = [
  { path: '/events', display: 'Events', style: 'glyphicon glyphicon-home' }
]
