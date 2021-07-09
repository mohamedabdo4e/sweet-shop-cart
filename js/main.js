const sweetss = document.querySelectorAll('.sweetss');
const input = document.querySelector('.search-input');
const baty = document.querySelectorAll('.baty');
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click',()=>{
    nav.classList.toggle('show');
})






baty.forEach((item)=>{
    item.addEventListener('click',()=>{
        baty.forEach(item=>{
            item.className = "baty";
        });
       
        item.className = "active";
        let values = item.textContent;
        sweetss.forEach(show=>{
            show.style.display = "none";
            if(show.getAttribute("data-id") === values || values === "all"){
                show.style.display = "block";
            }
        })

    })
})



input.addEventListener('keyup',(e)=>{
    const searchFilter = e.target.value.toLowerCase().trim();

    sweetss.forEach((item)=>{
        if(item.textContent.includes(searchFilter)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
})
      

     




























