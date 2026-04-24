document.getElementById("tous").addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton 'Tous'");
});
document.getElementById("autres1").addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton 'Classique'");
});
document.getElementById("autres2").addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton 'Philosophie'");
});
document.getElementById("autres3").addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton 'Science-fiction'");
});
document.getElementById("autres4").addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton 'Fantasy'");
});



const barreElement = document.getElementById("barre");
barreElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        alert(event.target.value.trim());
        event.preventDefault();
    }

});
