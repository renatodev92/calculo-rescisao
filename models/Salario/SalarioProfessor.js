class SalarioProfessor {
    constructor(funcionario) {
        this.funcionario = funcionario
    }

    salarioBruto() {
        return (this.funcionario.valorHora + this.horaAtividade() + this.dsr())
    }

    dsr() {
        return this.funcionario.valorHora / 6
    }
    horaAtividade() {
        return (this.funcionario.valorHora + this.dsr()) / 100 * 5

    }
    adicionalMestre() {
        return (this.funcionario.valorHora + this.dsr() + this.horaAtividade()) / 100 * 10
    }
    adicionalDoutor() {
        return (this.funcionario.valorHora + this.dsr() + this.horaAtividade()) / 100 * 20
    }

    salarioComposto() {
        if (this.funcionario.tipoProfessor == "Mestre") {
            return this.salarioBruto() + this.adicionalMestre()
        }

        if (this.funcionario.tipoProfessor == "Doutor") {
            return this.salarioBruto() + this.adicionalDoutor()
        }

        return this.salarioBruto()
    }

    getSalarioBruto() {
        return this.salarioComposto() * this.funcionario.cargaHoraria
    }

    
}

module.exports = SalarioProfessor