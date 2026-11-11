// ============================================================
// Pantalla 9: Perfil y Ajustes
// Inmuebles/Sedes, métodos de pago, conmutador de perfil
// ============================================================

import StatusBar from '../components/StatusBar'
import InfinityLogo from '../components/InfinityLogo'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'

export default function Profile() {
  const { user, profileType, switchProfile, logout } = useApp()

  if (!user) return null

  const isNatural = profileType === 'natural'
  const propertiesLabel = isNatural ? 'Mis Inmuebles Registrados' : 'Mis Sedes Registradas'
  const properties = isNatural ? user.properties : user.sedes

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Header Navy */}
      <div className="bg-navy text-white sticky top-0 z-50">
        <StatusBar dark />
        <div className="flex items-center justify-between px-4 py-2 pb-4">
          <div className="bg-white rounded-lg px-3 py-1.5">
            <InfinityLogo size={28} />
          </div>
        </div>
      </div>

      <div className="flex-1 px-5 py-5 overflow-y-auto">
        {/* User card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-full bg-navy-50 flex items-center justify-center text-2xl">👤</div>
            <div className="flex-1">
              <h2 className="font-bold text-navy text-lg">{user.name}</h2>
              <p className="text-sm text-gray-400">
                {user.documentType}: {user.document} • {isNatural ? 'Natural' : 'NIT'}
              </p>
            </div>
          </div>

          {/* Switch de perfil */}
          <div className="flex items-center justify-between bg-surface rounded-xl p-3">
            <div>
              <p className="text-sm font-semibold text-navy">Cambiar a Perfil NIT</p>
              <p className="text-xs text-gray-400">Conmutador rápido de perfil</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={!isNatural}
                onChange={switchProfile}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        {/* Inmuebles / Sedes */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">📍</span>
            <h3 className="text-sm font-bold text-navy">{propertiesLabel}</h3>
          </div>
          <div className="space-y-2.5">
            {properties.map((p, idx) => (
              <div key={p.id} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
                  <span className="text-sm text-gray-600">{p.name}</span>
                </div>
                <span className="text-xs text-gray-400 bg-surface px-2 py-0.5 rounded-full">
                  {p.billCount} Factura{p.billCount !== 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Métodos de Pago */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">💳</span>
            <h3 className="text-sm font-bold text-navy">Métodos de Pago Guardados</h3>
          </div>
          <div className="space-y-2.5">
            {user.paymentMethods.map((pm, idx) => (
              <div key={pm.id} className="flex items-center gap-3 py-1">
                <span className="text-lg">{pm.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy">{pm.type}</p>
                  <p className="text-xs text-gray-400">{pm.detail}</p>
                </div>
              </div>
            ))}
            <button className="w-full mt-2 flex items-center justify-center gap-2 py-2 text-sm font-medium text-orange border-2 border-dashed border-orange-200 rounded-xl hover:bg-orange-50 transition-colors">
              + Agregar método de pago
            </button>
          </div>
        </div>

        {/* Cerrar Sesión */}
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-white rounded-2xl border-2 border-red-100 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors active:scale-98 mt-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Cerrar Sesión
        </button>
      </div>

      <BottomNav active="perfil" />
    </div>
  )
}
