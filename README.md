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
