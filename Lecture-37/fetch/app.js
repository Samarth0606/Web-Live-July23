


// most widely used technique for api calling 

// web api -> whcih returns a  promise

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    // response //meta data
    return response.json() //parses the data and returns a promise -> saare packets ka wait
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error)
})


// fetch() -> by default -> get -> promise return krta hai
// json() -> promise return krta hai (wait krta hai) +  pareses the data