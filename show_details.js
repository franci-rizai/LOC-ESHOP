       //for displaying the shirt 
       document.addEventListener("DOMContentLoaded", function() {
            // Parse URL query parameters
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);

            // Retrieve and display product details
            const productName = urlParams.get('name');
            const productPrice = urlParams.get('price');
            const productDescription = urlParams.get('description');
            const productSex = urlParams.get('sex');
            const productSizes = JSON.parse(urlParams.get('sizes'));
            
            const productImages = JSON.parse(urlParams.get('images'));

          const maindiv = document.querySelector('main');
          maindiv.innerHTML = `
          

            <div class="left-sec">
                <img src="${productImages[0]}">
            </div>
    
            <div class="right-sec">
                <p>${productPrice} $</p>
                
                <div class="size">
                    
                    <p>${productSizes[0]}</p>
                    <p>${productSizes[1]}</p>
                    <p>${productSizes[2]}</p>
                    <p>${productSizes[4]}</p>
                </div>
                <button>Προσθήκη στο καλάθι</button>
                <div class="product-info">
                    <h2>Πληροφορίες</h2>
<p>
    ${productDescription}

                </p>
                </div>
            </div>
           
    
        
          `;



           
        });

        //for feautured shirts under the shirt
        document.addEventListener("DOMContentLoaded", function() {
            // Fetch shirt data from JSON file
            fetch("shirt.json")
              .then(response => response.json())
              .then(data => {
                data.forEach(shirt => {
                  // Create a click event listener for each shirt
                  document.getElementById(shirt.name).addEventListener("click", function() {
                    // Construct URL with query parameters
                    const url = `details.html?name=${encodeURIComponent(shirt.name)}&price=${encodeURIComponent(shirt.price)}&description=${encodeURIComponent(shirt.description)}&sex=${encodeURIComponent(shirt.sex)}&sizes=${encodeURIComponent(JSON.stringify(shirt.sizes))}&colors=${encodeURIComponent(JSON.stringify(shirt.colors))}&images=${encodeURIComponent(JSON.stringify(shirt.images))}`;
                    // Redirect user to product detail page
                    window.location.href = url;
                  });
                });
              })
              .catch(error => {
                console.error("Error fetching shirt data:", error);
              });
          });
    
