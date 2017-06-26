function getDataFromAPI(){
    var endpoint = "https://www.pokeapi.co/api/v2/pokemon/";
    
    // var inputElement = document.getElementById("search");
    // var value = inputElement.value;
    
    // var searchTerm = `name=${value}`
    // .replace(" ","")
    
    var url = endpoint;
    
    var galleryDiv = document.getElementById("gallery");
    var finalHTML = ''
    
    fetch(url)
        .then(function(results){
            return results.json()
        })
        .then(function(json){
            console.log(json)
            
            // var frontPic = document.getElementById("front")
            // frontPic.setAttribute("src", json.sprites.front_default)
            
            // var backPic = document.getElementById("back")
            // backPic.setAttribute("src", json.sprites.back_default)
            
            // var galleryDiv = document.getElementById("gallery");
            // var finalHTML = ''
            
            json.results.forEach(function(item){
                fetch(item.url)
                .then(function(data){
                    return data.json()
                })
                .then(function(json2){
                    console.log(json2)
                    finalHTML += `<img src="${json2.sprites.front_default}"/>`
                    
                    galleryDiv.innerHTML = finalHTML
                })
                .catch(function(error2){
                    console.log(error2)
                })
                console.log(finalHTML)
            })
        })
        .catch(function(error){
            console.log(error)
        })
    
    for(var i = 20; i < 800; i+=20){
        url = endpoint + '?offset=' + i;
        fetch(url)
        .then(function(results){
            return results.json()
        })
        .then(function(json){
            console.log(json)
            
            // var frontPic = document.getElementById("front")
            // frontPic.setAttribute("src", json.sprites.front_default)
            
            // var backPic = document.getElementById("back")
            // backPic.setAttribute("src", json.sprites.back_default)
            
            json.results.forEach(function(item){
                fetch(item.url)
                .then(function(data){
                    return data.json()
                })
                .then(function(json2){
                    console.log(json2)
                    finalHTML += `<img src="${json2.sprites.front_default}"/>`
                    
                    galleryDiv.innerHTML = finalHTML
                })
                .catch(function(error2){
                    console.log(error2)
                })
                console.log(finalHTML)
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}