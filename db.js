//db.js
async function connect() {
    if (global.connection && global.connection.state != "disconnected")
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:password@localhost:3306/crud");
    console.log("Conectou!");
    global.connection = connection;
    return connection;
}

async function selectPessoa() {
    const conn = await connect();
    const [rows] = await conn.query("select * from pessoa");
    return await rows;
}

async function insertPessoa(pessoa) {
    const conn = await connect();
    const sql = "insert into pessoa(nome, cpf, email) values (?, ?, ?)";
    const values = [pessoa.nome, pessoa.cpf, pessoa.email];
    return await conn.query(sql, values);
}

async function updatePessoa(pessoa) {
    const conn = await connect();
    const sql = "update pessoa set " +
            "nome = ?, " +
            "cpf = ?, " +
            "email = ? " +
        "where " +
            "idpessoa = ?";
    const values = [pessoa.nome, pessoa.cpf, pessoa.email, pessoa.idpessoa];
    return await conn.query(sql, values);
}

async function deletePessoa(idpessoa) {
    const conn = await connect();
    const sql = "delete from pessoa " +
        "where " +
            "idpessoa = ?";
    return await conn.query(sql, idpessoa);
}


module.exports = {selectPessoa, insertPessoa, updatePessoa, deletePessoa};