const areaLinks = document.getElementsByClassName('.area-links');
if (window.innerWidth >= 1025) {
  areaLinks.classList.remove('area-links');
} else{
    areaLinks.classList.add('area-links');
}
