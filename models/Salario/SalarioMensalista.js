class SalarioMensalista{
    constructor(funcionario){
        this.funcionario = funcionario
        

    }
    getSalarioBruto(){
        return this.funcionario.salario
    }
  
}

module.exports = SalarioMensalista