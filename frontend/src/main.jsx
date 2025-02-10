import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Balance } from './Balance'
import { Bloque } from './Bloque'
import { Tx } from './Tx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='balance' element={<Balance />}></Route>
        <Route path='tx' element={<Tx />}></Route>
        <Route path='bloque' element={<Bloque />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
