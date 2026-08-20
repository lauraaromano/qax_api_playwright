# 🚀 TestBeyond — Automação de APIs com Playwright

Projeto desenvolvido durante o curso **Aprenda a testar APIs RESTful com Playwright e JavaScript**, com foco em **automação de testes de APIs**, organização de projetos de QA e criação de cenários automatizados.

O projeto utiliza **Playwright e JavaScript** para realizar testes de APIs RESTful, além de recursos para geração de dados, conexão com banco de dados, organização de fixtures e execução de testes de performance.

---

## 🧪 Tecnologias utilizadas

* **JavaScript**
* **Playwright**
* **Node.js**
* **APIs RESTful**
* **HTTP**
* **JSON**
* **CSV**
* **Banco de dados**
* **Git**
* **Playwright Test**

---

## 📁 Estrutura do projeto

```text
TestBeyond/
│
└── shortbeyond/
    │
    ├── performance/
    │   └── tests/
    │       ├── spike.yaml
    │       └── insert-users.js
    │
    ├── playwright/
    │   │
    │   ├── e2e/
    │   │
    │   └── support/
    │       ├── factories/
    │       ├── fixtures/
    │       ├── services/
    │       ├── database.js
    │       ├── usuarios_gerados.csv
    │       └── utils.js
    │
    ├── playwright-report/
    │
    ├── test-results/
    │
    ├── .env
    ├── .gitignore
    └── global-setup.js
```

---

## 🔎 Organização do projeto

### 📂 `playwright/e2e`

Contém os testes **End-to-End**, responsáveis por validar os principais fluxos da aplicação através das APIs.

Os cenários podem realizar requisições e validar:

* Status codes
* Dados retornados
* Regras de negócio
* Respostas da API
* Fluxos de autenticação
* Criação e manipulação de usuários
* Cenários positivos e negativos

---

### 📂 `playwright/support`

Centraliza recursos utilizados pelos testes, deixando o projeto mais organizado e facilitando a reutilização de código.

#### `factories/`

Responsável pela criação e preparação de dados utilizados durante os testes.

As factories ajudam a evitar a repetição de dados e facilitam a criação de diferentes cenários.

#### `fixtures/`

Contém fixtures utilizadas para disponibilizar recursos e comportamentos compartilhados entre os testes.

Essa abordagem permite centralizar configurações e facilitar a reutilização de serviços durante a execução dos testes.

#### `services/`

Responsável pela organização das chamadas realizadas para as APIs.

A separação dos serviços permite manter a lógica das requisições fora dos arquivos de teste, deixando os cenários mais limpos e fáceis de manter.

#### `database.js`

Arquivo utilizado para operações relacionadas ao banco de dados e suporte aos testes que dependem de dados persistidos.

#### `usuarios_gerados.csv`

Arquivo utilizado para armazenar dados de usuários gerados para utilização nos testes.

#### `utils.js`

Contém funções auxiliares utilizadas em diferentes partes do projeto.

---

## ⚡ Testes de Performance

O projeto também possui uma estrutura voltada para **testes de performance**:

```text
performance/
└── tests/
    ├── spike.yaml
    └── insert-users.js
```

Essa parte do projeto permite trabalhar com cenários relacionados à performance da aplicação e inserção de usuários.

### 📈 Spike Test

O arquivo `spike.yaml` é utilizado para configurar um cenário de **Spike Testing**, permitindo analisar o comportamento da aplicação diante de aumentos repentinos na carga.

---

## 👥 Geração de usuários

O projeto possui mecanismos para geração e utilização de usuários nos testes.

O arquivo:

```text
usuarios_gerados.csv
```

é utilizado para armazenar dados que podem ser utilizados durante a execução dos cenários automatizados.

Isso permite trabalhar com diferentes dados de teste sem precisar inserir manualmente cada usuário.

---

## 🗄️ Banco de dados

O projeto também possui integração com banco de dados através do arquivo:

```text
database.js
```

Essa integração permite utilizar dados do banco como parte da preparação ou validação dos cenários de teste.

Dessa forma, além de validar a resposta da API, é possível verificar o comportamento dos dados persistidos.

---

## 🔧 Configuração

Antes de executar os testes, configure as variáveis de ambiente no arquivo:

```text
.env
```

Exemplo:

```env
BASE_URL=http://localhost:3000
```

> As variáveis utilizadas podem variar de acordo com a configuração da aplicação e do ambiente de testes.

---

## ▶️ Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd shortbeyond
```

Instale as dependências:

```bash
npm install
```

Caso seja necessário instalar os navegadores do Playwright:

```bash
npx playwright install
```

---

## 🧪 Executando os testes

Para executar todos os testes:

```bash
npx playwright test
```

Para executar os testes em modo visual:

```bash
npx playwright test --headed
```

Para executar um teste específico:

```bash
npx playwright test nome-do-teste
```

---

## 📊 Relatórios

Após a execução dos testes, os resultados são armazenados na estrutura do Playwright.

### Playwright Report

```text
playwright-report/
```

O relatório pode ser aberto utilizando:

```bash
npx playwright show-report
```

### Test Results

Os resultados das execuções são armazenados em:

```text
test-results/
```

Esses arquivos podem auxiliar na análise de falhas e resultados dos testes automatizados.

---

## 🌐 Testes de API

O projeto utiliza o Playwright para realizar requisições diretamente aos endpoints da API.

Entre os principais pontos trabalhados estão:

* `GET`
* `POST`
* `PUT`
* `DELETE`
* Autenticação
* Headers
* Payloads
* Status Codes
* Validação de respostas
* Dados dinâmicos
* Cenários positivos
* Cenários negativos

---

## 🧩 Boas práticas aplicadas

Durante o desenvolvimento do projeto foram aplicadas práticas para melhorar a organização e manutenção da automação:

* Separação entre testes e serviços
* Reutilização de código
* Uso de fixtures
* Criação de factories
* Organização dos dados de teste
* Variáveis de ambiente
* Separação de responsabilidades
* Geração de dados para os testes
* Utilização de relatórios
* Organização dos testes por funcionalidade

---

## 🎯 Objetivos do projeto

O principal objetivo deste projeto é desenvolver conhecimentos práticos em **QA e automação de testes de APIs**, utilizando o Playwright como ferramenta de automação.

Com o projeto, são praticados conceitos importantes para atuação como **QA Engineer / QA Automation**, incluindo:

* API Testing
* Test Automation
* REST API
* JavaScript
* Playwright
* Test Data
* Fixtures
* API Services
* Database Testing
* Performance Testing

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aprofundados conhecimentos em:

* Automação de APIs RESTful
* Playwright com JavaScript
* Criação de cenários de testes
* Estruturação de projetos de automação
* Fixtures e reutilização de recursos
* Services para chamadas de API
* Factories para criação de dados
* Integração com banco de dados
* Geração de dados de teste
* Testes de performance
* Organização de relatórios
* Boas práticas de automação

---

## 👩‍💻 Sobre

Projeto desenvolvido como parte dos meus estudos em **Quality Assurance e Test Automation**, com foco em automação de APIs utilizando **Playwright e JavaScript**.

**Área:** Quality Assurance
**Foco:** API Testing & Test Automation
**Linguagem:** JavaScript
**Framework:** Playwright
**Tipo de testes:** API, E2E e Performance
