// READ the giphy API docs: https://developers.giphy.com/
// declare our vars and select elems
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_KEY = 'WGReRU5nj1TIWduFeSqO3hGyK87MNsVI'
var searchForm = document.querySelector('#search-form')
var searchInput = searchForm.querySelector ('input')
var results = document.querySelector(".results")




// define functions
function getGifs(){
    // console.log("Running get Gifs")
    $.ajax({
        url:`${giphy_endpoint}/gifs/${path}?api_key=${API_KEY}`
        type:"GET",
        dataType: "json",
        success: function(){

        },
        error: function(){

        },
    })
}




// call function and or addEventListener
searchForm.addEventListener('submit', function(event){
    event.preventDefault()
    getGifs()
})