// ============================================================
// Pantalla 5: Gestión de Facturas
// Pestañas: Pendientes / Histórico Pagadas + Búsqueda
// ============================================================

import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'
import { formatCOP, paidBills as paidData } from '../data/mockData'

export default function BillManagement() {
  const { getPendingBills, navigate, goBack } = useApp()
  const [tab, setTab] = useState('pendientes')
  const [search, setSearch] = useState('')

  const pending = getPendingBills()
  const paid = paidData

  const filteredPending = pending.filter(b =>
    !search || b.provider.toLowerCase().includes(search.toLowerCase()) ||
    (b.property && b.property.toLowerCase().includes(search.toLowerCase()))
  )
  const filteredPaid = paid.filter(b =>
    !search || b.provider.toLowerCase().includes(search.toLowerCase()) ||
    (b.property && b.property.toLowerCase().includes(search.toLowerCase()))
  )

  const handlePay = (billId, isNIT) => {
    if (isNIT) {
      navigate('bill-detail-nit')
    } else {
      navigate('checkout')
    }
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <Header showBack onBack={goBack} />

      <div className="flex-1 px-4 pt-2 pb-4">
        <h1 className="text-xl font-bold text-navy mb-1 px-1">Mis Facturas</h1>
        {pending.length > 0 && (
          <div className="flex items-center gap-2 mb-4 px-1">
            <span className="bg-orange-50 text-orange text-xs font-bold px-2 py-0.5 rounded-full">
              {pending.length} Nuevas
            </span>
          </div>
        )}

        {/* Tabs */}
        <div className="flex bg-white rounded-xl p-1 mb-4 shadow-sm">
          <button
            onClick={() => setTab('pendientes')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors ${
              tab === 'pendientes' ? 'bg-orange text-white' : 'text-gray-400'
            }`}
          >
            Pendientes ({filteredPending.length})
          </button>
          <button
            onClick={() => setTab('pagadas')}
            className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors ${
              tab === 'pagadas' ? 'bg-navy text-white' : 'text-gray-400'
            }`}
          >
            Pagadas ({filteredPaid.length})
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por convenio o inmueble..."
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border-2 border-gray-200 focus:border-navy focus:outline-none text-sm text-navy placeholder-gray-300"
          />
        </div>

        {/* Lista Pendientes */}
        {tab === 'pendientes' && (
          <div className="space-y-3">
            {filteredPending.length === 0 ? (
              <div className="text-center py-16 text-gray-300">
                <p className="text-4xl mb-2">📭</p>
                <p className="text-sm font-medium">No hay facturas pendientes</p>
              </div>
            ) : (
              filteredPending.map((bill, idx) => (
                <div
                  key={bill.id}
                  onClick={() => handlePay(bill.id, bill.nit != null)}
                  className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 cursor-pointer hover:shadow-md transition-all animate-slide-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-xl flex-shrink-0">
                    {bill.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-navy text-sm truncate">{bill.provider}</h3>
                    {bill.property && <p className="text-xs text-gray-400">{bill.property} • Vence {bill.dueDate}</p>}
                    {!bill.property && <p className="text-xs text-gray-400">Vence {bill.dueDate}</p>}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-navy text-sm">{formatCOP(bill.totalNeto || bill.amount)}</p>
                    <span className="text-xs text-orange font-medium">Por Pagar</span>
                  </div>
                </div>
              ))
            )}
            {filteredPending.length > 0 && (
              <button className="w-full flex items-center justify-center gap-2 py-3 mt-2 text-sm font-semibold text-navy bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-navy-200 transition-colors">
                📥 Descargar Paz y Salvos (ZIP)
              </button>
            )}
          </div>
        )}

        {/* Lista Pagadas */}
        {tab === 'pagadas' && (
          <div className="space-y-3">
            {filteredPaid.length === 0 ? (
              <div className="text-center py-16 text-gray-300">
                <p className="text-4xl mb-2">📭</p>
                <p className="text-sm font-medium">No hay facturas pagadas</p>
              </div>
            ) : (
              filteredPaid.map((bill, idx) => (
                <div
                  key={bill.id}
                  className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-xl flex-shrink-0 opacity-70">
                    {bill.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-600 text-sm truncate">{bill.provider}</h3>
                    <p className="text-xs text-gray-400">Pagado el {bill.paidDate}</p>
                    <p className="text-xs text-gray-300">{bill.method}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-gray-600 text-sm">{formatCOP(bill.amount)}</p>
                    <span className="text-xs text-green-600 font-medium flex items-center justify-end gap-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Pagada
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <BottomNav active="facturas" />
    </div>
  )
}
