        const menuIcon = document.querySelector(".menu-icon-bar");
        const menuMobile = document.querySelector(".menu-mobile");

        menuIcon.addEventListener("click", () => {
        menuMobile.classList.toggle("show");
        menuIcon.classList.toggle("active");

        if (menuMobile.classList.contains("show")) {
            menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
        });

        document.querySelectorAll(".menu-mobile a").forEach(link => {
        link.addEventListener("click", () => {
            menuMobile.classList.remove("show");
            menuIcon.classList.remove("active");
        });
        });