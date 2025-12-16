# EasyCPF - Node.js TypeScript Boilerplate

Um boilerplate completo em Node.js com TypeScript, Express, Prisma, Zod, Redis e BullMQ, seguindo a arquitetura Clean Architecture.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Express** - Framework web
- **Prisma** - ORM para banco de dados
- **Zod** - Validação de schemas
- **Redis** - Cache e filas
- **BullMQ** - Sistema de filas
- **PostgreSQL** - Banco de dados

## 📁 Estrutura do Projeto

```
src/
├── config/          # Configurações (database, redis, queue)
├── controllers/     # Controllers da aplicação
├── usecases/        # Casos de uso (lógica de negócio)
├── repositories/    # Repositórios (acesso a dados)
├── schemas/         # Schemas de validação (Zod)
├── workers/         # Workers para processamento de jobs
├── routes/          # Rotas da API
├── middleware/      # Middlewares
├── types/           # Tipos TypeScript
└── database/        # Scripts de banco de dados
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd easycpf
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp env.example .env
```

4. Configure o banco de dados:
```bash
# Gere o cliente Prisma
npm run db:generate

# Execute as migrações
npm run db:migrate

# (Opcional) Popule o banco com dados de exemplo
npm run db:seed
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🚀 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o TypeScript
- `npm start` - Inicia o servidor em produção
- `npm run db:migrate` - Executa migrações do banco
- `npm run db:generate` - Gera cliente Prisma
- `npm run db:seed` - Popula banco com dados de exemplo
- `npm test` - Executa testes
- `npm run lint` - Executa linter
- `npm run type-check` - Verifica tipos TypeScript

## 📡 API Endpoints

### Users
- `POST /api/users` - Criar usuário
- `GET /api/users/:id` - Buscar usuário por ID
- `GET /api/users` - Listar todos os usuários

### Jobs
- `POST /api/jobs` - Criar job
- `GET /api/jobs/:id` - Buscar job por ID

### Health Check
- `GET /health` - Verificar status do servidor

## 🔄 Workers

O projeto inclui três workers para processamento de jobs:

1. **ProcessingWorker** - Processa jobs gerais (data-processing, file-upload, email-send)
2. **EmailWorker** - Processa envio de emails
3. **NotificationWorker** - Processa notificações (email, push, SMS)

## 🗄️ Banco de Dados

### Modelos

#### User
- `id` - ID único do usuário
- `email` - Email do usuário (único)
- `name` - Nome do usuário
- `password` - Senha criptografada
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

#### Job
- `id` - ID único do job
- `name` - Nome do job
- `data` - Dados do job (JSON)
- `status` - Status do job (pending, processing, completed, failed)
- `result` - Resultado do processamento (JSON)
- `error` - Erro (se houver)
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização
- `completedAt` - Data de conclusão

## 🚀 Deploy no Heroku

1. Crie um app no Heroku
2. Configure as variáveis de ambiente:
   - `DATABASE_URL` - URL do PostgreSQL
   - `REDIS_URL` - URL do Redis
   - `NODE_ENV` - production
   - `JWT_SECRET` - Chave secreta para JWT

3. Deploy:
```bash
git push heroku main
```

4. Execute as migrações:
```bash
heroku run npm run db:migrate
```

## 🔧 Configuração de Desenvolvimento

### Variáveis de Ambiente

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/easycpf?schema=public"

# Redis Configuration
REDIS_URL="redis://localhost:6379"

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Logging
LOG_LEVEL=info
```

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch
```

## 📝 Exemplos de Uso

### Criar um usuário
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Criar um job
```bash
curl -X POST http://localhost:3000/api/jobs \
  -H "Content-Type: application/json" \
  -d '{
    "name": "data-processing",
    "data": {
      "userId": "user-id",
      "type": "csv",
      "filename": "data.csv"
    }
  }'
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.





