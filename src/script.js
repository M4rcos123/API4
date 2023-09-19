//referencia DOM-HTML

const btnClique = document.getElementById('btnClique');
const lblValor = document.getElementById('lblValor');

const Nami = document.getElementById('Nami');
const btntemp = document.getElementById('btntempo');
const lbltempo = document.getElementById('lbltempo');
const lblcidade = document.getElementById('lblcidade');
const lblcond = document.getElementById('lblcond');

const btnDolar = document.getElementById('btnDolar');
const lblValorD = document.getElementById('iblValorD');

const btnEuro = document.getElementById('btnEuro');
const lblValorE = document.getElementById('lblValorE');

//lógica de programação

const api = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

const apitemp = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=ff781669&city_name='
})

const apiDolar = axios.create({
    baseURL:' https://economia.awesomeapi.com.br/last/USD-BRL'
})

const apiEuro = axios.create({
    baseURL:' https://economia.awesomeapi.com.br/last/EUR-BRL'
})

async function consulta(){
    const response = await api.get();
    lblValor.innerHTML = 'R$ ' + response.data.ticker.buy;
}

async function consultatemp(){
    const One = Nami.value;
    const responsetemp = await apitemp.get( One + ',RJ');
    console.log(responsetemp.data.results.condition_code);
    lblcidade.innerHTML = 'Cidade:' + responsetemp.data.results.city_name;
    lbltempo.innerHTML = 'temperatura:' + responsetemp.data.results.condition_code + '°';
    lblcond.innerHTML = 'condição:' + responsetemp.data.results.description;
    
}

async function consultaD(){
    const responseD = await apiDolar.get();
    console.log(responseD)
    IblValorD.innerHTML = 'R$ ' + responseD.data.USDBRL.ask;
}

async function consultaE(){
    const responseE = await apiEuro.get();
    lblValorE.innerHTML = 'R$' + responseE.data.EURBRL.ask;
}

btnClique.onclick = ()=>{
    consulta();
};

btntemp.onclick = ()=>{
    consultatemp();
}

btnDolar.onclick = ()=>{
    consultaD();
}

btnEuro.onclick = ()=>{
    consultaE(); 
}

