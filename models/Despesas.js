const funcionariosJson = require('../funcionarios.json')
const Funcionario = require('./Funcionario')
const Salario = require('./Salario')

class Despesas {
    constructor() {

    }

    folhaPagamento() {
        let folhaPagamento = 0;

        for (let i in funcionariosJson) {
            let funcionarioJson = funcionariosJson[i]
            let funcionario = new Funcionario(funcionarioJson)
            let salario = new Salario(funcionario)

            folhaPagamento = folhaPagamento + salario.getSalarioBruto()
        }
        return folhaPagamento
    }
    custoAnual() {
        return this.folhaPagamento() * 12
    }

    custoAnualRestante() {
        let today = new Date();
        let mesesRestantes = 12 - today.getMonth();
        return mesesRestantes * this.folhaPagamento()
    }




}

module.exports = Despesas