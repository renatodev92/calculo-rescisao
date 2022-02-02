const funcionariosJson = require('../funcionarios.json')
const Funcionario = require('./Funcionario')
const SalarioMensalista = require("./salario/SalarioMensalista")
const SalarioP = require("./salario/SalarioProfessor")

class Salario {
    constructor(funcionario){
        this.funcionario = funcionario
        this.salarios = []
        this.inss = 11
        this.irrf = 7.5
    }
    getSalarioBruto(){
        if (this.funcionario.codRecebimento == 'P') {
            let professor = new SalarioP(this.funcionario)
            return professor.getSalarioBruto()
        }

        let mensalista = new SalarioMensalista(this.funcionario)
        return mensalista.getSalarioBruto()
    }

    getSalarioLiquido() {
        let valorInss = this.getSalarioBruto() / 100 * this.inss
        let valorIrrf = (this.getSalarioBruto() - this.inss) / 100 * this.irrf
        return this.getSalarioBruto() - valorInss - valorIrrf
    }

    getAllSalarios() {
        for (let i in funcionariosJson) {
            let funcionario = new Funcionario(funcionariosJson[i])
            let salario = new Salario(funcionario)

            this.salarios.push({
                funcionario: funcionario.name,
                idade: funcionario.getIdade(),
                salarioBruto: salario.getSalarioBruto().toFixed(2),
                salarioLiquido: salario.getSalarioLiquido().toFixed(2)
            })
        }

        return this.salarios
    }
}

module.exports = Salario