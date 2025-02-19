# WaveMotors  

WaveMotors é um sistema de marketplace para carros de garagem, permitindo que donos de garagens anunciem seus veículos, gerenciem seus estoques e alcancem um público maior.  

## 🚀 Tecnologias Utilizadas  

### Backend  
- **Java** (Desenvolvido no **Spring Tool Suite - STS**)  
- **Spring Boot**  
- **Banco de Dados MySQL**  
- **Keycloak** (Para autenticação)  
- **Raproxy** (Proxy reverso)  
- **JWT** (Versão anterior utilizava JWT para autenticação)  

### Frontend  
- **TypeScript**  
- **Angular**  
- **SCSS**  

### Infraestrutura  
- **Alpine Linux** (Hospedagem em máquinas virtuais)  
- **Docker & Docker Compose** (Para gerenciamento de containers)  
- **HTTPS configurado** para garantir a segurança das comunicações  

## 📂 Estrutura do Repositório  

O projeto está organizado da seguinte maneira:  

```
eCommerce/
│── backend/    # Código do backend (Spring Boot, Keycloak, MySQL)
│── frontend/   # Código do frontend (Angular, TypeScript, SCSS)
│── docs/       # Documentação e diagramas do projeto
└── README.md   # Este arquivo
```

## ⚙️ Configuração do Ambiente  

### Pré-requisitos  
Antes de rodar o projeto, certifique-se de ter instalado:  
- Docker & Docker Compose  
- MySQL  
- Java 17+  
- Node.js (para rodar o frontend)  


### Configurando e Executando o Backend  

1. Configure o banco de dados MySQL com as credenciais corretas.  
2. Adicione as configurações do Keycloak.  
3. Certifique-se de que os certificados SSL estão configurados corretamente para HTTPS.  
4. Compile e execute o backend:  

```sh
cd backend
./mvnw spring-boot:run
```

### Configurando e Executando o Frontend  

```sh
cd frontend
npm install
npm start
```

## 🛠️ Funcionalidades  

- **Cadastro e autenticação de usuários** (Keycloak)  
- **CRUD de anúncios de veículos**  
- **Gerenciamento de estoque para garagens**  
- **Integração segura via Raproxy**  
- **Marketplace responsivo**  
- **Comunicação segura via HTTPS**  
