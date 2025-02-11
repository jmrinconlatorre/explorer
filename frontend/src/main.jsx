import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Balance } from './Balance'
import { Bloque } from './Bloque'
import { Tx } from './Tx'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='balance/:balance' element={<Balance />}></Route>
          <Route path='tx/:tx' element={<Tx />}></Route>
          <Route path='bloque/:bloque' element={<Bloque />}></Route>
          <Route path='noencontrada' element={<h2>El dato no se puede procesar</h2>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>

)
