 fetch("featured_shirt.json")
        .then(response => response.json())
        .then(data => {
            // Iterate through each featured_shirt object
            data.forEach(featured_shirt => {
                let featured_shirtdiv = document.createElement('div');
                featured_shirtdiv.classList.add('product');
        
                let featured_shirthtml = `
                <div class="product-img-div" id="${featured_shirt.name}">
                    <img class="black-shirt-img" src="${featured_shirt.images[0]}">
                </div>
                <div>
                    <h4>${featured_shirt.name}</h4>
                </div>
                <div class="info-product">
                    <div>
                        <p class="sex">${featured_shirt.sex}</p>
                        <p>${featured_shirt.price}</p>
                    </div>
                    <div class="icon-div">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
                `;
        
                featured_shirtdiv.innerHTML = featured_shirthtml;
                document.getElementById('all-products').appendChild(featured_shirtdiv);
            });
        })
        .catch(error => {
            console.error("Error fetching featured_shirt data:", error);
        });
        