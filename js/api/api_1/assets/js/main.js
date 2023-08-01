/* 
async function getRandomUsr() { 
	const req = await fetch("https://pokeapi.co/api/v2/pokemon/");
	const data = await req.json();
	return data;
}
 */



async function allPokemones() {
	const uri = "https://pokeapi.co/api/v2/pokemon/";
	const baseUrl = await fetch(uri);
	const data = await baseUrl.json;
	console.log(data.length);

	for (let i = 0; i < (data.length); i++) {

		console.log("El valor del indice es: "+i+" ++++++");    //DEBUG 

		const elemento =+ data[i].names;
		const urlPok =  uri + i;
	 	if (!i === 10) {
			console.log("indice vale "+i);
			break;
		} 
		else {
			console.log(data.name);	
			console.log(urlPok);
			console.log("el indice es "+ i);
		return (elemento);
		}
	}

	
}

console.log(allPokemones());

/* 
const data = allPokemones();
console.log(typeof(data));

console.log(data); */

