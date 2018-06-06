// READ the giphy API docs: https://developers.giphy.com/
// declare our vars and select elems
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'WGReRU5nj1TIWduFeSqO3hGyK87MNsVI'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector ('input')
var results = document.querySelector(".results")




// define functions
function getGifs(path, term){

    $.ajax({
        url:`${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        type:"GET",
        dataType: "json",
        success: function(data){
            console.log(data)
            for(var i=0; i<data.data.length; i++){
                results.innerHTML +=`
                <images class="image" src="${data.data[i].images.preview_gif.url}">
                `
            }
        },
        error: function(error){
            console.log("There was an error")
        },
    })
}




// call function and or addEventListener
searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    getGifs('search', searchInput.value)
})