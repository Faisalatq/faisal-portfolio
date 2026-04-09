const CVIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Folded document */}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <polyline points="14 2 14 8 20 8" />
    {/* PDF label */}
    <text
      x="10"
      y="17"
      fill="currentColor"
      stroke="none"
      fontSize="5.5"
      fontWeight="700"
      fontFamily="system-ui, sans-serif"
      textAnchor="middle"
    >
      PDF
    </text>
  </svg>
);

export default CVIcon;
