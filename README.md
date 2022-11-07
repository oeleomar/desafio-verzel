# Teste para vaga Verzel

## Empresa: <a href="https://www.verzel.com.br/">Verzel</a>

Objetivo:

- [x] Criar um frontend em React, baseado no site <a href="https://www.kavak.com/br/carros-usados">Kavak</a>
- [x] No backend criar uma API Rest, com possibilidade de ler, criar, editar e deletar os Carros
- [x] Obrigatório autenticação via JWT (Json Web Token) na rota admin para criação, edição e apagar Carros.
- [x] Os veiculos mostrados deveriam estar ordenado por valor
- [x] Deverá ter os capos ID, NOME, MARCA, MODELO e FOTO
- [x] Adicionado campo Preço e ano

Avisos importantes:

- Para execução do projeto será necessário ter o <a href="https://nodejs.org/en/">NODE</a> instalado em sua maquina
- Também será necessário <a href="https://www.mongodb.com/try/download/community">MongoDB Community Server</a> instalado e rodando em sua máquina

Intruções:

Obs: É extremamente recomendado seguir o passo a passo

## Backend

1 - Com o node e o mongoDB instalados em sua maquina e já funcionando clone esse repositório
2 - Com o repositório clonado localmente em sua máquina, acesse a pasta backend
3 - Rode o comando " npm install " para instalar as dependências do projeto
4 - Abra o MongoBD Compass instalado junto com o MongoDB
5 - Caso não tenha instalado junto, só baixar e instalar <a href="https://www.mongodb.com/try/download/compass">aqui</a>
6 - Dentro do compass, clique em Databases e crie uma database chamada "car"
7 - Volte para a pasta backend, configure as variáveis de ambiente, para isso crie um arquivo chamado .env
8 - Nele você precisará configurar conforme o .example.env, colocando os valores após o "="
9 - Guarde bem o valor do ADMIN_USER e ADMIN_PASSWORD pois eles serão usados para autenticar no frontend
10 - Para pegar a url de conexão do mongoDB é mongodb://localhost:<\porta>/<\database>. Ex: mongodb://localhost:27017/car
11 - Após ter configurado todas as variáveis corretamente, instalado as dependencias, abra um terminar, navegue com ele até a pasta backend
12 - Inicie o projeto com " npm start "
13 - Caso tenha aparecido algum erro, confirme as variáveis do ambiente e se o mongoDB está instalado propriamente
14 - Caso a mensagem "Server iniciado no localhost" apareça em seu terminar o backend está rodando corretamente já

## Frontend

1 - Com o node já instalado e o repositório clonado
2 - Abra um terminal, navegue até a pasta frontend
3 - Execute o comando " npm install" para instalar as dependências
4 - Após ter instalado tudo corretamente, inicie o projeto com " npm start "
5 - No seu terminar vai aparecer um link de acesso, Ex: http://127.0.0.1:5173/
6 - Segure CTRL + Clique para abrir no navegador

## Instruções gerais

- A rota "url/" é a home page, onde aparece todos os carros cadastrados
- A rota " url/admin " é a rota de login para realizar a autenticação com os dados do ADMIN_USER e ADMIN_PASSWORD
- A rota " url/admin/home " é uma rota privada para criação, edição e delete dos carros

### End-Points

#### /car

- GET - Rota não privada, busca todos os carros ordenados por preço
- POST - Rota privada, requer JWT, cadastra o carro no banco de dados, e passa a foto para servidor local
- PUT - Rota privata, requer JWT, atualiza os dados do carro, e caso necessário apaga a foto antiga e inclui uma nova foto, alterações por ID
- DELETE - Rota privada, requer JWT, delete os registros e arquivos relacionado ao carro por ID

#### /admin

- POST - /admin/login - Rota de autenticação de usuário, verifica os valores digitados no frontend com os valores ADMIN_USER e ADMIN_PASSWORD do .env

### Dúvidas e Agradecimentos

Agradeço pela oportunidade, <a href="https://www.verzel.com.br/">Verzel</a> de estar enviando esse mini-projeto, acredito que a melhor forma de aprender é praticando, e tenho certeza que evolui muito resolvendo os eventuais bugs desse projeto.

Qualquer dúvida só entrar em contato via e-mail: eleomar.dev@gmail.com
Meu <a href="https://www.linkedin.com/in/eleomar-dorneles/">LinkedIn</a>
