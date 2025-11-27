// minimal script for mobile nav or active link highlight
document.addEventListener('DOMContentLoaded', function(){
  var links = document.querySelectorAll('.nav a');
  links.forEach(function(a){
    if(a.href === location.href || (a.getAttribute('href') && location.pathname.endsWith(a.getAttribute('href')))){
      a.classList.add('active');
    }
  });
});
document.getElementById("videoThumb").onclick = function() {
  document.getElementById("videoThumb").style.display = "none";
  document.getElementById("videoFrame").classList.remove("hidden");
  
  document.getElementById("youtubePlayer").src =
    "https://www.youtube.com/embed/JAdTjHsOid0?autoplay=1";
};
function toggleMenu() {
  document.querySelector(".nav-wrapper").classList.toggle("open");
}


