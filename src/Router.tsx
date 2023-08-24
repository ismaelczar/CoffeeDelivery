import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layout/DefaultLayout'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Finished } from './pages/Finished'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/Checkout' element={<Checkout />} />
                <Route path='/Finished' element={<Finished />} />
            </Route>
        </Routes>
    )
}