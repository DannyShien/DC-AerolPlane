// ===========================
// Global Cache
// ===========================


// ===========================
// Global Variable
// ===========================


// ===========================
// Constants
// ===========================


// ===========================
// DOM selection
// ===========================
const buttonElement = document.querySelector('[data-button]');

// ===========================
// Helper functions
// ===========================
function initiate(){
    console.log("Button is good, let's begin");
}



// ===========================
// Main event Listener
// ===========================
function main(){
    buttonElement.addEventListener('click', initiate) //initiate will be renamed according to the function that we want to call first
};

main();