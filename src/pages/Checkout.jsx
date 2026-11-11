// ============================================================
// Pantalla 7: Checkout / Pasarela de Pago
// PSE, Nequi, Daviplata, Tarjeta de Crédito
// ============================================================

import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import { useApp } from '../context/AppContext'
import { formatCOP, banks } from '../data/mockData'

export default function Checkout() {
  const { getPendingBills, getPendingTotal, navigate, goBack } = useApp()
  const total = getPendingTotal()
  const bills = getPendingBills()

  const [method, setMethod] = useState('pse')
  const [selectedBank, setSelectedBank] = useState('')

  const handlePay = () => {
    navigate('success')
  }

  const methods = [
    { id: 'pse', label: 'PSE - Débito Bancario', desc: 'Bancolombia, Davivienda, Bogotá', icon: '🏦' },
    { id: 'nequi', label: 'Nequi / Daviplata', desc: 'Notificación push directa al celular', icon: '📱' },
    { id: 'card', label: 'Tarjeta de Crédito', desc: 'Visa, Mastercard, Amex', icon: '💳' },
  ]

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <Header showBack onBack={goBack} />

      <div className="flex-1 px-5 py-4 overflow-y-auto">
        {/* Badge seguro */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg">🔒</span>
          <span className="text-sm font-semibold text-navy">Pago Seguro</span>
        </div>

        {/* Total */}
        <div className="bg-navy rounded-2xl p-6 text-center mb-5 animate-slide-up">
          <p className="text-white/60 text-sm mb-1">Total a autorizar</p>
          <p className="text-3xl font-bold text-white">{formatCOP(total)}</p>
          <p className="text-white/40 text-xs mt-1">{bills.length} factura(s) incluida(s)</p>
        </div>

        {/* Resumen facturas */}
        <div className="bg-white rounded-2xl p-4 mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Detalle del pago</p>
          {bills.map(bill => (
            <div key={bill.id} className="flex justify-between items-center py-1.5">
              <span className="text-sm text-gray-600">{bill.icon} {bill.provider}</span>
              <span className="text-sm font-medium text-navy">{formatCOP(bill.totalNeto || bill.amount)}</span>
            </div>
          ))}
        </div>

        {/* Métodos de pago */}
        <p className="text-sm font-semibold text-navy mb-3 px-1">Selecciona tu medio de pago</p>
        <div className="space-y-3 mb-4">
          {methods.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all active:scale-98 animate-slide-up text-left ${
                method === m.id ? 'border-orange bg-orange-50' : 'border-gray-200 bg-white'
              }`}
              style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-2xl flex-shrink-0">
                {m.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-navy text-sm">{m.label}</h3>
                <p className="text-xs text-gray-400">{m.desc}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                method === m.id ? 'border-orange bg-orange' : 'border-gray-300'
              }`}>
                {method === m.id && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Banco selector si PSE */}
        {method === 'pse' && (
          <div className="mb-4 animate-fade-in">
            <label className="block text-sm font-semibold text-navy mb-1.5">Selecciona tu banco</label>
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full px-4 py-3 bg-white rounded-xl border-2 border-gray-200 focus:border-navy focus:outline-none text-sm text-navy"
            >
              <option value="">Tu banco...</option>
              {banks.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Botón fijo */}
      <div className="px-5 pb-5 pt-2 bg-surface">
        <button
          onClick={handlePay}
          className="w-full bg-orange text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-orange-600 transition-colors active:scale-98"
        >
          {method === 'pse' && `Pagar con PSE Ahora`}
          {method === 'nequi' && `Pagar con Nequi`}
          {method === 'card' && `Pagar con Tarjeta`}
        </button>
      </div>
    </div>
  )
}
