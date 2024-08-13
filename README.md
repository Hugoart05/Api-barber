# Api Barber @Hugoart05

## Introdução

Esta API é desenvolvida para o backend de um aplicativo de gerenciamento de barbearias. Ela oferece funcionalidades para gerenciamento de clientes, agendamentos e serviços, integrando com um banco de dados mysql para armazenamento persistente.

### Tecnologias Utilizadas no Projeto

<div style="display: flex; align-items: center;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js Icon" style="width: 24px; height: 24px; margin-right: 8px;">
    <span>Node.js</span>
</div>
<div style="display: flex; align-items: center;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Icon" style="width: 24px; height: 24px; margin-right: 8px;">
    <span>TypeScript</span>
</div>
<div style="display: flex; align-items: center;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="Sequelize Icon" style="width: 24px; height: 24px; margin-right: 8px;">
    <span>Sequelize</span>
</div>

## Resposta Padronizada da API

A resposta padrão para a API é formatada da seguinte maneira:

<pre><code>
{
  statuscode: number,
  message: string,
  data: object
}
</code></pre>

## Instalação e Execução

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/Hugoart05/Api-barber/
    ```

2. **Acesse o diretório do projeto:**

    ```bash
    cd Api-barber
    ```

3. **Instale as dependências usando npm:**

    ```bash
    npm install
    ```

4. **(Opcional) Se você estiver usando Yarn em vez de npm, você pode instalar as dependências com o comando:**

    ```bash
    yarn install
    ```

5. **Inicie o servidor ou o aplicativo (dependendo do que o projeto requer):**

    ```bash
    npm run dev
    ```

    ou

    ```bash
    yarn start
    ```

    Verifique o `package.json` para scripts específicos de inicialização ou configuração.

## Configuração do Ambiente

1. **Crie um arquivo `.env` na raiz do projeto** com as seguintes variáveis:

    ```plaintext
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASS=your_


    ## Rotas da API

### 1. Obter Todos os Usuários

- **Método**: GET
- **Endpoint**: `/api/users`
- **Descrição**: Retorna uma lista de todos os usuários.
- **Parâmetros de Consulta**: Nenhum.
- **Resposta:**

    ```json
    {
      "statuscode": 200,
      "message": "Success",
      "data": [
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com"
        }
      ]
    }
    ```

### 2. Criar um Novo Usuário

- **Método**: POST
- **Endpoint**: `/api/users`
- **Descrição**: Cria um novo usuário.
- **Corpo da Requisição:**

    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "password": "securepassword"
    }
    ```

- **Resposta:**

    ```json
    {
      "statuscode": 201,
      "message": "Usuario criado com sucesso!",
      "data": {
        "id": 2,
        "name": "Jane Doe",
        "email": "jane.doe@example.com"
      }
    }
    ```

### 3. Atualizar um Usuário

- **Método**: PUT
- **Endpoint**: `/api/users/:id`
- **Descrição**: Atualiza as informações de um usuário específico.
- **Parâmetros de URL**: 
  - `id` (Número): ID do usuário a ser atualizado.
- **Corpo da Requisição:**

    ```json
    {
      "name": "Jane Doe Updated",
      "email": "jane.doe.updated@example.com"
    }
    ```

- **Resposta:**

    ```json
    {
      "statuscode": 200,
      "message": "User updated successfully",
      "data": {
        "id": 2,
        "name": "Jane Doe Updated",
        "email": "jane.doe.updated@example.com"
      }
    }
    ```

### 4. Excluir um Usuário

- **Método**: DELETE
- **Endpoint**: `/api/users/:id`
- **Descrição**: Exclui um usuário específico.
- **Parâmetros de URL**: 
  - `id` (Número): ID do usuário a ser excluído.
- **Resposta:**

    ```json
    {
      "statuscode": 204,
      "message": "User deleted successfully",
      "data": null
    }
    ```
