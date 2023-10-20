function calcularRendimento() {
    // Obter os valores inseridos pelo usuário
    var tempo = document.getElementById("tempo").value;
    var valorInicial = document.getElementById("valor-inicial").value;

    // Verificar se os valores são válidos
    if (tempo === "" || valorInicial === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Calcular o rendimento com base na taxa de juros de 10%
    var taxaJuros = 0.10;
    var valorFinal = valorInicial * Math.pow(1 + taxaJuros, tempo);

    // Exibir o resultado
    document.getElementById("resultado").innerText = "O valor final após " + tempo + " meses será R$" + valorFinal.toFixed(2);
  }