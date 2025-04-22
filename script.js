var tags = []

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function projectToggle(tag) {
    this.classList.toggle("pressed")
    if (this.classList.contains("pressed")) {
        if (!tags.includes(tag)) {tags.push(tag)}
    } else {
        tags = tags.filter(item => item !== tag)
    }
    updateProjects()
}

function updateProjects() {
    const projects = document.querySelectorAll(".project-container")
    projects.forEach(function (project, index) {
        let show = true;
        if (tags.length > 0) {
            show = false;
            tags.forEach(function (tag, index) {
                if (project.classList.contains(tag)) {
                    show = true;
                }
            })
        }
        project.classList.toggle("hide", !show);
    })
}