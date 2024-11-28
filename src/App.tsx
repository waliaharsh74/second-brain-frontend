import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/Login'
import AddContent from './components/AddContent'
import SignUpForm from './components/Signup'
import PrivateRoute from './utils/PrivateRoute'
function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/' element={<PrivateRoute element={<Home />} />} />
        <Route path='/add-content' element={<PrivateRoute element={<AddContent />} />} />

      </Routes>

    </BrowserRouter >
  )
}

export default App
