### Como rodar ?

Para executar, é necessário subir uma instancia de banco de dados e gerar a migração de banco

```sh
    docker-compose up -d
    yarn migrate
    yarn dev
```


### Como gerar uma nova classe

Para gerar uma classe de migration voce precisa gerar uma nova classe pelo CLI
voce deve substituir o <NomeDaClasse> e os atributos <firstName:string,lastName:string,email:string>

```sh
npx sequelize-cli model:generate --name <NomeDaClasse> --attributes <firstName:string,lastName:string,email:string>
```

Ultimo passo seria sincronizar as tabelas no banco de dados propriamente dito

```sh
    docker-compose up -d
    yarn migrate
    yarn dev
```

