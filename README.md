## E aí, tranquilo?!

> ⚠️ Esse README possui uma comunicação passivo-agressiva a fim de 
> chamar sua atenção para lê-lo até o fim. Não escrevemos isso aqui a toa, né?!

Para os afobadinhos, CALMA! Antes de rodar nosso projeto, é importante que você
verifique se atende aos requisitos:

1.  [JSON Server](https://github.com/typicode/json-server)
    1. Esse cara possibilitou a criação de um backend fake! Assim, conseguimos
       realizar requisições HTTP para consumir nossa base de
       dados. Adicionamos como 
       dependencia do projeto em nosso package.json, então ao instalar o NPM,
       esse pacote já irá vir. Mas vale citá-lo aqui pois foi 
       extremamente útil!
    2. Antes de rodar o projeto, vá até ao terminal e se certifique de estar 
       no caminho correto: ``src/app/database``. Com isso, basta apenas 
       rodar o comando: ``json-server fake-data.db.json`` para iniciar o 
       servidor a partir do arquivo que servirá como banco de dados.
