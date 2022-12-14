import { Navigate, Route, Routes } from 'react-router-dom'
import { AutocompletePage } from './components/pages/autocomplete/autocomplete-page'
import { InputWithButtonsPage } from './components/pages/input-with-buttons/input-with-buttons-page'

export const useAppRoutes = () => {
  return <Routes>
    <Route path="input-with-buttons" element={<InputWithButtonsPage/>}/>
    <Route path="autocomplete" element={<AutocompletePage/>}/>

    <Route path="*" element={<Navigate to="/input-with-buttons"/>}/>
  </Routes>
}
