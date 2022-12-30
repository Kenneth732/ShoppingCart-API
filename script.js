// fetch method:it is define   on the windo object, which
// we can use to perfoem request 

// this method will return promisee...
// Promises will either be fullfilled or reject
fetch('https://fakestoreapi.com/products')

.then((data) =>{
    return data.json();
}).then((completedata) =>{
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML = completedata[2].title;
    let data1 ="";
    completedata.map((values)=>{
        data1+= `
        <div class="card">
           <h1 class="title">${values.title}</h1>
           <img src="${values.image}" alt="" class="images">
           <p>${values.description}</p>
           <p class="category">${values.category}</p>
           <p class="price">${values.price}</p>
        </div>
        `;
    })
    document.querySelector('#cards').innerHTML= data1;
}).catch((err) => {
    console.log(err)
})