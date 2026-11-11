import { AppProvider, useApp } from './context/AppContext'
import ProfileSelection from './pages/ProfileSelection'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UploadBill from './pages/UploadBill'
import BillManagement from './pages/BillManagement'
import BillDetailNIT from './pages/BillDetailNIT'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Profile from './pages/Profile'

function AppContent() {
  const { currentPage } = useApp()

  const renderPage = () => {
    switch (currentPage) {
      case 'profile-selection':
        return <ProfileSelection />
      case 'login':
        return <Login />
      case 'dashboard':
        return <Dashboard />
      case 'upload':
        return <UploadBill />
      case 'bill-management':
        return <BillManagement />
      case 'bill-detail-nit':
        return <BillDetailNIT />
      case 'checkout':
        return <Checkout />
      case 'success':
        return <Success />
      case 'profile':
        return <Profile />
      default:
        return <ProfileSelection />
    }
  }

  return (
    <div className="app-frame">
      {renderPage()}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
