# Paga Fast 🇨🇴

Plataforma colombiana para la organización y pago digital de facturas de servicios públicos, SOAT, telecomunicaciones e impuestos.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 📱 Acceso multidispositivo

El servidor de desarrollo se inicia con `--host` para permitir acceso desde otros dispositivos en la misma red WiFi:

- **PC:** `http://localhost:5173/`
- **Móvil:** `http://[tu-ip-local]:5173/` (ej: `http://192.168.1.10:5173/`)

La app es 100% responsive: en móvil se muestra a pantalla completa, en escritorio se presenta en un marco de móvil centrado.

## 🎨 Sistema de Diseño

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Navy | `#0E2A4E` | Headers, estructura, barra superior |
| Naranja | `#F26522` | Botones de acción (CTA), indicadores |
| Blanco | `#FFFFFF` | Fondo principal |
| Gris Superficie | `#F8FAFC` | Tarjetas, fondos secundarios |

**Isotipo:** Símbolo de infinito (flechas entrelazadas en Navy y Naranja). No incluye texto "Paga Fast" en la interfaz.

## 📐 Pantallas (9)

1. **Selección de Perfil** — Persona Natural vs. Persona Jurídica (NIT)
2. **Login / Registro** — Cédula/NIT + PIN, biometría, SMS OTP
3. **Dashboard** — Resumen de facturas + "Pagar Todo"
4. **Carga de Facturas** — Escaneo OCR + Subir PDF/XML DIAN
5. **Gestión de Facturas** — Pestañas Pendientes / Pagadas + Búsqueda
6. **Detalle Factura NIT** — Desglose IVA / ReteFuente + Centro de Costos
7. **Checkout** — PSE, Nequi, Daviplata, Tarjeta
8. **Comprobante Exitoso** — CUS, PDF, WhatsApp
9. **Perfil y Ajustes** — Inmuebles/Sedes, métodos de pago, switch de perfil

## 🏗️ Stack Técnico

- **React 18** + **Vite 6** — Framework y bundler
- **Tailwind CSS 3** — Estilos utility-first
- **Context API** — Estado global (autenticación, navegación, perfil)

## 📦 Despliegue

### Vercel
1. Sube el repositorio a GitHub
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Build command: `npm run build` · Output: `dist`
4. El archivo `vercel.json` ya está configurado

### Netlify
1. Sube el repositorio a GitHub
2. Conéctalo en [netlify.com](https://netlify.com)
3. Build command: `npm run build` · Publish: `dist`
4. El archivo `netlify.toml` ya está configurado

### Manual (build estático)
```bash
npm run build
# Sirve la carpeta dist/ con cualquier servidor estático
```

## 🔌 API Endpoints (referencia)

```
POST   /api/v1/auth/login          → { documento, tipo, pin } → JWT
POST   /api/v1/auth/biometric      → Verificación Huella/FaceID
GET    /api/v1/facturas/pending     → Listado de facturas por perfil
POST   /api/v1/facturas/scan-ocr    → Imagen → Code 128 / QR parseado
POST   /api/v1/payments/pse-init    → Orden de pago en pasarela
GET    /api/v1/users/properties     → Inmuebles/sedes del usuario
```

> Esta es una demo con datos simulados. Para producción, conectar los endpoints reales.
