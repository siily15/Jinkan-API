fetch('https://api.jikan.moe/v3')
    then(response=>{
        return response.json()
}).then(data =>{
    console.log(data)

    const anime = document.getElementById('anime')

    data.forEach(anime => {
        console.log(anime)
        let animeDiv = document.createElement('div')
        animeDiv.innerHTML = '<div class="title">' + anime.title  + '</div><div class=decription>' + anime.description + '</div>'
        anime.append(animeDiv)
    });

})