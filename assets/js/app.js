const getPj = async() =>{
    request = await axios('https://rickandmortyapi.com/api/character');
    results = request.data.results;
    console.log(results);
}

getPj();