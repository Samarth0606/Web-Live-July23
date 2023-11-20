

let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click' , function(){
    let searchText = input.value;
    fetchData(searchText);
    input.value = "";
})

function fetchData(searchText){
    // fetch
    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        // console.log(data);
        manipulateDom(data);
    })
    // axios
    // axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    // .then(function(response){
    //     console.log(response.data)
    //     manipulateDom(response.data);
    // })
}

function manipulateDom(allthedata){
    // to remove the already present movies
    while(list.firstChild){
        list.firstChild.remove();
    }


    for(let data of allthedata){
        let figure = document.createElement('figure');
        figure.innerHTML = `
            <img src=${data.show.image.medium}  />
            <h2> Name: ${data.show.name} </h2>
            <h5> Language: ${data.show.language} </h5>
        `
        list.appendChild(figure);
    }
}
