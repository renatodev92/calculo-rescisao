const Pessoa = require('./models/Pessoa')


const oliveira = new Pessoa(
    {
        "name": "Renato de Oliveira",
        "dataNascimento": "1992-11-24",
        "sexo": "Masculino",
        "cpf": "41616034874",
        "naturalidade": "Brasileiro",
        "valorHora": 94.54,
        "salario": 1500.01,
        "codRecebimento": "P",
        "tipoProfessor": "Mestre",
        "cargaHoraria": 80
    }
)

console.log(oliveira.getGenero())