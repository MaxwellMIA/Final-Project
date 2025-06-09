
function toggle() {
    const hideMe = document.getElementById("invisable");
    if (hideMe.style.visibility === "hidden") {
        hideMe.style.visibility = "visible"
    } else {
        hideMe.style.visibility = "hidden"
    }
}