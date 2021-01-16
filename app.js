firstImage = document.querySelector(".slideshow li")
secondImage = document.querySelectorAll(".slideshow li")[1]
thirdImage = document.querySelectorAll(".slideshow li")[2]
p = document.getElementById("description")
firstImage.addEventListener("animationstart", firstImageInfo)
firstImage.addEventListener("animationiteration", firstImageInfo)
secondImage.addEventListener("animationstart", secondImageInfo)
secondImage.addEventListener("animationiteration", secondImageInfo)
thirdImage.addEventListener("animationstart", thirdImageInfo)
thirdImage.addEventListener("animationiteration", thirdImageInfo)


function firstImageInfo(){
    p.textContent = "What You Eat In Private Eventually Is What You Wear In PUBLIC, Eat Clean, Look Lean."
}
function secondImageInfo(){
    p.textContent = "Build Your Budy Create Your Life Style, FOCUS, Push Harder Than Yesterday If You Want A Different Tomorrow."
}
function thirdImageInfo(){
    p.textContent = "A Goal Without a Plan Is Just A Wich, MOTIVATION, TRACKING PROGRESS!"
}