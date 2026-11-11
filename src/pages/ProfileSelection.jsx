// ============================================================
// Pantalla 1: Selección de Perfil
// Persona Natural vs Persona Jurídica (NIT)
// ============================================================

import StatusBar from '../components/StatusBar'
import InfinityLogo from '../components/InfinityLogo'
import { useApp } from '../context/AppContext'

export default function ProfileSelection() {
  const { selectProfile } = useApp()

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <div className="flex-1 flex flex-col px-6">
        {/* Logo centrado */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="bg-white rounded-2xl shadow-lg px-6 py-4">
            <InfinityLogo size={64} />
          </div>
        </div>

        {/* Bienvenida */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-navy mb-2">Bienvenido a Paga Fast</h1>
          <p className="text-gray-500 text-sm">¿Cómo deseas ingresar hoy?</p>
        </div>

        {/* Tarjeta Persona Natural */}
        <button
          onClick={() => selectProfile('natural')}
          className="bg-white rounded-2xl p-5 shadow-sm border-2 border-transparent hover:border-orange-200 transition-all active:scale-98 mb-4 text-left animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-3xl flex-shrink-0">
              👤
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-navy text-lg mb-1">Persona Natural</h2>
              <p className="text-gray-500 text-sm leading-snug">
                Paga facturas del hogar, SOAT y servicios personales.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-orange">Continuar con Cédula</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Tarjeta Persona Jurídica */}
        <button
          onClick={() => selectProfile('juridica')}
          className="bg-white rounded-2xl p-5 shadow-sm border-2 border-transparent hover:border-navy-200 transition-all active:scale-98 text-left animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-navy-50 flex items-center justify-center text-3xl flex-shrink-0">
              🏢
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-navy text-lg mb-1">Persona Jurídica (NIT)</h2>
              <p className="text-gray-500 text-sm leading-snug">
                Gestiona facturación empresarial, retenciones y sedes.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-navy">Continuar con NIT</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E2A4E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Bandera Colombia */}
        <div className="mt-auto pb-6 pt-8 flex items-center justify-center gap-2">
          <span className="text-2xl">🇨🇴</span>
          <span className="text-sm text-gray-400 font-medium">Colombia</span>
        </div>
      </div>
    </div>
  )
}
