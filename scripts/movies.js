// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var value = JSON.parse(localStorage.getItem("amount")) || []
var are = JSON.parse(localStorage.getItem("data"))||[]
document.getElementById("wallet").append(value);

function submit(){
    let movie = document.getElementById("").value

    let url = "https://imdb-api.com/api"
    fatch(url)
    .then(function(res){
        return res.JSON
    })
    .then(function(res){
        getdata(res.Search)
    })
    .catch(function(error){
        console.log(error)
    })

    function getdata(data){
        if(data===undefined){
            return false
        }
        data.map(function(elem){

        })
    }
}