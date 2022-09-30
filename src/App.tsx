import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateEvent from './pages/CreateEvent'
import Event from './pages/Event'
import NotFound from './pages/NotFound'
import Container from './components/Container'
import { Provider } from 'react-redux'
import { store } from './store/app'

type AppRoute = {
  name: string;
  path: string;
  component: JSX.Element;
};

const routes: AppRoute[] = [
  { name: 'index', path: '/', component: <Home /> },
  { name: 'createEvent', path: '/create', component: <CreateEvent /> },
  { name: 'event', path: '/event', component: <Event /> },
  { name: 'notFound', path: '/404', component: <NotFound /> }
]

const renderRoutes = () => {
  return routes.map(({ name, path, component }) => (
    <Route
      key={name}
      path={path}
      element={component}
    />
  ))
}

function App () {
  return (
    <Provider store={store}>
      <Container>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App
