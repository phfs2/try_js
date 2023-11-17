try {
    var num1 = parseInt(prompt('Informe o primeiro numero: '));
    var num2 = parseInt(prompt('Informe o segundo numero: '));

    var resultado = num1 - num2;

    alert('resultado = ' + resultado);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);

  } finally {
    alert("Código enncerrado!");
  }