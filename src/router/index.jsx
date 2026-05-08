import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import RequestLink from '../pages/RequestLink'
import VerifyLink from '../pages/VerifyLink'
import DefultError from '../component/Errors/DefultError'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route path='*' element={<DefultError />} />
                    <Route index element={<RequestLink />} />
                    <Route path='/verify-link' element={<VerifyLink /> } />

                </Route>

                {/* <Route path='/dashboard/' element={<PrivateRoute roles={['super_admin', 'system_admin', 'user']} ><Dashboard /></PrivateRoute>}>
                    <Route path='*' element={<PrivateRoute roles={['super_admin', 'system_admin', 'user']} ><DashError /></PrivateRoute>} />
                </Route> */}


            </Routes>
        </BrowserRouter>
    )
}

export default App
