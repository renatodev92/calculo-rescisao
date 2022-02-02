const despesaObj = require("./models/Despesas")
const Salario = require("./models/Salario")

let despesa = new despesaObj()

//console.log(`Essa é a despesa total mês de funcionarios R$: ${despesa.folhaPagamento().toFixed(2)}`)



let salarios = new Salario()
console.table(salarios.getAllSalarios())

console.log("FOLHA DE PAGAMENTO: ", despesa.folhaPagamento().toFixed(2))
console.log("CUSTO ANUAL RESTANTE: ", despesa.custoAnualRestante().toFixed(2))
console.log("CUSTO ANUAL: ", despesa.custoAnual().toFixed(2))
















