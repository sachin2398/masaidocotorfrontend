import logo from './logo.svg';
import './App.css';
// import LoginForm from './conponenet/loginform/LoginForm';
// import SignUp from './conponenet/loginform/SignUp';
import AllRoutes from './routes/AllRoutes';
import OnboardDoctor from './Pages/OnboardDoctor';
import DoctorDashboard from './Pages/DoctorDashboard';

function App() {
  return (
    <div>
      {/* <AllRoutes/> */}
     {/* <LoginForm/> */}
     {/* <SignUp/> */}
  <OnboardDoctor/>
  <DoctorDashboard/>
    </div>
  );
}

export default App;
