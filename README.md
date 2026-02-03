# Forró Flow | Gerador de Sequências 🕺💃

O **Forró Flow** é uma ferramenta web simples e poderosa para gerar sequências de passos de Forró (Roots e Universitário). O objetivo é ajudar alunos e professores a criarem combinações criativas para treino e aulas.

## 🚀 Funcionalidades

- **Multi-Estilo**: Suporte para passos de *Roots* e *Universitário*.
- **Lógica de Conexão**: O algoritmo garante que os passos se conectem corretamente com base no pé de apoio (Ex: Passo que termina na esquerda chama passo que começa na direita).
- **Passo Obrigatório**: Escolha um passo específico (ex: "Facão") e o gerador construirá uma sequência aleatória que o inclui.
- **Visualização**: Cards animados indicando o nome do passo, estilo, contagem de tempos e transição de pés.
- **Execução Offline**: Funciona diretamente no navegador ou via arquivo local, sem necessidade de servidor.

## 🛠️ Como Usar

1. **Escolha o Estilo**: Selecione "Roots", "Universitário" ou "Todos".
2. **Defina o Tamanho**: Quantos passos você quer na sequência (padrão 8).
3. **Incluir Passo (Opcional)**: Se você quer treinar um movimento específico, selecione-o na lista e ele será garantido na sequência.
4. **Gerar**: Clique no botão e veja a mágica!

## 📂 Estrutura do Projeto

```
forro-engine/
├── index.html      # Página principal
├── css/
│   └── style.css   # Estilos e animações
├── js/
│   ├── data.js     # Banco de dados de passos (Edite aqui para adicionar passos)
│   └── script.js   # Lógica do gerador
└── README.md       # Documentação
```

## 🔧 Instalação e Desenvolvimento

Clone o repositório:
```bash
git clone https://github.com/augustovanderley/forro-engine.git
cd forro-engine
```

Como é um projeto estático, basta abrir o `index.html` no seu navegador preferido.

## 📦 Deploy

Este projeto está configurado para rodar no **GitHub Pages**.

- **Recomendação**: Configure o GitHub Pages para fazer o deploy a partir da branch `master` (ou `main`), pasta `/root`.
- Isso garante que qualquer alteração no código principal seja refletida automaticamente no site.

## 🤝 Contribuição

Sinta-se à vontade para adicionar novos passos!
1. Abra o arquivo `js/data.js`.
2. Adicione um novo objeto ao array `window.ForroDB`.
3. Certifique-se de definir corretamente `start_foot` (pé de início) e `end_foot` (pé de fim) para manter a lógica funcionando.

---
Feito com ❤️ e muito forró!
