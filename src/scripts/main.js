const colorNavItem = document.querySelectorAll(".colornav_list-item");
const imageIds= ["ImageSide", "imageMagSafe", "imageTop"];
const imageTypes= ["side", "magsafe", "top"];

colorNavItem.forEach(item =>{
    item.addEventListener("click", ()=>{
        const color = item.getAttribute("data-color");
        
        imageIds.forEach((id, index)=> {
            const imageElement= document.getElementById(id);

            if(imageElement){
                imageElement.src = `./src/images/colors/design_${imageTypes[index]}_${color}.jpg`;

            }

        })

        colorNavItem.forEach(navItem=> navItem.classList.remove("active"));

        item.classList.add("active");

    })

})
