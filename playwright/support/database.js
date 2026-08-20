const { Pool } = require('pg')
const bcrypt = require('bcrypt')
const { faker } = require('@faker-js/faker')
const { ulid } = require('ulid')
const fs = require('fs')
const path = require('path')

require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
})

const TOTAL_USUARIOS = 4000
const SALT_ROUNDS = 10
const SENHA_PADRAO = 'pwd123'
const TAMANHO_LOTE = 200
const CSV_OUTPUT_PATH = path.join(__dirname, 'usuarios_gerados.csv')

function gerarEmail(nome, sobrenome, indice) {
    const nomeNormalizado = faker.helpers
        .slugify(`${nome}.${sobrenome}`)
        .toLowerCase()

    return `${nomeNormalizado}${indice}@testes.com`
}

function gerarCsv(usuarios) {
    const cabecalho = 'name,email,password'
    const linhas = usuarios.map(
        (usuario) => `${usuario.nome},${usuario.email},${SENHA_PADRAO}`
    )

    const conteudoCsv = [cabecalho, ...linhas].join('\n')

    fs.writeFileSync(CSV_OUTPUT_PATH, conteudoCsv, 'utf8')

    console.log(`CSV gerado em: ${CSV_OUTPUT_PATH}`)
}

async function insertTestUsers() {
    const client = await pool.connect()

    try {
        await client.query('BEGIN')

        const senhaCriptografada = await bcrypt.hash(SENHA_PADRAO, SALT_ROUNDS)

        const usuarios = []

        for (let i = 1; i <= TOTAL_USUARIOS; i++) {
            const primeiroNome = faker.person.firstName()
            const sobrenome = faker.person.lastName()

            usuarios.push({
                id: ulid(),
                nome: `${primeiroNome} ${sobrenome}`,
                email: gerarEmail(primeiroNome, sobrenome, i),
                senha: senhaCriptografada,
            })
        }

        for (let i = 0; i < usuarios.length; i += TAMANHO_LOTE) {
            const lote = usuarios.slice(i, i + TAMANHO_LOTE)

            const valores = []
            const placeholders = lote
                .map((usuario, idx) => {
                    const base = idx * 4
                    valores.push(usuario.id, usuario.nome, usuario.email, usuario.senha)
                    return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4})`
                })
                .join(', ')

            const query = `
                INSERT INTO users (id, name, email, password)
                VALUES ${placeholders}
            `

            await client.query(query, valores)
        }

        await client.query('COMMIT')

        gerarCsv(usuarios)

        console.log(`${TOTAL_USUARIOS} usuários de teste inseridos com sucesso.`)
    } catch (err) {
        await client.query('ROLLBACK')

        console.error('Erro ao inserir usuários de teste:', err)
    } finally {
        client.release()
    }
}

async function cleanupTestData() {
    const client = await pool.connect()

    try {
        await client.query('BEGIN')

        const query = `
            WITH usuarios_para_deletar AS (
                SELECT id
                FROM users
                WHERE email LIKE '%@testes.com'
            ),
            delete_links AS (
                DELETE FROM links
                WHERE user_id IN (
                    SELECT id
                    FROM usuarios_para_deletar
                )
            )
            DELETE FROM users
            WHERE id IN (
                SELECT id
                FROM usuarios_para_deletar
            );
        `

        await client.query(query)

        await client.query('COMMIT')

        console.log('Usuários e links de teste removidos com sucesso.')
    } catch (err) {
        await client.query('ROLLBACK')

        console.error('Erro ao remover dados de teste:', err)
    } finally {
        client.release()
    }
}

module.exports = { insertTestUsers, cleanupTestData }

if (require.main === module) {
    insertTestUsers()
        .then(() => pool.end())
        .catch((err) => {
            console.error('Falha ao executar insertTestUsers:', err)
            pool.end()
        })
}