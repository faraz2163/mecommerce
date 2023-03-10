let categories;
fetch("https://api.escuelajs.co/api/v1/categories?limit=10")
  .then((res) => res.json())
  .then((categories) => {
    categories = categories
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

  let products;
fetch("https://api.escuelajs.co/api/v1/categories?limit=10")
  .then((response) => response.json()).then((products) => {
    products = products
    const temp = document.querySelector("#left-banner-products").content.querySelector(".col-md-6");
    products.forEach((product) => {
      const protemp = temp.cloneNode(true);
      const img = protemp.querySelector(".collection-img img");
      const heading3 = protemp.querySelector(".collection-banner-contain div h3");
      const heading4 = protemp.querySelector(".collection-banner-contain div h4");
      const aTag = protemp.querySelector(".collection-banner-contain div .btn-rounded");
      img.src = product.image;
      document.getElementById("inner-product").append(protemp);
      // let three = document.getElementById("inner-product").append(protemp);
      // three.slice(0,3);
    });
  });