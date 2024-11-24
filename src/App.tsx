import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/Login'
import AddContent from './components/AddContent'
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// const queryClient = new QueryClient()

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
