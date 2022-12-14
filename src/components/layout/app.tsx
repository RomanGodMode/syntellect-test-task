import s from './app.module.scss'
import React from 'react'
import { useAppRoutes } from '../../app-routes'
import { Header } from './header/header'

function App() {
  const routes = useAppRoutes()

  return <div>
    <Header/>
    <main className={s.container}>
      {routes}
    </main>
  </div>
}

export default App
