/* ---------- Dados de exemplo (produtos e bens fictícios) ---------- */
function seed() {
  const db = vazio();
  db.exemplo = true;
  db.products = [
    { id:'p1', sku:'MAT-001', nome:'Caixa de papelão 40×30×20 cm', categoria:'Embalagens', unidade:'cx', estoqueMinimo:50, custo:3.80, local:'A-01', saldoInicial:120 },
    { id:'p2', sku:'MAT-002', nome:'Fita adesiva transparente 45 mm', categoria:'Embalagens', unidade:'rolo', estoqueMinimo:40, custo:6.50, local:'A-02', saldoInicial:25 },
    { id:'p3', sku:'EPI-010', nome:'Luva de vaqueta', categoria:'EPI', unidade:'par', estoqueMinimo:20, custo:18.90, local:'B-03', saldoInicial:60 },
    { id:'p4', sku:'EPI-011', nome:'Capacete de segurança branco', categoria:'EPI', unidade:'un', estoqueMinimo:10, custo:32.00, local:'B-04', saldoInicial:10 },
    { id:'p5', sku:'PAL-204', nome:'Pallet de madeira PBR 1,20 × 1,00 m', categoria:'Movimentação', unidade:'un', estoqueMinimo:30, custo:45.00, local:'C-01', saldoInicial:85 },
    { id:'p6', sku:'LIM-007', nome:'Álcool em gel 70% 5 L', categoria:'Limpeza', unidade:'galão', estoqueMinimo:15, custo:27.40, local:'D-02', saldoInicial:0 },
  ];
  db.assets = [
    { id:'a1', tag:'PAT-0001', descricao:'Empilhadeira elétrica 1,5 t', categoria:'Equipamento de movimentação', local:'Galpão A', responsavel:'Setor de Operações', status:'Em uso', dataAquisicao:'2023-03-15', valor:68000 },
    { id:'a2', tag:'PAT-0002', descricao:'Leitor de código de barras sem fio', categoria:'Informática', local:'Recebimento', responsavel:'Carla M.', status:'Em uso', dataAquisicao:'2024-06-10', valor:1450 },
    { id:'a3', tag:'PAT-0003', descricao:'Transpaleteira manual 2,5 t', categoria:'Equipamento de movimentação', local:'Galpão B', responsavel:'Setor de Operações', status:'Em manutenção', dataAquisicao:'2022-08-02', valor:3900 },
    { id:'a4', tag:'PAT-0004', descricao:'Impressora de etiquetas térmica', categoria:'Informática', local:'Expedição', responsavel:'Rafael T.', status:'Em uso', dataAquisicao:'2025-01-20', valor:2100 },
    { id:'a5', tag:'PAT-0005', descricao:'Estante porta-pallet (módulo)', categoria:'Armazenagem', local:'Galpão A', responsavel:'Setor de Operações', status:'Baixado', dataAquisicao:'2019-05-02', valor:1200 },
  ];
  const movs = [
    ['p5','entrada',20,'2026-11-03','NF 10452','Carla M.','Reposição de pallets'],
    ['p1','saida',35,'2026-11-05','Pedido 7781','João P.','Expedição lote 12'],
    ['p3','saida',12,'2026-11-06','Req. 3320','João P.',''],
    ['p2','saida',20,'2026-11-10','Req. 3341','Carla M.',''],
    ['p1','entrada',50,'2026-11-12','NF 10498','Carla M.','Compra mensal'],
    ['p5','saida',8,'2026-11-18','Pedido 7790','Rafael T.',''],
    ['p4','saida',6,'2026-11-19','Req. 3355','João P.','Troca de EPIs da equipe'],
  ];
  movs.forEach(([produtoId, tipo, qtd, data, documento, responsavel, obs], i) => {
    const m = { produtoId, tipo, qtd, data, documento, responsavel, obs, criadoEm: `${data}T${String(8+i).padStart(2,'0')}:00:00.000Z` };
    const p = db.products.find(x => x.id === produtoId);
    const s = saldo(db, p);
    db.movements.push({ id: uid(), ...m, saldoApos: tipo === 'entrada' ? s + qtd : s - qtd });
  });
  db.audit = [{ id: uid(), quando: new Date().toISOString(), acao: 'Carregou', entidade: 'Sistema', detalhe: 'Dados de exemplo para demonstração' }];
  return db;
}
