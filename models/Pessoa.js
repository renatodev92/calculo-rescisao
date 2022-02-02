class Pessoa {
    constructor(data) {
        this.name = data.name
        this.dataNascimento = data.dataNascimento
        this.sexo = data.sexo
        this.cpf = data.cpf
        this.naturalidade = data.naturalidade
    }

    getIdade() {
        let today = new Date();
        let birthDate = new Date(this.dataNascimento);
        return today.getFullYear() - birthDate.getFullYear();
    }

}

module.exports = Pessoa