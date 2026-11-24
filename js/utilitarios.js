/* ---------- Utilidades ---------- */
const KEY = 'estoque-patrimonio-v2';
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const num = new Intl.NumberFormat('pt-BR');
const hojeISO = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
const fmtData = iso => { const [y, m, d] = iso.split('-'); return `${d}/${m}/${y}`; };
const uid = () => Math.random().toString(36).slice(2, 9) + Date.now().toString(36);
const isInt = v => /^\d+$/.test(String(v ?? '').trim());
const toNum = v => Number(String(v ?? '').trim().replace(',', '.'));
const isMoney = v => String(v ?? '').trim() !== '' && Number.isFinite(toNum(v)) && toNum(v) >= 0;
const viewFromHash = () => { const h = location.hash.slice(1); return ['painel','estoque','movimentacoes','patrimonio','auditoria'].includes(h) ? h : 'painel'; };
