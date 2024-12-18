// Get elements
// const popup = document.querySelector(".popups7");
// const closeButtons = document.querySelectorAll(
//   ".popups-close, .popups-close-top"
// );

// // Open the pop-up (example trigger)
// document.addEventListener("DOMContentLoaded", () => {
//   popup.style.display = "block";
// });

// // Close the pop-up on button click
// closeButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     popup.style.display = "none";
//   });
// });

// // Open and close pop-ups dynamically
// document.addEventListener("click", function (event) {
//     // Open the popup when an element with data-popup-open is clicked
//     if (event.target.matches("[data-popup-open]")) {
//       const popupSelector = event.target.getAttribute("data-popup-open");
//       const popup = document.querySelector(popupSelector);
//       if (popup) {
//         popup.style.display = "block"; // Show the popup
//       }
//     }
  
//     // Close the popup when an element with data-popup-close is clicked
//     if (event.target.matches("[data-popup-close], .popups-close, .popups-close-top")) {
//       const popupSelector = event.target.getAttribute("data-popup-close");
//       if (popupSelector) {
//         const popup = document.querySelector(popupSelector);
//         if (popup) {
//           popup.style.display = "none"; // Hide the popup
//         }
//       }
//     }
//   });
  
//   // Example: Automatically open the first popup on page load
//   document.addEventListener("DOMContentLoaded", () => {
//     const popup = document.querySelector("#popup1"); // Automatically open popup1
//     if (popup) popup.style.display = "block";
//   });
  
// Close all popups when the "END_THE_MADNESS.exe" button is clicked
document.getElementById("endTheMadness").addEventListener("click", function () {
    const popups = document.querySelectorAll(".popups7"); // Select all popups
    popups.forEach(popup => {
      popup.style.display = "none"; // Hide each popup
    });
  
    // Optionally, you can reset any popup-specific elements here
    // Example: Resetting content or state if needed
    // document.querySelector("#popup1").reset(); 
    document.getElementById("virusButton").style.display = "block";
  });
  

// Open and close pop-ups dynamically
document.addEventListener("click", function (event) {
    // Open popup1 when the virus button is clicked
    if (event.target.matches("#virusButton img")) {
      const popup1 = document.querySelector("#popup1");
      if (popup1) {
        popup1.style.display = "block"; // Show popup1
        document.querySelector("#virusButton").style.display = "none"; // Hide virus button when popup1 is shown
      }
    }
  
    // Open the popup when an element with data-popup-open is clicked
    if (event.target.matches("[data-popup-open]")) {
      const popupSelector = event.target.getAttribute("data-popup-open");
      const popup = document.querySelector(popupSelector);
      if (popup) {
        popup.style.display = "block"; // Show the popup
      }
    }
  
    // Close the popup when an element with data-popup-close is clicked
    if (event.target.matches("[data-popup-close], .popups-close, .popups-close-top")) {
      const popupSelector = event.target.getAttribute("data-popup-close");
      if (popupSelector) {
        const popup = document.querySelector(popupSelector);
        if (popup) {
          popup.style.display = "none"; // Hide the popup
          if (popup.id === "popup1") {
            // Show the virus button when popup1 is closed
            document.querySelector("#virusButton").style.display = "block";
          }
        }
      }
    }
  });
  
  // Example: Automatically open popup1 on page load
  document.addEventListener("DOMContentLoaded", () => {
    const popup1 = document.querySelector("#popup1");
    if (popup1) popup1.style.display = "block"; // Automatically open popup1
  });
  