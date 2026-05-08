# Testes Mobile Automatizados com WebdriverIO + Sauce Labs

## Descrição do Projeto

Este projeto contém uma suíte de testes automatizados mobile utilizando:

- WebdriverIO (WDIO)
- Appium
- Sauce Labs
- GitHub Actions

Os testes foram desenvolvidos para validar os fluxos principais de autenticação do aplicativo Android disponibilizado pelo WebdriverIO.

---

# Tecnologias Utilizadas

- Node.js
- WebdriverIO
- Appium
- Sauce Labs
- GitHub Actions
- TypeScript

---

# Estrutura do Projeto

```bash
teste-mobile-em-android-WDIO/
│
├── .github/
│   └── workflows/
│       └── mobile-tests.yml
│
├── test/
│   └── specs/
│       └── fluxo.e2e.ts
│
├── node_modules/
├── package.json
├── tsconfig.json
├── wdio.conf.ts
└── README.md
```

---

# Fluxos Automatizados

## 1. Cadastro de Novo Usuário

O primeiro teste automatiza o fluxo completo de criação de conta no aplicativo.

### Passos executados:

1. Acessa a tela de login
2. Clica em "Sign up"
3. Preenche:
   - E-mail
   - Senha
   - Confirmação de senha
4. Finaliza o cadastro

---

## 2. Login com Usuário Criado

Após o cadastro, o segundo fluxo realiza o login utilizando as credenciais criadas anteriormente.

### Passos executados:

1. Acessa a tela de login
2. Preenche:
   - E-mail
   - Senha
3. Efetua o login no aplicativo

---

# Execução Local

## Instalação das dependências

```bash
npm install
```

---

## Executar os testes

```bash
npm run wdio
```

---

# Integração Contínua (CI)

O projeto utiliza GitHub Actions para execução automática dos testes mobile.

A pipeline realiza:

- Instalação das dependências
- Inicialização da execução WDIO
- Conexão com Sauce Labs
- Execução dos testes Android
- Geração automática de vídeo da execução

---

# Branch de CI

```bash
testes-com-CI
```

---

# Configuração do Sauce Labs

As credenciais do Sauce Labs foram configuradas utilizando GitHub Secrets:

```txt
SAUCE_USERNAME
SAUCE_ACCESS_KEY
```

---

# Execução Remota

Os testes são executados remotamente em dispositivos Android hospedados no Sauce Labs.

Configuração utilizada:

```ts
platformName: 'Android'
automationName: 'UiAutomator2'
deviceName: 'Android GoogleAPI Emulator'
```

---

# GitHub Actions

Arquivo de pipeline:

```bash
.github/workflows/mobile-tests.yml
```

A pipeline executa automaticamente os testes em pushes realizados para a branch:

```bash
testes-com-CI
```

---

# Evidências da Execução

O Sauce Labs gera automaticamente:

- Vídeo da execução
- Logs
- Screenshots
- Informações do dispositivo

Dashboard:

https://app.saucelabs.com/dashboard/tests

---

# Autor

Projeto desenvolvido para fins acadêmicos e prática de automação de testes mobile utilizando WebdriverIO, Appium e integração contínua com GitHub Actions.
