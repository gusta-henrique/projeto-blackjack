/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    const blackjack = () => {
      let fraseInicial = confirm('Boas vindas ao jogo Black Jack! \nQuer iniciar uma nova rodada?')
       if (fraseInicial === false) {
          alert('o jogo acabou')
  
          return
  
    }
    let usuario = []
    let computador = []
  
    if (blackjack) {
       let cartas = false
  
       while (!cartas) {
         let carta1Usuario = comprarCarta()
         usuario.push(carta1Usuario)
         let carta2Usuario = comprarCarta()
         usuario.push(carta2Usuario)
         let carta1Computador = comprarCarta()
         computador.push(carta1Computador)
         let carta2Computador = comprarCarta()
         computador.push(carta2Computador)
       
         let cartasIniciaisUsuario = carta1Usuario.valor + carta2Usuario.valor
         let cartasIniciaisComputador = carta1Computador.valor + carta2Computador.valor
       
       
         if (cartasIniciaisUsuario === 22 || cartasIniciaisComputador === 22) {
       
            usuario = []
            computador = []
         } else {
            cartas = true
       
         }
       }
    }
    let textoUsuario = ''
    let textoComputador = ''
    let pontoUsuario = 0
    let pontoComputador = 0
  
    for (let i = 0; i < usuario.length; i++) {
       textoUsuario += usuario[i].texto + " "
       pontoUsuario += usuario[i].valor
    }
  
    for (let i = 0; i < computador.length; i++) {
       textoComputador += computador[i].texto + " "
       pontoComputador += computador[i].valor
    }
  
    let comprar = true
  
    while (comprar) {
       if (pontoUsuario > 21) {
          break;
       }
       let outraCarta = confirm(`suas cartas são: ${ textoUsuario }. A carta revelada do computador é: ${ computador[0].texto}\n Deseja comprar mais uma carta ?`)
  
       if (outraCarta) {
          let carta = comprarCarta()
          usuario.push(carta)
          pontoUsuario += carta.valor
          textoUsuario += `${carta.texto}`
  
       } else {
          comprar = false
       }
    }
  
    while (pontoComputador <= pontoUsuario && pontoUsuario <= 21) {
       let carta = comprarCarta()
       computador.push(carta)
       pontoComputador += carta.valor
       textoComputador += `${carta.texto}`
    }
    
  
    let resultado = ""
    if(pontoUsuario > pontoComputador && pontoUsuario <= 21){
       resultado = 'o usuario ganhou!'
    }else if(pontoComputador > pontoUsuario && pontoComputador <= 21){
       resultado = 'o computador ganhou!'
    }else if(pontoUsuario > 21 && pontoComputador <= 21){
       resultado =  'computador ganhou'
    }else if (pontoComputador > 21 && pontoUsuario <= 21){
      resultado = 'usuario ganhou'
    }else if (pontoUsuario === pontoComputador || pontoComputador === pontoUsuario){
       resultado = 'empate'
    }
    alert(`Usuario - cartas: ${textoUsuario} - Pontuação:  ${pontoUsuario} \nComputador - cartas: ${textoComputador} - Pontuação:  ${pontoComputador} \n${resultado}`)
  }
  
  blackjack()
  