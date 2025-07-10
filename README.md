# QA Automation Project

Este é um projeto de automação de testes utilizando Playwright, com uma estrutura modular e escalável, visando boas práticas de codificação e eficiência.

## Estrutura do Projeto

- **tests/**: Contém os testes de automação, como testes de login e outros cenários.
- **pages/**: Contém as classes de páginas utilizando o Page Object Model (POM), que abstraem as interações com as páginas do sistema.
- **utils/**: Contém funções utilitárias para facilitar a execução dos testes, como logs e helpers.
- **config/**: Arquivo de configuração do Playwright e outros parâmetros de ambiente.
- **.github/workflows/**: Contém a configuração do GitHub Actions para CI/CD.
- **package.json**: Arquivo de configuração do Node.js com as dependências do projeto.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado
- Playwright instalado (instalar usando `npm install playwright`)

### Rodando os Testes

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Para rodar os testes, execute o comando:

```bash
npx playwright test
```

### Integração com CI/CD

Este projeto já está configurado para rodar automaticamente no GitHub Actions a cada push na branch `main`.

## Estrutura de Testes

Este projeto inclui testes para:
- **Login**: Testes de login bem-sucedido e falho utilizando dados de exemplo.