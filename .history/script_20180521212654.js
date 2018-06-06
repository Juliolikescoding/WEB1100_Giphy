// READ the giphy API docs: https://developers.giphy.com/
// declare our vars and select elems
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'WGReRU5nj1TIWduFeSqO3hGyK87MNsVI'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector ('input')
var results = document.querySelector(".results")




// define functions
function getGifs(path, term){
    console.log(term)
    $.ajax({
        url:`${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}&q=${term}`,
        type:"GET",
        dataType: "json",
        success: function(data){

        },
        error: function(error){

        },
    })
}




// call function and or addEventListener
searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    getGifs('search', searchInput.value)
})