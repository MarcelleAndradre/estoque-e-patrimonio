# Estoque · Patrimônio — Grupo 5

Website dinâmico para controle de estoque e de patrimônio da Logística Inteligente Ltda.

## Como abrir

Dê dois cliques em `index.html`. Precisa de internet, porque React, Tailwind CSS e Babel
são carregados por CDN. Os dados ficam salvos no localStorage do navegador.

## Estrutura

```
estoque-patrimonio/
├── index.html              # página e componentes React (JSX): Painel, Produtos,
│                           # Movimentações, Patrimônio, Auditoria e App
├── css/
│   └── estilos.css         # fundo, cartões, campos, botões, etiquetas e animações
└── js/
    ├── tailwind.config.js  # paleta de cores e fontes do Tailwind
    ├── utilitarios.js      # formatação (Intl), datas, ids e conversões
    ├── armazenamento.js    # leitura e gravação no localStorage (com try/catch)
    ├── regras.js           # saldo e situação do produto (regras de negócio)
    ├── validacao.js        # validação de produto, movimentação e bem patrimonial
    └── dados-exemplo.js    # produtos e bens fictícios para a demonstração
```

Os arquivos em `js/` são JavaScript puro e carregam antes dos componentes. Os componentes
ficam no `index.html` porque o Babel Standalone compila o JSX no navegador, e o navegador
não deixa carregar arquivos `.jsx` separados quando a página é aberta direto do computador.

## Tecnologias

HTML5, Tailwind CSS 3.4.17, React 18.3.1, Babel Standalone 7.24.7, JavaScript ES6+,
localStorage e Intl.
