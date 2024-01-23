import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import LoginForm from '../conponenet/loginform/LoginForm'
// import SignUp from '../conponenet/loginform/SignUp'
// import Private from './PrivateRoute/Private'
// import MainPage from '../Pages/MainPage'
import DoctorDashboard from '../Pages/DoctorDashboard'
import OnboardDoctor from '../Pages/OnboardDoctor'
export default function 
() {
  return (
    <div>
        <Routes>
            {/* <Route path='/' element={<LoginForm/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/main' element={<Private><MainPage/></Private>}></Route> */}
            <Route path='/DoctorDashboard' element={<DoctorDashboard/>}></Route>
            <Route path='/OnboardDoctor' element={<OnboardDoctor/>}></Route>
        </Routes>
    </div>
  )
}
