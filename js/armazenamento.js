/* ---------- Persistência (try/catch: localStorage pode falhar) ---------- */
const vazio = () => ({ v: 2, exemplo: false, products: [], movements: [], assets: [], audit: [] });
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    return d && Array.isArray(d.products) && Array.isArray(d.movements) && Array.isArray(d.assets) ? d : null;
  } catch (e) { return null; }
}
function save(db) {
  try { localStorage.setItem(KEY, JSON.stringify(db)); return true; } catch (e) { return false; }
}
