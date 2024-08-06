import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import NextHomePage from './Pages/NextHomePage/NextHomePage'
import GetStarted from './Pages/GetStarted/GetStarted'
import SignUp from './Pages/SignUp/SignUp'
import Otp from './Pages/OTP/Otp'
import Bvn from './Pages/Bvn/Bvn'
import SignIn from './Pages/SignIn/SignIn'
import Reset from './Pages/Reset/Reset'
import Verification from './Pages/Verification/Verification'
import AppRouteWrapper from './Wrapper/AppRouteWrapper/AppRouteWrapper'
import AppHomePage from './Pages/HomeActive/AppHomePage/AppHomePage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/next' element={<NextHomePage />} />
        <Route path='/getStarted' element={<GetStarted />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/bvn' element={<Bvn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/verification' element={<Verification />} />

        <Route path='/app' element={<AppRouteWrapper />}>
        <Route index element={<AppHomePage />} />



          
        </Route>
      </Routes >



    </>
  )
}

export default App
