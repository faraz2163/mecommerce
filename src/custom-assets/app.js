fetch("https://api.escuelajs.co/api/v1/categories?limit=10")
  .then((res) => res.json())
  .then((categories) => {
    const template = document
      .querySelector("#NavigationCategoryListing")
      .content.querySelector("li");
    categories.forEach((category) => {
      const tempTemplate = template.cloneNode(true);
      const anchor = tempTemplate.querySelector(".category-link");
      anchor.setAttribute("href", "#");
      anchor.querySelector("span").innerHTML = category.name;
      anchor.querySelector("img").src = category.image;
      document.getElementById("NavCatgegoriesUL").append(tempTemplate);
    });        
  });


fetch("https://api.escuelajs.co/api/v1/categories?limit=3")
  .then((response) => response.json()).then((products) => {
    const temp = document.querySelector("#BannerCollection").content.querySelector(".col-xl-12");
    products.forEach((product) => {
      const dyncollection = temp.cloneNode(true);
      dyncollection.querySelector("img").src = product.image;
      dyncollection.querySelector("h3").innerHTML = product.name;
      document.getElementById("DynBannerCollection").append(dyncollection);
    });
  });
  
