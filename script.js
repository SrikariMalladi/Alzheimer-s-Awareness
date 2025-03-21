document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector("nav");
        navbar.classList.toggle("sticky", window.scrollY > 50);
    });

    // Mobile Menu Toggle
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("show");
    });

    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Counter Animation
    let counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        let updateCount = () => {
            let target = +counter.getAttribute('data-target');
            let count = +counter.innerText;
            let increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Scroll Reveal Animation
    function reveal() {
        document.querySelectorAll(".reveal").forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal();

    // Show/Hide Details for Alzheimer's Stages
    function showDetails(id) {
        let details = document.getElementById(id);
        if (details.style.display === "none" || details.classList.contains("hidden")) {
            details.style.display = "block";
            details.classList.remove("hidden");
        } else {
            details.style.display = "none";
            details.classList.add("hidden");
        }
    }
    // Form Submission
    document.getElementById("appointment-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload
    
        // Fetch form values
        let doctor = document.getElementById("doctor").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        let scan = document.getElementById("scan").files[0];
    
        // Validate inputs
        if (!doctor || !date || !time || !scan) {
            alert("Please fill in all fields and upload a scan.");
            return;
        }
    
        // Confirm booking
        alert(`Your appointment with ${doctor} on ${date} at ${time} is confirmed!`);
        
        // Here, you can send form data to a backend using Fetch API or AJAX
    });
    // Attach showDetails function to buttons dynamically
    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener("click", function () {
            let targetId = this.dataset.target; // Use data-target attribute
            showDetails(targetId);
        });
    });
});
