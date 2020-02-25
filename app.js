fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
.then(response=>{
    return response.json()

}).then(data =>{
    console.log(data)
    
    const maindiv = document.getElementById('main')

    let elDiv = 
    
    data.abilities.forEach(abilities=>{
        console.log(abilities)
        let abilitdiv = document.createElement('div')
        ablilitdiv.innerHTML = '<div class "title">' + '</div><div>'
    })
    }); 