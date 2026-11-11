// ============================================================
// Pantalla 3: Dashboard / Inicio
// Resumen de facturas pendientes + "Pagar Todo"
// ============================================================

import StatusBar from '../components/StatusBar'
import InfinityLogo from '../components/InfinityLogo'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'
import { formatCOP } from '../data/mockData'

export default function Dashboard() {
  const { profileType, navigate, getPendingBills, getPendingTotal } = useApp()
  const bills = getPendingBills()
  const total = getPendingTotal()

  const handlePayAll = () => {
    navigate('checkout')
  }

  const handlePayBill = (billId) => {
    navigate('checkout')
  }

  const profileLabel = profileType === 'juridica' ? 'NIT Empresas' : 'Natural'

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Header Navy */}
      <div className="bg-navy text-white sticky top-0 z-50">
        <StatusBar dark />
        <div className="flex items-center justify-between px-4 py-2 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium bg-white/15 px-3 py-1 rounded-full">{profileLabel}</span>
          </div>
          <div className="bg-white rounded-lg px-3 py-1.5">
            <InfinityLogo size={28} />
          </div>
        </div>

        {/* Total + Pagar Todo */}
        <div className="px-6 pb-6">
          <p className="text-white/60 text-sm mb-1">Total Pendiente ({bills.length} Facturas)</p>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold">{formatCOP(total)}</span>
          </div>
          <button
            onClick={handlePayAll}
            className="w-full bg-orange text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors active:scale-98"
          >
            <span className="text-lg">⚡</span>
            Pagar Todo (PSE / Nequi)
          </button>
        </div>
      </div>

      {/* Lista de Facturas */}
      <div className="flex-1 px-4 py-5">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 px-2">Próximos Vencimientos</h2>
        <div className="space-y-3">
          {bills.map((bill, idx) => (
            <div
              key={bill.id}
              onClick={() => handlePayBill(bill.id)}
              className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 cursor-pointer hover:shadow-md transition-all animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-2xl flex-shrink-0">
                {bill.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-navy text-sm truncate">{bill.provider}</h3>
                {bill.property && <p className="text-xs text-gray-400">{bill.property}</p>}
                <p className="text-xs text-gray-400">Vence: {bill.dueDate}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-navy text-sm">{formatCOP(bill.totalNeto || bill.amount)}</p>
                <span className="text-xs text-orange font-medium">Pendiente</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="dashboard" />
    </div>
  )
}
