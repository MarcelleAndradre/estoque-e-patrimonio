/* ---------- Regras de negócio (funções puras sobre o estado) ---------- */
const saldo = (db, p) => db.movements.reduce((s, m) => m.produtoId === p.id ? s + (m.tipo === 'entrada' ? m.qtd : -m.qtd) : s, p.saldoInicial);
const situacao = (db, p) => {
  const s = saldo(db, p);
  if (s <= 0) return ['Zerado', 'b-zero'];
  if (s < p.estoqueMinimo) return ['Abaixo do mínimo', 'b-alerta'];
  return ['Normal', 'b-ok'];
};
