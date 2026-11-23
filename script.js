
// SELECT ITEMS

const selectedName = document.getElementById("selected-name");
const selectedDescription = document.getElementById("selected-description");

document.querySelectorAll(".item").forEach(item => {

    item.addEventListener("click", () => {


        document.querySelectorAll(".item").forEach(i => {
            i.classList.remove("selected");
        });


        item.classList.add("selected");

        const name = item.dataset.name;
        const description = item.dataset.description;

        selectedName.textContent = name;
        selectedDescription.textContent = description;

    });

});




function updateItemCount() {

    const inventory = document.getElementById("inventory");
    const itemCount = document.getElementById("item-count");

    const totalItems = inventory.querySelectorAll(".item").length;

    itemCount.textContent = totalItems +
        (totalItems === 1 ? " item" : " items");

}




new Sortable(document.getElementById("inventory"), {

    group: "items",
    animation: 200,
    ghostClass: "dragging",

    onEnd: updateItemCount

});


new Sortable(document.getElementById("storage"), {

    group: "items",
    animation: 200,
    ghostClass: "dragging",

    onEnd: updateItemCount

});



updateItemCount();
