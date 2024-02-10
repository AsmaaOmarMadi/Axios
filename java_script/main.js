function getDataAxios(){
    axios 
    .get('https://dummyjson.com/products')
    .then((even) =>{
        const products = even.data.products;
        console.log(products);
         const {title,description,thumbnail ,price,images,id } = products;
        const result = products.map((item)=>{
            return `
            <div class="All">
            <h2>${item.title}</h2>
            <p>${item.price}</p>
            <div class="image_products">
            <a href="details.html?products_id=${item.id}" target = "_block"><img src="${item.thumbnail}" alt="" /></a>
            </div>
            <p>${item.description}</p> 
            </div>
            `;
           
        }).join('');
        
        document.querySelector(".products").innerHTML=result;
          
         
    })
}
getDataAxios();

