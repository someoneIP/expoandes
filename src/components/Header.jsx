// ============================================================
// Header con isotipo de infinito (sin texto "Paga Fast")
// Azul Navy de fondo, isotipo centrado
// ============================================================

import InfinityLogo from './InfinityLogo'

export default function Header({ showBack = false, onBack = null, dark = false }) {
  const bgClass = dark ? 'bg-navy' : 'bg-white'
  const logoContainer = dark ? 'bg-white rounded-xl px-3 py-1.5' : ''

  return (
    <div className={`${bgClass} sticky top-0 z-50`}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="w-10 flex items-center">
          {showBack && (
            <button
              onClick={onBack}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
              aria-label="Volver"
            >
              {dark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E2A4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              )}
            </button>
          )}
        </div>
        <div className={logoContainer}>
          <InfinityLogo size={36} />
        </div>
        <div className="w-10"></div>
      </div>
    </div>
  )
}
