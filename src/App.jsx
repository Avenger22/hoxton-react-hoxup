// #region 'Importing'
import { Routes, Route, Navigate} from 'react-router-dom'

import MainMenu from './Pages/MainMenu'
import Login from './Pages/Login'
// #endregion

export default function App() {

  // #region 'Returning Html'
  return (

      <>

        {
          // #region 'Routes of App'
        }
        <Routes>

          <Route
            index
            element={<Navigate replace to="/login" />}
          />

          <Route 
            path='/main' 
            element = {<MainMenu />}>
          </Route>

          <Route 
            path='/login' 
            element = {<Login />}>
          </Route>

        </Routes>
        {
          //#endregion
        }
  
      </>

  )
  // #region 'Returning Html'

}