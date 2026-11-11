// ============================================================
// Pantalla 4: Carga de Facturas
// Escaneo OCR (cámara) + Carga digital (PDF/XML DIAN)
// ============================================================

import { useState } from 'react'
import StatusBar from '../components/StatusBar'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'
import { useApp } from '../context/AppContext'
import { providers } from '../data/mockData'

export default function UploadBill() {
  const { profileType, navigate, goBack } = useApp()
  const [mode, setMode] = useState(null) // 'scan' | 'digital'
  const [scanProgress, setScanProgress] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null)
  const [selectedProvider, setSelectedProvider] = useState(null)

  const handleScan = () => {
    setScanProgress(true)
    setTimeout(() => {
      setScanProgress(false)
      navigate('dashboard')
    }, 2500)
  }

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file.name)
    }
  }

  const handleProcess = () => {
    navigate('dashboard')
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <StatusBar />
      <Header showBack onBack={goBack} />

      <div className="flex-1 px-5 py-4">
        <h1 className="text-xl font-bold text-navy mb-1">Cargar Factura</h1>
        <p className="text-sm text-gray-400 mb-5">Escanea o sube tu factura digital</p>

        {/* Opciones de carga */}
        {!mode && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Escanear OCR */}
            <button
              onClick={() => setMode('scan')}
              className="flex flex-col items-center gap-3 py-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-200 transition-all active:scale-98"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl">📷</div>
              <span className="font-semibold text-navy text-sm">Escanear OCR</span>
            </button>

            {/* Subir Digital */}
            <button
              onClick={() => setMode('digital')}
              className="flex flex-col items-center gap-3 py-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-navy-200 transition-all active:scale-98"
            >
              <div className="w-16 h-16 rounded-2xl bg-navy-50 flex items-center justify-center text-3xl">📁</div>
              <span className="font-semibold text-navy text-sm">Subir Digital</span>
            </button>
          </div>
        )}

        {/* Modo Escaneo */}
        {mode === 'scan' && (
          <div className="animate-fade-in">
            <div className="relative w-full aspect-[3/4] max-h-[400px] bg-navy-900 rounded-2xl overflow-hidden mb-4">
              {/* Marco escáner */}
              <div className="absolute inset-6 border-2 border-white/40 rounded-xl">
                {/* Esquinas */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-orange rounded-tl-xl"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-orange rounded-tr-xl"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-orange rounded-bl-xl"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-orange rounded-br-xl"></div>

                {/* Línea de escaneo */}
                {scanProgress && (
                  <div className="absolute left-2 right-2 h-0.5 bg-orange shadow-lg shadow-orange/50" style={{ position: 'absolute' }}>
                    <div className="scan-line"></div>
                  </div>
                )}

                {/* Placeholder */}
                {!scanProgress && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/50 text-sm text-center px-4">
                      Apunta al código de barras<br/>o QR de la factura
                    </span>
                  </div>
                )}
              </div>

              {scanProgress && (
                <div className="absolute bottom-0 left-0 right-0 bg-navy/90 text-white text-center py-3 text-sm font-medium animate-slide-up">
                  Escaneando... Procesando código
                </div>
              )}
            </div>

            <button
              onClick={handleScan}
              disabled={scanProgress}
              className="w-full bg-orange text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-orange-600 transition-colors active:scale-98 disabled:opacity-50"
            >
              {scanProgress ? 'Procesando...' : 'Escanear Factura'}
            </button>
            <button
              onClick={() => setMode(null)}
              className="w-full mt-3 text-gray-400 font-medium text-sm py-2"
            >
              Cancelar
            </button>
          </div>
        )}

        {/* Modo Digital */}
        {mode === 'digital' && (
          <div className="animate-fade-in">
            {/* Upload zone */}
            <label className="block">
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-orange-200 transition-colors">
                {uploadedFile ? (
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-2xl mx-auto mb-2">✅</div>
                    <p className="font-semibold text-navy text-sm mb-1">{uploadedFile}</p>
                    <p className="text-xs text-gray-400">Archivo cargado correctamente</p>
                  </div>
                ) : (
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-surface flex items-center justify-center text-2xl mx-auto mb-2">📤</div>
                    <p className="font-semibold text-navy text-sm mb-1">Importar PDF / XML de DIAN</p>
                    <p className="text-xs text-gray-400">Toca para seleccionar archivo</p>
                  </div>
                )}
              </div>
              <input type="file" accept=".pdf,.xml" onChange={handleFile} className="hidden" />
            </label>

            {/* Providers soportados */}
            <div className="mt-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Soporta</p>
              <div className="flex flex-wrap gap-2">
                {providers.slice(0, 5).map(p => (
                  <span key={p.id} className="bg-white px-3 py-1.5 rounded-full text-xs font-medium text-navy border border-gray-200">
                    {p.icon} {p.name}
                  </span>
                ))}
              </div>
            </div>

            {/* NIT: selector de proveedor */}
            {profileType === 'juridica' && (
              <div className="mt-5">
                <label className="block text-sm font-semibold text-navy mb-1.5">Proveedor / Empresa</label>
                <select
                  value={selectedProvider || ''}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border-2 border-gray-200 focus:border-navy focus:outline-none text-navy text-sm"
                >
                  <option value="">Selecciona proveedor...</option>
                  {providers.map(p => (
                    <option key={p.id} value={p.id}>{p.icon} {p.name} — {p.type}</option>
                  ))}
                </select>
              </div>
            )}

            <button
              onClick={handleProcess}
              disabled={!uploadedFile}
              className="w-full mt-5 bg-orange text-white font-bold py-3.5 rounded-xl shadow-md hover:bg-orange-600 transition-colors active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Procesar Factura
            </button>
            <button
              onClick={() => setMode(null)}
              className="w-full mt-3 text-gray-400 font-medium text-sm py-2"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      <BottomNav active="cargar" />
    </div>
  )
}
