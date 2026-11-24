/* ---------- Validação ---------- */
function validProduto(db, d, editId) {
  const e = {};
  if (!/^[A-Za-z0-9][A-Za-z0-9-]{2,19}$/.test(d.sku || '')) e.sku = 'Use de 3 a 20 letras, números ou hífen (ex.: MAT-001).';
  else if (db.products.some(p => p.sku.toLowerCase() === d.sku.toLowerCase() && p.id !== editId)) e.sku = 'Já existe produto com este código.';
  if ((d.nome || '').length < 3) e.nome = 'Informe o nome com pelo menos 3 caracteres.';
  if (!d.categoria) e.categoria = 'Informe a categoria.';
  if (!d.unidade) e.unidade = 'Informe a unidade (un, cx, par, rolo…).';
  if (!d.local) e.local = 'Informe a localização no estoque.';
  if (!isInt(d.estoqueMinimo)) e.estoqueMinimo = 'Use um número inteiro, zero ou maior.';
  if (!isMoney(d.custo)) e.custo = 'Informe um valor igual ou maior que zero.';
  if (!editId && !isInt(d.saldoInicial)) e.saldoInicial = 'Use um número inteiro, zero ou maior.';
  return e;
}
function validMov(db, d) {
  const e = {};
  const p = db.products.find(x => x.id === d.produtoId);
  if (!p) e.produtoId = 'Escolha o produto.';
  if (!isInt(d.qtd) || Number(d.qtd) < 1) e.qtd = 'Informe uma quantidade inteira maior que zero.';
  else if (p && d.tipo === 'saida' && Number(d.qtd) > saldo(db, p)) e.qtd = `Saldo insuficiente. Saldo atual: ${num.format(saldo(db, p))} ${p.unidade}.`;
  if (!d.data || d.data > hojeISO()) e.data = 'Use uma data de hoje ou anterior.';
  if ((d.documento || '').length < 2) e.documento = 'Informe o documento que comprova a movimentação.';
  if ((d.responsavel || '').length < 3) e.responsavel = 'Informe quem está registrando.';
  return e;
}
function validPatrimonio(db, d, editId) {
  const e = {};
  if (!/^[A-Za-z0-9][A-Za-z0-9-]{2,19}$/.test(d.tag || '')) e.tag = 'Use de 3 a 20 caracteres (ex.: PAT-0006).';
  else if (db.assets.some(a => a.tag.toLowerCase() === d.tag.toLowerCase() && a.id !== editId)) e.tag = 'Esta etiqueta já está em uso.';
  if ((d.descricao || '').length < 3) e.descricao = 'Informe a descrição do bem.';
  if (!d.categoria) e.categoria = 'Informe a categoria.';
  if (!d.local) e.local = 'Informe o local.';
  if ((d.responsavel || '').length < 3) e.responsavel = 'Informe o responsável pelo bem.';
  if (!d.dataAquisicao || d.dataAquisicao > hojeISO()) e.dataAquisicao = 'Use uma data de hoje ou anterior.';
  if (!isMoney(d.valor)) e.valor = 'Informe um valor igual ou maior que zero.';
  return e;
}
