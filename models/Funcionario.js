const Pessoa = require("./Pessoa")

class Funcionario extends Pessoa {
    constructor(data) {
        super(data)
        this.matricula = data.matricula
        this.dataAdmissao = data.dataAdmissao
        this.setor = data.setor
        this.cargo = data.funcao
        this.salario = data.salario
        this.valorHora = data.valorHora
        this.tipoContrato = data.tipoContrato
        this.codRecebimento = data.codRecebimento
        this.tipoProfessor = data.tipoProfessor
        this.cargaHoraria = data.cargaHoraria
    }
}

module.exports = Funcionario