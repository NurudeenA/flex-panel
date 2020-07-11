const panels = document.querySelectorAll(".panel");
const css = window.getComputedStyle(document.body);
const pElement = document.querySelectorAll("p");

function animatePanel() {
    const div = this.parentElement;
    const divClasses = Array.from(div.classList);

    const filterClasses = divClasses.filter(classes =>
        classes.includes("open")
    );

    if (filterClasses.includes("open")) {
        div.classList.remove("open-active", "open");
    } else {
        console.log(filterClasses);
        console.log(divClasses);
        div.classList.add("open-active", "open");
    }
}

pElement.forEach(p => p.addEventListener("click", animatePanel));
