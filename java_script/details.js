// const result_image = products.map((item) =>{
//     const resultImage = item.images.map((image) =>{
//         return`
//         <div class="arrayImage">
//         <img src="${image}" />
//         </div>
//         `;
//     }).join("");
//     return resultImage;
   
//    }).join('');
//  document.querySelector(".arrayofimage").innerHTML=result_image;
//  const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
    
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

async function getDataAxiosDetails(){
    console.log(window.location.search)
    const id = new URLSearchParams(window.location.search).get('products_id');
   const promise =   await axios .get(`https://dummyjson.com/products/${id}`);
   const data = promise.data;
   const {  title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images} = data;
   document.querySelector('h2').textContent = title;
   document.querySelector('h3').textContent = description;
   document.querySelector('h4').textContent = rating;

    const resultImage = images.map((image) =>{
        return`
        <div class="swiper-slide">
        <img src="${image}" />
        </div>
        `;
    }).join("");
    document.querySelector(".swiper-wrapper").innerHTML=resultImage;
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
         slidesPerView: 1,
      spaceBetween: 20,
      autoplay:true,//It works automatically

      clickable:true,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        
      });
 
  

}
getDataAxiosDetails();
