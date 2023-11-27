
function winAndLossRate(win, lose) {
    return win - lose;
}

function rankGenerator(ratePlayer) {

    if(ratePlayer < 0) {
        return "Negativo"
    }

    let winRate = Math.ceil(ratePlayer / 10)

    switch (winRate) {
        case 0:
        case 1:
            return "Ferro";
            break;
    
        case 2:
            return "Bronze";
            break;
    
        case 3:
        case 4:
        case 5:
            return "Prata";
            break;
    
        case 6:
        case 7:
        case 8:
            return "Ouro";
            break;
    
        case 9:
            return "Diamante";
            break;
    
        case 10:
            return "Lendário";
            break;
    
        default:
            return "Imortal";
            break;
    }
}

function messagePlayer(ratePlayer, rankPlayer) {
    console.log(`O Herói tem saldo de ${ratePlayer} está no nível de ${rankPlayer}`)
}

function init () {

    const vitories = 100;
    const defeats = 10;

    let ratePlayer = winAndLossRate(vitories, defeats);
    let rankPlayer = rankGenerator(ratePlayer);
    messagePlayer(ratePlayer, rankPlayer);

}

init();