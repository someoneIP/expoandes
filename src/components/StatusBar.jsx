// ============================================================
// Barra de estado simulada (estilo móvil)
// Muestra hora, señal, batería
// ============================================================

export default function StatusBar({ dark = false }) {
  const textColor = dark ? 'text-white' : 'text-navy-900'

  return (
    <div className={`flex items-center justify-between px-6 pt-3 pb-1 ${textColor} text-sm font-semibold select-none`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Signal */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="0.5" fill="currentColor" />
          <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" fill="currentColor" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" fill="currentColor" />
          <rect x="13.5" y="0.5" width="3" height="11.5" rx="0.5" fill="currentColor" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 11 C 5 11, 3 9, 3 6.5 C 3 4, 5 2, 8 2 C 11 2, 13 4, 13 6.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 9 C 7 9, 6 8, 6 7 C 6 6, 7 5, 8 5 C 9 5, 10 6, 10 7 C 10 8, 9 9, 8 9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
        {/* Battery */}
        <div className="flex items-center">
          <div className="w-6 h-3 border-2 border-current rounded-sm relative">
            <div className="absolute inset-0.5 bg-current rounded-sm" style={{ width: '80%' }}></div>
          </div>
          <div className="w-0.5 h-1.5 bg-current ml-0.5 rounded-r-sm"></div>
        </div>
      </div>
    </div>
  )
}
