const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");

// Open sidebar
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

// Optional: click outside sidebar to close
document.addEventListener("click", (e) => {
    if(sidebar.classList.contains("open") && !sidebar.contains(e.target) && e.target !== menuBtn){
        sidebar.classList.remove("open");
    }
});



