
// import { Button } from '@mui/material';
import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import NavBar from './components/NavBar'
import useAuth from './hook/UseAuth'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Package from './pages/package/ListPackage';

function App() {
  const [isLogin, token] = useAuth();


  return (
    <>

      {isLogin && token && (<>
        {/* Login Successfully
        <Button variant="contained" onClick={() => logout()}>logout</Button> */}
        <Routes>
          <Route path="/" element={<NavBar />} >
            <Route index path="dashboard" element={<Dashboard />} />
            <Route index path="package" element={<Package />} />
          </Route>
        </Routes >
      </>)}

    </>
  )
}

export default App
