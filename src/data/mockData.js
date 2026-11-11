// ============================================================
// Paga Fast — Mock Data (Demo)
// Datos simulados para demostración de la aplicación.
// ============================================================

export const userNatural = {
  name: 'Carlos Mendoza',
  document: '1.018.492.019',
  documentType: 'CC',
  profileType: 'natural',
  phone: '300 123 45 67',
  properties: [
    { id: 'p1', name: 'Casa Principal Chía', address: 'Calle 160 #7-45, Chía', billCount: 3 },
    { id: 'p2', name: 'Apto 502 Colina', address: 'Cra 11 #93-50, Bogotá', billCount: 2 },
  ],
  paymentMethods: [
    { id: 'pm1', type: 'Nequi', detail: '300 *** **19', icon: '📱' },
    { id: 'pm2', type: 'Bancolombia E-Prepago', detail: '*4920', icon: '💳' },
  ],
}

export const userJuridica = {
  name: 'Carlos Mendoza',
  document: '800.123.456-7',
  documentType: 'NIT',
  profileType: 'juridica',
  businessName: 'Mendoza & Asociados S.A.S',
  sedes: [
    { id: 's1', name: 'Sede Principal - Bogotá Calle 93', billCount: 5 },
    { id: 's2', name: 'Sucursal Medellín El Poblado', billCount: 3 },
  ],
  paymentMethods: [
    { id: 'pm3', type: 'PSE Empresarial', detail: 'Bancolombia', icon: '🏦' },
  ],
}

export const pendingBills = [
  {
    id: 'b1',
    provider: 'Acueducto Bogotá',
    category: 'Agua',
    icon: '💧',
    property: 'Apto 502',
    dueDate: '18 Nov 2026',
    amount: 82000,
    status: 'pendiente',
    reference: 'ACU-2026-8841',
    nit: null,
  },
  {
    id: 'b2',
    provider: 'Enel Codensa',
    category: 'Electricidad',
    icon: '💡',
    property: 'Casa Chía',
    dueDate: '22 Nov 2026',
    amount: 145000,
    status: 'pendiente',
    reference: 'ECD-2026-3392',
    nit: null,
  },
  {
    id: 'b3',
    provider: 'SOAT Seguros SURA',
    category: 'Seguro',
    icon: '🚗',
    property: null,
    dueDate: '05 Dic 2026',
    amount: 121500,
    status: 'pendiente',
    reference: 'SOAT-2026-1156',
    nit: null,
  },
]

export const pendingBillsNIT = [
  {
    id: 'b4',
    provider: 'Gas Natural Vanti',
    category: 'Gas',
    icon: '🔥',
    property: 'Casa Chía',
    dueDate: '25 Nov 2026',
    amount: 34500,
    status: 'pendiente',
    reference: 'VNT-2026-7781',
    nit: '800.007.813-1',
    subtotal: 200000,
    iva: 38000,
    retefuente: 5000,
    totalNeto: 233000,
    centroCostos: 'Sede Principal - Bogotá Calle 93',
  },
]

export const paidBills = [
  {
    id: 'p1',
    provider: 'Enel Codensa',
    category: 'Electricidad',
    icon: '💡',
    property: 'Casa Chía',
    paidDate: '02 Nov 2026',
    amount: 120000,
    status: 'pagada',
    cus: '983210491820',
    method: 'PSE - Bancolombia',
  },
  {
    id: 'p2',
    provider: 'Acueducto Bogotá',
    category: 'Agua',
    icon: '💧',
    property: 'Apto 502',
    paidDate: '28 Oct 2026',
    amount: 78000,
    status: 'pagada',
    cus: '983210491751',
    method: 'Nequi',
  },
  {
    id: 'p3',
    provider: 'Claro - Internet',
    category: 'Telecomunicaciones',
    icon: '📡',
    property: 'Casa Chía',
    paidDate: '20 Oct 2026',
    amount: 89900,
    status: 'pagada',
    cus: '983210491623',
    method: 'PSE - Davivienda',
  },
  {
    id: 'p4',
    provider: 'Gas Natural Vanti',
    category: 'Gas',
    icon: '🔥',
    property: 'Apto 502',
    paidDate: '15 Oct 2026',
    amount: 31200,
    status: 'pagada',
    cus: '983210491482',
    method: 'Tarjeta *4920',
  },
]

export const providers = [
  { id: 'vanti', name: 'Vanti (Gas Natural)', type: 'Gas', icon: '🔥' },
  { id: 'claro', name: 'Claro', type: 'Telecomunicaciones', icon: '📡' },
  { id: 'movistar', name: 'Movistar', type: 'Telecomunicaciones', icon: '📡' },
  { id: 'epm', name: 'EPM', type: 'Servicios Públicos', icon: '💧' },
  { id: 'acueducto', name: 'Acueducto Bogotá', type: 'Agua', icon: '💧' },
  { id: 'codensa', name: 'Enel Codensa', type: 'Electricidad', icon: '💡' },
  { id: 'sura', name: 'Seguros SURA', type: 'SOAT', icon: '🚗' },
]

export const banks = ['Bancolombia', 'Davivienda', 'Banco de Bogotá', 'BBVA', 'Banco de Occidente', 'AvVillas']

export function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
