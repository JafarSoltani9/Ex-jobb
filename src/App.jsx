import './assets/css/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// imported pages
import Status from './pages/Status'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Status />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
