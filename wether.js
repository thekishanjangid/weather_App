
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6dc7ebe0d4mshb00af55a16b2e32p17027cjsncd85258506aa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getApi =async(city)=>{
    
    try {
        mycity.innerHTML =city
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const results = await response.text();
        const result=JSON.parse(results);
        console.log(result);
        temp.innerHTML = result.temp
        max.innerHTML =result.max_temp
        min.innerHTML =result.min_temp

        
    } catch (error) {
        console.error(error);
    }
    
}

submit.addEventListener('click' ,(e) =>{
    e.preventDefault()
    getApi(city.value)    
})
getApi("Delhi")


