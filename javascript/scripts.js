function getData(countryname)
{
	console.log(countryname.value)
	const url='https://restcountries.eu/rest/v2/name/'.concat(countryname.value);

	document.getElementById("container").innerHTML='';

	fetch(url)
	.then(data => data.json())
	.then(res =>{
		console.log(res);
		res.forEach(temp=>{
		let card = document.createElement("div");

		let flag=document.createElement("img")
		flag.setAttribute('src',temp.flag);
		flag.setAttribute('height', '100px');
		flag.setAttribute('width', '100px');
		card.appendChild(flag);

        let name = document.createTextNode('Name:' + temp.name + ',   ');
        card.appendChild(name);

        let nativeName = document.createTextNode('nativeName:' + temp.nativeName + ',   ');
        card.appendChild(nativeName);

        let capital = document.createTextNode('capital:' + temp.capital+ ',   ');
        card.appendChild(capital);

        let numericCode = document.createTextNode('numericCode:' + temp.numericCode+ ',   ');
        card.appendChild(numericCode);

        let population = document.createTextNode('population:' + temp.population);
        card.appendChild(population);

        let container = document.querySelector("#container");
        container.appendChild(card);
    });
	})
	.catch(err => console.log("Error:", err));
}