//manual recipe input
document.getElementById("examineRecipe").addEventListener("click", () => {
    const container = document.createElement("div");
    container.classList.add("ingredient");

    container.innerHTML = `
        <input class="name" type="text" placeholder="Ingredient Name">
        <input class="amount" type="number" placeholder="Amount">
        <input class="unit" type="text" placeholder="Unit (g, mL, cups)">
    `;
    document.getElementById("ingredients").appendChild(container);
});