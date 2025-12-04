# 🐕 CodeceptJS API Dogs

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![CodeceptJS](https://img.shields.io/badge/CodeceptJS-v3.5.14-orange)](https://codecept.io/)
[![API](https://img.shields.io/badge/API-Dog%20CEO-yellow)](https://dog.ceo/dog-api/)

> 🚀 **Suíte de testes automatizados completa para Dog CEO API usando CodeceptJS - 29 cenários abrangentes com validação robusta**

Uma coleção robusta e bem estruturada de testes automatizados para validar todas as funcionalidades da [Dog CEO API](https://dog.ceo/dog-api/), implementada com CodeceptJS para garantir qualidade, confiabilidade e cobertura completa da API.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura dos Testes](#estrutura-dos-testes)
- [Documentação da API](#documentação-da-api)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Cenários de Teste](#cenários-de-teste)
- [Relatórios](#relatórios)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar uma suíte de testes automatizados de alta qualidade usando **CodeceptJS** para validar a Dog CEO API. Os testes cobrem desde cenários básicos até validações avançadas, incluindo:

- ✅ Testes de endpoints principais
- ✅ Validação de estrutura de resposta
- ✅ Cenários negativos e tratamento de erros
- ✅ Validação de URLs e formatos
- ✅ Testes de múltiplas requisições
- ✅ Verificação de breeds específicas

## 🔍 Funcionalidades Testadas

### 📊 Endpoints da API
- **GET** `/breeds/list/all` - Lista completa de raças
- **GET** `/breed/{breed}/images` - Imagens de raça específica
- **GET** `/breed/{breed}/{sub-breed}/images` - Imagens de sub-raça
- **GET** `/breeds/image/random` - Imagem aleatória
- **GET** `/breeds/image/random/{count}` - Múltiplas imagens aleatórias

### 🧪 Tipos de Teste
- **Funcionais**: Validação de funcionalidades principais
- **Estruturais**: Verificação de formato de resposta
- **Negativos**: Cenários de erro e exceção
- **Performance**: Validação de múltiplas requisições
- **Integração**: Testes end-to-end da API

## 🛠 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Node.js](https://nodejs.org/) | ≥16.0.0 | Ambiente de execução JavaScript |
| [CodeceptJS](https://codecept.io/) | ^3.5.14 | Framework de testes BDD |
| [Faker.js](https://fakerjs.dev/) | ^8.4.1 | Geração de dados de teste |
| [Prettier](https://prettier.io/) | ^3.2.5 | Formatação de código |
| [Rosie](https://github.com/rosiejs/rosie) | ^2.1.1 | Factory para objetos de teste |

## ⚡ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 16.0.0 ou superior)
- **npm** (versão 8.0.0 ou superior)
- **Git** (para clonar o repositório)

## 📦 Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/ZyamHunter/codeceptjs-api-dogs.git
cd codeceptjs-api-dogs
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o setup completo
```bash
npm run setup
```

## 🚀 Como Usar

### Executar todos os testes
```bash
npm test
```

### Executar com saída detalhada
```bash
npm run test:verbose
```

### Executar em modo debug
```bash
npm run test:debug
```

### Executar testes em paralelo
```bash
npm run test:parallel
```

### Limpar resultados anteriores
```bash
npm run clean
```

### Formatar código
```bash
npm run format
```

## 📁 Estrutura dos Testes

```
tests/
├── 📄 dog_api_test.js           # Testes básicos da API
├── 📄 list_all_breeds_test.js   # Testes de listagem completa
├── 📄 breeds_especificas_test.js # Testes de raças específicas
├── 📄 cenarios_negativos_test.js # Testes de cenários de erro
├── 📄 multiplas_imagens_test.js  # Testes de múltiplas requisições
└── 📄 validacao_urls_test.js     # Validação de URLs e formatos
```

## 🌐 Documentação da API

A [Dog CEO API](https://dog.ceo/dog-api/) é uma API RESTful gratuita que fornece imagens aleatórias de cachorros organizadas por raça.

### Base URL
```
https://dog.ceo/api
```

### Endpoints Principais
| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/breeds/list/all` | GET | Lista todas as raças disponíveis |
| `/breed/{breed}/images` | GET | Lista imagens de uma raça específica |
| `/breed/{breed}/{sub-breed}/images` | GET | Lista imagens de uma sub-raça |
| `/breeds/image/random` | GET | Retorna uma imagem aleatória |
| `/breeds/image/random/{count}` | GET | Retorna múltiplas imagens aleatórias |

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| **test** | `npm test` | Executa todos os testes com steps |
| **test:verbose** | `npm run test:verbose` | Executa testes com saída detalhada |
| **test:debug** | `npm run test:debug` | Executa testes em modo debug |
| **test:parallel** | `npm run test:parallel` | Executa testes marcados como paralelos |
| **format** | `npm run format` | Formata código usando Prettier |
| **format:check** | `npm run format:check` | Verifica formatação do código |
| **lint** | `npm run lint` | Executa verificação de linting |
| **clean** | `npm run clean` | Remove arquivos de output |
| **setup** | `npm run setup` | Instala dependências e roda testes |
| **docs** | `npm run docs` | Exibe informações da documentação |

## 🧪 Cenários de Teste

### ✅ Testes Funcionais
- Validação de endpoints principais
- Verificação de códigos de status HTTP
- Validação de estrutura de resposta JSON
- Conferência de chaves obrigatórias

### ❌ Testes Negativos
- Breeds inexistentes (404)
- Sub-breeds inválidas
- Endpoints inexistentes
- Caracteres especiais em parâmetros

### 🔍 Validações Específicas
- Formato de URLs de imagens
- Unicidade de imagens aleatórias
- Consistência de dados entre chamadas
- Verificação de tipos de arquivo suportados

### 📊 Análise de Qualidade
- Taxa de unicidade em múltiplas chamadas
- Validação de padrões de URL
- Verificação de breeds conhecidas
- Análise de performance de resposta

## 📈 Relatórios

Os resultados dos testes são salvos na pasta `output/` e incluem:

- **Screenshots** em caso de falhas
- **Logs detalhados** de execução
- **Relatórios HTML** (quando configurado)
- **Arquivos JSON** com dados de resposta

### Visualizar Resultados
```bash
# Os arquivos de saída estarão em:
./output/
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 🐛 Reportar Bugs
Para reportar bugs, [abra uma issue](https://github.com/ZyamHunter/codeceptjs-api-dogs/issues) com:
- Descrição detalhada do problema
- Passos para reproduzir
- Resultado esperado vs resultado obtido
- Screenshots (se aplicável)

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**ZyamHunter**
- GitHub: [@ZyamHunter](https://github.com/ZyamHunter)
- Projeto: [codeceptjs-api-dogs](https://github.com/ZyamHunter/codeceptjs-api-dogs)

---

## 🙏 Agradecimentos

- [Dog CEO](https://dog.ceo/) pela API gratuita e de qualidade
- [CodeceptJS Team](https://codecept.io/) pelo excelente framework de testes
- Comunidade de desenvolvedores que contribuem para o ecossistema de testes

---

<div align="center">

**🐕 Happy Testing! 🐕**

*Desenvolvido com ❤️ e muita dedicação para garantir a qualidade da Dog CEO API*

</div>