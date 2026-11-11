// ============================================================
// Isotipo Oficial de Paga Fast — Símbolo de Infinito
// Flechas entrelazadas en Azul Navy (#0E2A4E) y Naranja (#F26522)
// Sin tipografía ni texto "Paga Fast"
// ============================================================

export default function InfinityLogo({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 100 50"
      fill="none"
      className={className}
      aria-label="Paga Fast"
      role="img"
    >
      {/* Loop izquierdo — Azul Navy */}
      <path
        d="M25 25 C 25 12, 45 12, 45 25 C 45 38, 25 38, 25 25"
        stroke="#0E2A4E"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Loop derecho — Naranja */}
      <path
        d="M55 25 C 55 12, 75 12, 75 25 C 75 38, 55 38, 55 25"
        stroke="#F26522"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Cruce central — tramos de transición */}
      <path
        d="M42 25 C 44 22, 46 22, 48 25"
        stroke="#0E2A4E"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M52 25 C 54 28, 56 28, 58 25"
        stroke="#F26522"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Puntas de flecha — Navy (izquierda, apuntando a la derecha) */}
      <path
        d="M22 25 L 25 22 L 25 28 Z"
        fill="#0E2A4E"
      />
      {/* Puntas de flecha — Naranja (derecha, apuntando a la izquierda) */}
      <path
        d="M78 25 L 75 22 L 75 28 Z"
        fill="#F26522"
      />
    </svg>
  )
}
