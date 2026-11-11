// ============================================================
// Navegación inferior — Inicio, Facturas, Cargar, Perfil
// ============================================================

import { useApp } from '../context/AppContext'

export default function BottomNav({ active = 'dashboard' }) {
  const { navigate } = useApp()

  const items = [
    { id: 'dashboard', label: 'Inicio', icon: HomeIcon, page: 'dashboard' },
    { id: 'facturas', label: 'Facturas', icon: BillsIcon, page: 'bill-management' },
    { id: 'cargar', label: 'Cargar', icon: UploadIcon, page: 'upload' },
    { id: 'perfil', label: 'Perfil', icon: ProfileIcon, page: 'profile' },
  ]

  return (
    <div className="sticky bottom-0 z-50 bg-white border-t border-gray-200 px-2 py-2 flex justify-around items-center">
      {items.map(item => {
        const Icon = item.icon
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            onClick={() => navigate(item.page)}
            className="flex flex-col items-center gap-1 px-3 py-1 transition-colors"
          >
            <Icon active={isActive} />
            <span className={`text-xs font-medium ${isActive ? 'text-orange' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function HomeIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#F26522' : '#94A3B8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z" fill={active ? '#FDF0EB' : 'none'} />
    </svg>
  )
}

function BillsIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#F26522' : '#94A3B8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" fill={active ? '#FDF0EB' : 'none'} />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="12" y2="16" />
    </svg>
  )
}

function UploadIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#F26522' : '#94A3B8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" fill={active ? '#F26522' : 'none'} />
      <line x1="12" y1="8" x2="12" y2="16" stroke={active ? 'white' : '#94A3B8'} />
      <line x1="8" y1="12" x2="16" y2="12" stroke={active ? 'white' : '#94A3B8'} />
    </svg>
  )
}

function ProfileIcon({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? '#F26522' : '#94A3B8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" fill={active ? '#FDF0EB' : 'none'} />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill={active ? '#FDF0EB' : 'none'} />
    </svg>
  )
}
