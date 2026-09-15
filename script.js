//manual recipe input
document.getElementById("addIngredient").addEventListener("click", () => {
    const container = document.createElement("div");
    container.classList.add("ingredient");

    container.innerHTML = `
        <input class="name" type="text" placeholder="Ingredient Name">
        <input class="amount" type="number" placeholder="Amount">
        <input class="unit" type="text" placeholder="Unit (g, mL, cups)">
    `;
    document.getElementById("ingredients").appendChild(container);
});

//textarea recipe input
document.getElementById("examineRecipe").addEventListener("click", () => {
    const text = document.getElementById("recipeInput").value;
    const lines = text.split("\n");

    const ingredientsDiv = document.getElementById("ingredients")
    ingredientsDiv.innerHTML = "";
    
    lines.forEach(line => {
        if (line.trim() === "") return;

        //the basic pattern for inserting ingredients is "300g flour" or "300 g flour"
        if (!match) return;

        const amount = match[1];
        const unit = match[2] || "";
        const name = match[3];

        const row = document.createElement("div");
        row.classList.add("Ingredient");

        row.innerHTML = `
        <input class="name" type="text" value="${name}">
        <input class="amount" type="number" value="${amount}">
        <input class="unit" type="text" value="${unit}">
        `;
        ingredientsDiv.appendChild(row);
    });
});
//convert recipe amounts
document.getElementById("convert").addEventListener("click", () => {
    const original = Number(document.getElementById("original").value);
    const desired = Number(document.getElementById("desired").value);

    if (!original || !desired) {
        alert("Please enter both serving numbers.");
    }
})