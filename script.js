function myFunction() {
    let x = document.getElementById("myNavs");
    if (x.className === "nav-items") {
        x.className += " responsive";
    } else {
        x.className = "nav-items"
    }
}