import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebSite from '../layouts/WebSite'
import RequestLink from '../pages/auth/RequestLink'
import VerifyLink from '../pages/auth/VerifyLink'
import DefultError from '../component/Errors/DefultError'
import Guest from '../pages/auth/Guest'
import Dashboard from '../layouts/Dashboard'
import DashError from '../component/Errors/DashError'
import PrivateRoute from './PrivateRoute'
import DashHome from '../pages/dashboard/DashHome'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />} >
                    <Route path='*' element={<DefultError />} />
                    <Route index element={<RequestLink />} />
                    <Route path='/verify-link' element={<VerifyLink /> } />
                    <Route path='/guest' element={<Guest /> } />

                </Route>

                <Route path='/dashboard/' element={<PrivateRoute roles={['super_admin', 'system_admin', 'member']} ><Dashboard /></PrivateRoute>}>
                    <Route path='*' element={<PrivateRoute roles={['super_admin', 'system_admin', 'member']} ><DashError /></PrivateRoute>} />
                
                    <Route index element={<PrivateRoute roles={['super_admin', 'system_admin', 'member']} ><DashHome /></PrivateRoute> } />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default App
