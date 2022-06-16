app.component('product-details', {
    props: {
        details: {
            type: Array
        }
    },
    template:
    /*html*/
    `<div class="product-details">
        <div class="product-container">
            <p>Product details: {{ details }}</p>
        </div>
      </div>`,
    
})