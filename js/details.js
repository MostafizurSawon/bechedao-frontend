const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("productId");
    console.log(param);
    fetch("https://bechedao-backend.onrender.com/products/Product-list/")
      .then((res) => res.json())
      .then((data) => displayDetails(data.results,param));
  
  };
  
  const displayDetails = (products,id) => {
    console.log(products);
    
    products?.forEach((product) => {
    
      if(product.id == id)
      {
        const categoryNames = product.category.join(', ');
        const parent = document.getElementById("product-details");
    
        const div = document.createElement("div");
    
        div.classList.add("container");
        
        div.innerHTML = `
        
        <div class="card">
        <img src=${product.image} class="card-img-top w-100" alt="...">
          <div class="card-header">
          <h4 class="ff-secondary text-primary fw-normal">Name: ${product.name}</h4>
          
          </div>
          <div class="card-body">
            <p class="ff-secondary text-primary fw-normal h5">Category: ${categoryNames}</p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Description: </span> ${product.description}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Authenticity: </span> ${product.authenticity}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Brand: </span> ${product.brand}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Model: </span> ${product.model}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Price: </span> ${product.price}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Sale status: </span> ${product.sold}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Owner: </span> ${product.user}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Owner Number: </span> ${product.mobile}
            </p>
            <p class="card-text">
            <span class="ff-secondary text-primary fw-normal">Negotiable: </span> ${product.Negotiable}
            </p>
          </div>
          <div class="card-footer">
          <p class="ff-secondary text-primary fw-normal text-center">
          <i class="fa-solid text-primary fa-clock-rotate-left me-2"></i>Created On: ${product?.created_on}
          </p>
          </div>
        </div>
      
            `;
    
        parent.appendChild(div);
      }
    });
  };

  getparams();