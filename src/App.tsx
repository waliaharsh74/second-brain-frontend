import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/Login'
import AddContent from './components/AddContent'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/add-content' element={<AddContent />} />
      </Routes>

    </BrowserRouter >
  )
}

export default App
