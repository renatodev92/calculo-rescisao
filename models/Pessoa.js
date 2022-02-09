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

    getGenero() {
        let txtSexoBras = (this.sexo == "Masculino") ? "brasileiro" : " brasileira";
        let txtSexoEst = (this.sexo == "Feminino") ? "estrangeiro" : "estrangeira";
        let txtEstranger = this.isForeign() ? txtSexoEst : txtSexoBras

        if (this.sexo == "Masculino") {
            return `Você é um homem de ${this.getIdade()} anos ${txtEstranger}.`
        }
        if (this.sexo == "Feminino") {
            return `Você é uma mulher de ${this.getIdade()} anos ${txtEstranger}.`
        }
        return `Digite um sexo certo, só aceitamos homens ou mulheres!`
    }
    isForeign() {
        if (this.naturalidade == "Brasileiro") {
            return false
        }
        return true
    }

}

module.exports = Pessoa