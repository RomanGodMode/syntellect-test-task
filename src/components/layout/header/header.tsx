import s from './header.module.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={s.header}>
      <NavLink className={s.link} to="input-with-buttons">Input with buttons</NavLink>
      <div className={s.divider}/>
      <NavLink className={s.link} to="autocomplete">Autocomplete</NavLink>
    </header>
  )
}
