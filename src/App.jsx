import './assets/css/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// imported pages
import Status from './pages/Status'
import Diagnostics from './pages/Diagnostics';
import Settings from './pages/Settings';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Status />}></Route>
          <Route path='/diagnostics' element={<Diagnostics />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
