import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import RMAList from './pages/RMAList'
import ServiceOrders from './pages/ServiceOrders'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="rmas" element={<RMAList />} />
          <Route path="service-orders" element={<ServiceOrders />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App