function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  function verificarNivel(saldo) {
    let nivel;
  
    switch (true) {
      case saldo >= 11 && saldo <= 20:
        nivel = "Bronze";
        break;
        case saldo >= 21 && saldo <= 50:
            nivel = "Prata";
        break;
        case saldo >= 51 && saldo <= 80:
            nivel = "Ouro";
        break;
        case saldo >= 81 && saldo <= 90:
        nivel = "Diamante";
        break;
        case saldo >= 91 && saldo <= 100:
        nivel = "Lendário";
        break;
        case saldo >= 101:
        nivel = "Imortal";
        break;
      default:
        nivel = "Ferro";
    }
  
    return nivel;
  }
  
  let vitorias = 15;
  let derrotas = 5;
  
  let saldo = calcularSaldo(vitorias, derrotas);
  let nivelDoJogador = verificarNivel(saldo);
  
  console.log(`O jogador tem saldo de ${saldo} o nível do jogador: ${nivelDoJogador}`);
  