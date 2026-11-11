// ============================================================
// Pantalla 2: Iniciar Sesión / Registro
// Cédula/NIT + Contraseña/PIN, Biometría, SMS OTP
// ============================================================

import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import InfinityLogo from '../components/InfinityLogo'
import { useApp } from '../context/AppContext'

export default function Login() {
  const { profileType, login, goBack } = useApp()
  const [document, setDocument] = useState('')
  const [pin, setPin] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  const docLabel = profileType === 'juridica' ? 'NIT o Cédula del Representante' : 'Número de Cédula'
  const docPlaceholder = profileType === 'juridica' ? '800.123.456-7' : '1.018.492.019'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!document.trim()) {
      setError('Ingresa tu número de documento')
      return
    }
    if (!pin || pin.length < 4) {
      setError('El PIN debe tener al menos 4 dígitos')
      return
    }
    setError('')
    login()
  }

  const handleBiometric = () => {
    login()
  }

  const handleSMS = () => {
    login()
  }

  const formatDoc = (val) => {
    const clean = val.replace(/[^\d]/g, '')
    if (clean.length <= 3) return clean
    if (clean.length <= 6) return `${clean.slice(0, 3)}.${clean.slice(3)}`
    if (clean.length <= 9) return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6)}`
    return `${clean.slice(0, 3)}.${clean.slice(3, 6)}.${clean.slice(6, 9)}-${clean.slice(9)}`
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <InfinityLogoBg />

      <div className="flex-1 flex flex-col px-6">
        {/* Back */}
        <button onClick={goBack} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-navy-50 transition-colors mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E2A4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Title */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-2xl font-bold text-navy mb-1">Acceso Seguro</h1>
          <p className="text-gray-500 text-sm">Ingresa a tu cuenta</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {/* Documento */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">{docLabel}</label>
            <input
              type="text"
              inputMode="numeric"
              value={document}
              onChange={(e) => setDocument(formatDoc(e.target.value))}
              placeholder={docPlaceholder}
              className="w-full px-4 py-3 bg-white rounded-xl border-2 border-gray-200 focus:border-navy focus:outline-none text-navy font-medium placeholder-gray-300 transition-colors"
            />
          </div>

          {/* Contraseña / PIN */}
          <div>
            <label className="block text-sm font-semibold text-navy mb-1.5">Contraseña o PIN</label>
            <div className="relative">
              <input
                type="password"
                inputMode="numeric"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/[^\d*]/g, '').slice(0, 8))}
                placeholder="••••"
                className="w-full px-4 py-3 bg-white rounded-xl border-2 border-gray-200 focus:border-navy focus:outline-none text-navy font-medium placeholder-gray-300 transition-colors"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 accent-navy"
              />
              <span className="text-sm text-gray-500">Recordarme</span>
            </label>
            <button type="button" className="text-sm text-orange font-medium">
              ¿Olvidaste tu clave?
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-2.5 rounded-xl flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-orange-600 transition-colors active:scale-98"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">O ingresa con</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Biometric / SMS */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={handleBiometric}
            className="flex flex-col items-center gap-2 py-4 bg-white rounded-xl border-2 border-gray-200 hover:border-navy-200 transition-colors active:scale-98"
          >
            <span className="text-2xl">👆</span>
            <span className="text-xs font-medium text-navy">Face ID / Huella</span>
          </button>
          <button
            onClick={handleSMS}
            className="flex flex-col items-center gap-2 py-4 bg-white rounded-xl border-2 border-gray-200 hover:border-navy-200 transition-colors active:scale-98"
          >
            <span className="text-2xl">📲</span>
            <span className="text-xs font-medium text-navy">Código SMS</span>
          </button>
        </div>

        {/* Register */}
        <div className="text-center pb-6">
          <span className="text-sm text-gray-500">¿No tienes cuenta? </span>
          <button className="text-sm text-orange font-semibold">Regístrate aquí</button>
        </div>
      </div>
    </div>
  )
}

// Background decorativo con isotipo
function InfinityLogoBg() {
  return (
    <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
      <div className="flex justify-center mt-4 opacity-10">
        <InfinityLogo size={120} />
      </div>
    </div>
  )
}
