// ============================================================
// Pantalla 6: Detalle Factura Empresa (NIT)
// Desglose IVA / Retenciones (ReteFuente) + Centro de Costos
// ============================================================

import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import { useApp } from '../context/AppContext'
import { formatCOP, pendingBillsNIT } from '../data/mockData'

export default function BillDetailNIT() {
  const { navigate, goBack } = useApp()
  const bill = pendingBillsNIT[0]

  const handleApprove = () => {
    navigate('checkout')
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <Header showBack onBack={goBack} />

      <div className="flex-1 px-5 py-4 overflow-y-auto">
        {/* Badge NIT */}
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">NIT Empresas</span>
        </div>

        {/* Proveedor */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">{bill.icon}</div>
            <div>
              <h2 className="font-bold text-navy text-base">{bill.provider}</h2>
              <p className="text-xs text-gray-400">NIT: {bill.nit}</p>
            </div>
          </div>

          {/* Desglose */}
          <div className="space-y-3 pt-3 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="text-sm font-semibold text-navy">{formatCOP(bill.subtotal)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">IVA (19%)</span>
              <span className="text-sm font-semibold text-navy">+ {formatCOP(bill.iva)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">(-) ReteFuente (2.5%)</span>
              <span className="text-sm font-semibold text-gray-400">- {formatCOP(bill.retefuente)}</span>
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm font-bold text-navy">Total Neto a Pagar</span>
              <span className="text-xl font-bold text-navy">{formatCOP(bill.totalNeto)}</span>
            </div>
          </div>
        </div>

        {/* Centro de Costos */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Centro de Costos asignado</p>
          <div className="flex items-center gap-2">
            <span className="text-lg">📍</span>
            <span className="text-sm font-medium text-navy">{bill.centroCostos}</span>
          </div>
        </div>

        {/* Info tributaria */}
        <div className="bg-navy-50 rounded-xl p-4 mb-4 animate-fade-in">
          <div className="flex items-start gap-2">
            <span className="text-lg">ℹ️</span>
            <div>
              <p className="text-xs font-semibold text-navy mb-0.5">Información Tributaria</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Esta factura incluye retención en la fuente aplicable según estatuto tributario colombiano.
                El valor neto refleja el descuento de ReteFuente (2.5%) sobre el subtotal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botón fijo */}
      <div className="px-5 pb-5 pt-2 bg-surface">
        <button
          onClick={handleApprove}
          className="w-full bg-orange text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-orange-600 transition-colors active:scale-98"
        >
          Aprobar y Ir a Pagos
        </button>
      </div>
    </div>
  )
}
