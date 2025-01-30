document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-grid img");
    images.forEach(image => {
        image.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="Zoomed Image">
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });

            modal.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.remove();
                }
            });
        });
    });

    const cartButtons = document.querySelectorAll(".shop-item button");
    cartButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    });
});

