import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RequestLink from './pages/RequestLink'
import VerifyLink from './pages/VerifyLink'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<RequestLink />} />
                <Route path='/verify-link' element={<VerifyLink />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App