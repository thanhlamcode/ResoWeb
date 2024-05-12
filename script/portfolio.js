var create__right_item = document.querySelectorAll(".create__right--item");
var create__bottom__item = document.querySelectorAll(".create__bottom--item");
console.log(create__right_item);

create__right_item.forEach((item, index) => {
    item.addEventListener("click",()=>{
        create__right_item.forEach(otherItem => {
            otherItem.classList.remove("focus");
        });

        item.classList.add("focus");

        create__bottom__item.forEach(bottomItem => {
            bottomItem.classList.remove("display");
        });
        create__bottom__item[index].classList.add("display");
    })
});