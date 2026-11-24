/* Configuração do Tailwind: paleta e fontes do projeto */
if (window.tailwind) tailwind.config = {
  theme: {
    extend: {
      colors: {
        void: '#05070D', panel: '#0B1020', line: '#1E2A44',
        cyan: { 300: '#67E8F9', 400: '#22D3EE', 500: '#06B6D4' },
        violet: { 300: '#C4B5FD', 400: '#A78BFA', 500: '#8B5CF6' },
        mint: '#34D399', amber: '#FBBF24', rose: '#FB7185'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    }
  }
};
