
// 3rd party library -> saara data -> promise reutnrn
// axios - returns a promise and waits for the entire data at once


axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    console.log(response)
})
.catch(function(error){
    console.log(error)
})