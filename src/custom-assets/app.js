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
