//index.js
(async() => {
    const db = require("./db");
    console.log("Start");
    console.log("select * from pessoa;");
    const pessoas = await db.selectPessoa();
    console.log("insert into pessoa");
    await db.insertPessoa({nome: "Fulano", cpf: "12345678900", email: "teste@teste.com"});
    console.log("select * from pessoa;");
    const pessoas = await db.selectPessoa();
    console.log("update pessoa");
    await db.updatePessoa({nome: "Fulano de Tal", cpf: "12345678910", email: "fulano@teste.com", idpessoa: "1"});
    console.log("select * from pessoa;");
    const pessoas = await db.selectPessoa();
    console.log("delete pessoa");
    await db.deletePessoa(1);
    console.log("select * from pessoa;");
    const pessoas = await db.selectPessoa();
    console.log(pessoas);
})();
