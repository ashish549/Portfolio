//script


// ---------------Tab Content Functionality-------------------------
 document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.querySelectorAll(".tab-links");
    var tabcontents = document.querySelectorAll(".tab-contents");

    function openTab(tabname, event) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    // Attaching click event listeners to tab links
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function(event) {
            openTab(this.getAttribute("onclick").match(/'(.*?)'/)[1], event);
        });
    }
});

// ---------------------Form validation---------------------------------------------
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    const name = document.querySelector('input[name="Name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="Message"]').value;

    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

// -------------------------------------------pop up message----------------------------

    
    function handleFormSubmission(event) {
           event.preventDefault();
           const name = document.querySelector('input[name="Name"]').value;
           const email = document.querySelector('input[name="email"]').value;
           const message = document.querySelector('textarea[name="Message"]').value;
           alert(`Thank you, ${name}!\nYour message has been submitted.\nWe will contact you at ${email}.`);
           document.querySelector('form').reset();
       }
       document.querySelector('form').addEventListener('submit', handleFormSubmission);
