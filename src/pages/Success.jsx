// ============================================================
// Pantalla 8: Comprobante Exitoso
// Transacción aprobada + PDF + WhatsApp
// ============================================================

import StatusBar from '../components/StatusBar'
import InfinityLogo from '../components/InfinityLogo'
import { useApp } from '../context/AppContext'
import { formatCOP } from '../data/mockData'

export default function Success() {
  const { profileType, getPendingBills, getPendingTotal, navigate } = useApp()
  const bills = getPendingBills()
  const total = getPendingTotal()
  const cus = '983210491823'
  const bank = profileType === 'juridica' ? 'PSE Empresarial' : 'PSE - Bancolombia'

  const billNames = bills.map(b => b.provider.split(' ').slice(0, 2).join(' ')).join(' + ')

  const handleHome = () => {
    navigate('dashboard', { replace: true })
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <div className="flex justify-center mt-6 mb-4">
        <InfinityLogo size={40} />
      </div>

      <div className="flex-1 flex flex-col items-center px-6 py-4">
        {/* Check animado */}
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-pop-in">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Texto */}
        <div className="text-center mb-8 animate-fade-in">
          <p className="text-sm font-semibold text-green-600 mb-1">✓ Exitoso</p>
          <h1 className="text-2xl font-bold text-navy mb-1">¡Transacción Aprobada! 🎉</h1>
        </div>

        {/* Detalle */}
        <div className="w-full bg-white rounded-2xl p-5 shadow-sm space-y-3 animate-slide-up">
          <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-sm text-gray-400">CUS</span>
            <span className="text-sm font-mono font-semibold text-navy">{cus}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-100">
            <span className="text-sm text-gray-400">Banco</span>
            <span className="text-sm font-semibold text-navy">{bank}</span>
          </div>
          <div className="pb-3 border-b border-gray-100">
            <span className="text-sm text-gray-400 block mb-1">Detalle del pago</span>
            <span className="text-sm font-semibold text-navy">{billNames}</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-sm font-bold text-navy">Monto Total</span>
            <span className="text-lg font-bold text-navy">{formatCOP(total)}</span>
          </div>
        </div>

        {/* Acciones */}
        <div className="w-full grid grid-cols-2 gap-3 mt-6">
          <button className="flex items-center justify-center gap-2 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-navy-200 transition-colors active:scale-98">
            <span className="text-lg">📄</span>
            <span className="text-sm font-medium text-navy">Ver PDF</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-green-200 transition-colors active:scale-98">
            <span className="text-lg">📲</span>
            <span className="text-sm font-medium text-navy">WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Botón fijo */}
      <div className="px-6 pb-8 pt-2">
        <button
          onClick={handleHome}
          className="w-full bg-navy text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-navy-600 transition-colors active:scale-98"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  )
}
