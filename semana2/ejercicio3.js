const { ask } = require('../helpers/input');


async function main(){



    const palabraAlReves = await ask ('Escribe una palabra ');
    let resultado = "";

    for (let c = palabraAlReves.length - 1; c >= 0; c--){
        resultado = resultado + palabraAlReves[c];
    }
    console.log(resultado);
}
main();