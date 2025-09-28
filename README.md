# 📄 Aplicação para Catálogo de Candidaturas de Emprego

Este projeto é uma aplicação web simples e prática desenvolvida com **HTML, CSS e JavaScript** que permite aos usuários registrar, visualizar e gerenciar suas candidaturas a empregos diretamente no navegador. Ideal para quem está em busca de oportunidades e deseja manter um controle organizado das vagas aplicadas.

---

## ✅ Funcionalidades

- ✅ Adicionar uma nova candidatura (empresa, cargo, data, status, etc.)

- ✅ Visualizar todas as candidaturas cadastradas

- ✅ Editar ou atualizar o status de uma candidatura (ex: "Em análise", "Entrevista marcada", "Rejeitado")

- ✅ Remover candidaturas indesejadas

- ✅ Persistência dos dados usando `localStorage` (não perde os dados ao fechar o navegador)

- ✅ Interface responsiva e amigável

---

## 🚀 Tecnologias Utilizadas

- **HTML5** -- Estrutura da página

- **CSS3** -- Estilização e design responsivo

- **JavaScript (Vanilla)** -- Lógica da aplicação e manipulação do DOM

- **LocalStorage** -- Armazenamento local dos dados

---

## 📦 Como Usar

1\. Clone este repositório:

   ```bash

   git clone https://github/candidaturas-emprego.git

   ```

2\. Acesse a pasta do projeto:

   ```bash

   cd candidaturas-emprego

   ```

3\. Abra o arquivo `index.html` no seu navegador:

   - Duplo clique no arquivo ou

   - Use um servidor local como `Live Server` (VS Code) ou `python -m http.server`

> ⚠️ Não é necessário backend nem banco de dados --- tudo roda no cliente!

---

## 🛠️ Estrutura do Projeto

```

candidaturas-emprego/

│

├── index.html          # Página principal

├── styles.css           # Estilos da aplicação

├── script.js           # Lógica de cadastro, edição e remoção

└── README.md           # Este arquivo

```

---

## 💡 Dados Salvos por Candidatura

Cada entrada contém:

- Cargo pretendido

- Nome da empresa

- Data da candidatura

- Status (ex: Enviado, Entrevista, Contratado, Rejeitado)

- Link da vaga

---

## 🔧 Melhorias Futuras (Ideias)

- [ ] Exportar candidaturas para CSV

- [ ] Filtrar por status ou data

- [ ] Notificações de acompanhamento

- [ ] Tema escuro/claro

- [ ] Suporte a anexos (currículo enviado, etc.)

- [ ] Botoões para acesso rápido a sites de vagas conhecidos

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou enviar *pull requests* para melhorias, correções ou novas funcionalidades.

1\. Faça um fork do projeto

2\. Crie sua branch (`git checkout -b feature/nova-funcionalidade`)

3\. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)

4\. Envie para o repositório (`git push origin feature/nova-funcionalidade`)

5\. Abra um Pull Request

---

## 🙌 Autor

Desenvolvido por João Gabriel Souza Silva
[GitHub](https://github.com/JoaoGabrielSSilva)

---

💡 **Dica:** Use essa ferramenta para organizar sua busca por emprego e aumentar suas chances de sucesso! Boa sorte nas candidaturas! 🚀
