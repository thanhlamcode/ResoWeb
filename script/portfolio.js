var create__right_item = document.querySelectorAll(".create__right--item");

console.log(create__right_item);

create__right_item.forEach(item => {
    item.addEventListener("click",()=>{
        create__right_item.forEach(otherItem => {
            otherItem.classList.remove("focus");
        });

        item.classList.add("focus");
    })
});