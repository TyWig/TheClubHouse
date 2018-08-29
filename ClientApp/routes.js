import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'
import LoginComponent from 'components/login'

export const routes = [
  { path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
  { path: '/login', component: LoginComponent, display: 'Login', style: 'glyphicon glyphicon-home' },
  { path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
  { path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' }
]

export const authenticatedRoutes = [
  { path: '/events', display: 'Events', style: 'glyphicon glyphicon-home' }
]
