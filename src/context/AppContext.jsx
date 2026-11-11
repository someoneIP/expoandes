import { createContext, useContext, useState, useCallback } from 'react'
import { userNatural, userJuridica, pendingBills, pendingBillsNIT, paidBills } from '../data/mockData'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  // Navigation
  const [currentPage, setCurrentPage] = useState('profile-selection')
  // Auth
  const [profileType, setProfileType] = useState(null) // 'natural' | 'juridica'
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // Navigation history for back button
  const [navHistory, setNavHistory] = useState([])

  const navigate = useCallback((page, options = {}) => {
    setCurrentPage(prev => {
      if (!options.replace) {
        setNavHistory(h => [...h, prev])
      }
      return page
    })
  }, [])

  const goBack = useCallback(() => {
    setNavHistory(h => {
      if (h.length === 0) {
        setCurrentPage('dashboard')
        return h
      }
      const newHistory = [...h]
      const prev = newHistory.pop()
      setCurrentPage(prev)
      return newHistory
    })
  }, [])

  const selectProfile = useCallback((type) => {
    setProfileType(type)
    navigate('login', { replace: true })
  }, [navigate])

  const login = useCallback(() => {
    setIsAuthenticated(true)
    setUser(profileType === 'natural' ? userNatural : userJuridica)
    navigate('dashboard', { replace: true })
  }, [profileType, navigate])

  const logout = useCallback(() => {
    setIsAuthenticated(false)
    setUser(null)
    setProfileType(null)
    setNavHistory([])
    navigate('profile-selection', { replace: true })
  }, [navigate])

  const switchProfile = useCallback(() => {
    const newType = profileType === 'natural' ? 'juridica' : 'natural'
    setProfileType(newType)
    setUser(newType === 'natural' ? userNatural : userJuridica)
    navigate('dashboard', { replace: true })
  }, [profileType, navigate])

  // Get bills based on profile
  const getPendingBills = useCallback(() => {
    if (profileType === 'juridica') {
      return [...pendingBills.slice(0, 2), ...pendingBillsNIT]
    }
    return pendingBills
  }, [profileType])

  const getPendingTotal = useCallback(() => {
    const bills = getPendingBills()
    return bills.reduce((sum, b) => sum + (b.totalNeto || b.amount), 0)
  }, [getPendingBills])

  const value = {
    currentPage,
    navigate,
    goBack,
    navHistory,
    profileType,
    selectProfile,
    isAuthenticated,
    user,
    login,
    logout,
    switchProfile,
    getPendingBills,
    getPendingTotal,
    paidBills,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
