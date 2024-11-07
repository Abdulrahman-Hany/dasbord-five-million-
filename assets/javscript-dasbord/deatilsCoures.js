/* Sidebar toggle */
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-menu");
toggleBtn.addEventListener("click", (event) => {
  sidebar.classList.toggle("active");
  // Toggle body scroll based on sidebar state
  if (sidebar.classList.contains("active")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  event.stopPropagation(); // Stop propagation to prevent closing sidebar
});
// Add click event to all 'nav-link' elements
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    // e.preventDefault(); // Prevent page reload
    // Remove 'active' class from all 'nav-link' and 'nav-sublink' elements
    document
      .querySelectorAll(".nav-link.active, .nav-sublink.active")
      .forEach((activeLink) => {
        activeLink.classList.remove("active");
      });

    // Add 'active' class to the clicked element
    this.classList.add("active");

    // Toggle visibility of sub-items
    const subItems = this.closest("li").nextElementSibling;
    if (subItems) {
      subItems.classList.toggle("show");
    }
  });
});
// Close sidebar when clicking outside of it
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    document.body.classList.remove("no-scroll"); // Restore scroll
  }
});
const avatarWrapper = document.querySelector(".avatar-wrapper");
const logoutContainer = document.querySelector(".logout-container");
avatarWrapper.addEventListener("click", () => {
  logoutContainer.classList.toggle("active");
});
/* Notification */
const notificationsContainerNotiations = document.querySelector(
  ".notifications-container-notiations"
);
const notificationIconSide = document.querySelector(".notification-icon-side");

notificationIconSide.addEventListener("click", (event) => {
  notificationsContainerNotiations.classList.toggle("active");

  event.stopPropagation(); // Stop propagation to prevent closing sidebar
});

/* ===============page-notfiactions =============== */
/* input type button handling */
const buttons = document.querySelectorAll(".notification-type-button");
const formInput = document.querySelector(".form-input");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Toggle form input visibility based on button type
    if (button.classList.contains("two")) {
      formInput.style.display = "none"; // Hide input
    } else {
      formInput.style.display = "block"; // Show input
    }
  });
});
// Select various DOM elements related to notifications and complaints
const navLinkNotifications = document.querySelector(".nav-link.notifications");
const messagesCard = document.querySelector(".stats-card.messages-card");
const notificationFormContainer = document.querySelector(".notification-form-container");
const inboxContainer = document.querySelector(".inbox-container");
const bannedcCard = document.querySelector(".stats-card.banned-card");
const bannedStudentsContainer = document.querySelector(".banned-students-container-block");
const blocksCard = document.querySelector(".stats-card.blocks-card");
const complaintsContainer = document.querySelector(".complaints-container-complaint");
// Event listeners to handle toggling different sections based on card clicks
navLinkNotifications.addEventListener("click", () => {
  bannedStudentsContainer.classList.remove("active");
  complaintsContainer.classList.remove("active");
  inboxContainer.classList.remove("active");
});
messagesCard.addEventListener("click", () => {
  notificationFormContainer.classList.add("active");
  bannedStudentsContainer.classList.remove("active");
  complaintsContainer.classList.remove("active");
  inboxContainer.classList.add("active");
});
bannedcCard.addEventListener("click", () => {
  notificationFormContainer.classList.add("active");
  inboxContainer.classList.remove("active");
  complaintsContainer.classList.remove("active");
  bannedStudentsContainer.classList.add("active");
});
blocksCard.addEventListener("click", () => {
  notificationFormContainer.classList.add("active");
  inboxContainer.classList.remove("active");
  bannedStudentsContainer.classList.remove("active");
  complaintsContainer.classList.add("active");
});

// Elements and actions related to complaint responses
const complaintResponseComplaints = document.querySelectorAll(".complaint-response-complaint");
const complaintResponseReplies = document.querySelectorAll(".complaint-response-reply");
const userInfoReplies = document.querySelectorAll(".user-info-reply .user-icon-reply.close");
const cancelBtnReply = document.querySelectorAll(".cancel-btn-reply");
const submitBtnReply = document.querySelectorAll(".submit-btn-reply");
const textareaReply = document.querySelectorAll(".textarea-container-reply textarea");

const bluers = document.querySelectorAll(".bluer");
// When you click on the item, bluer appears and the page scrolls up
complaintResponseComplaints.forEach((complaintResponse) => {
  complaintResponse.addEventListener("click", (event) => {
    event.stopPropagation();
    bluers.forEach((bluer) => {
      bluer.classList.add("active");
    });
    complaintResponseReplies.forEach((complaintResponseReply) => {
      complaintResponseReply.classList.add("active");
    });
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  });
});

// Add an event listener for each element in userInfoReplies
userInfoReplies.forEach((userInfoReply) => {
  userInfoReply.addEventListener("click", () => {
    complaintResponseReplies.forEach((complaintResponseReply) => {
      complaintResponseReply.classList.remove("active");
    });
    bluers.forEach((bluer) => {
      bluer.classList.remove("active");
    });
  });
});
// When the cancel button is pressed
cancelBtnReply.forEach((cancelBtnReplys, index) => {
  cancelBtnReplys.addEventListener("click", () => {
    complaintResponseReplies[index].classList.remove("active");
    bluers.forEach((bluer) => {
      bluer.classList.remove("active");
    });
    // Delete the text in the textarea associated with the button
    textareaReply[index].value = ""; 
  });
});

submitBtnReply.forEach((submitBtn, index) => {
  submitBtn.addEventListener("click", () => {
    const textarea = textareaReply[index]; // Use the index to link the button to the correct text

    if (textarea.value.trim() !== "") {
      //Check if there is text
      // Create the new item to add a response to the complaint
      const responseDiv = document.createElement("div");
      responseDiv.classList.add("complaint-done");
      responseDiv.innerHTML = `
    <p>تم الرد على الشكوي</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2.08301 10C2.08301 6.26806 2.08301 4.40209 3.24237 3.24271C4.40175 2.08334 6.26772 2.08334 9.99967 2.08334C13.7316 2.08334 15.5976 2.08334 16.757 3.24271C17.9163 4.40209 17.9163 6.26806 17.9163 10C17.9163 13.7319 17.9163 15.5979 16.757 16.7573C15.5976 17.9167 13.7316 17.9167 9.99967 17.9167C6.26772 17.9167 4.40175 17.9167 3.24237 16.7573C2.08301 15.5979 2.08301 13.7319 2.08301 10Z" stroke="#EFFEF3" stroke-width="1.25"/>
      <path d="M6.66699 10.4167L8.75033 12.5L13.3337 7.5" stroke="#EFFEF3" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
      // Find the time element
      const parentArticle = submitBtn.closest(
        ".complaint-response-reply"
      ).previousElementSibling; // Access the appropriate article

      // Find the time element
      const complaintTimestamp = parentArticle.querySelector(
        ".complaint-timestamp-complaint"
      );
      if (complaintTimestamp) {
        // Replace the time element with the new element
        complaintTimestamp.replaceWith(responseDiv);
      }
      //Delete the text in the textarea after sending
      textarea.value = "";
      // Save the item to localStorage
      let existingComplaints =
        JSON.parse(localStorage.getItem("complaints")) || [];
      // Check that the response does not have the same content
      if (!existingComplaints.includes(responseDiv.innerHTML)) {
        existingComplaints.push(responseDiv.innerHTML); // Store the new content
        localStorage.setItem("complaints", JSON.stringify(existingComplaints));
      } else {
        console.log("The response already exists.");
      }
    }
  });
});

// When pressed elsewhere, bluer is hidden
document.addEventListener("click", (event) => {
  //Check if the compressed element is complaintResponseReply
  if (!event.target.closest(".complaint-response-reply")) {
    bluers.forEach((bluer) => {
      bluer.classList.remove("active");
    });
    complaintResponseReplies.forEach((complaintResponseReply) => {
      complaintResponseReply.classList.remove("active");
    });
  }
});

/* File upload handling */
const fileInput = document.getElementById("fileInput");
const fileUploadInstruction = document.querySelector(
  ".file-upload-instruction"
);
const fileUploadButton = document.querySelector(".file-upload-button");

// Trigger file input on instruction click
fileUploadInstruction.addEventListener("click", () => {
  fileInput.click();
});

// Trigger file input on button click
fileUploadButton.addEventListener("click", () => {
  fileInput.click();
});

// Handle file input change event
fileInput.addEventListener("change", (event) => {
  const files = event.target.files;

  // Log file names to console
  Array.from(files).forEach((file) => {
    console.log(file.name);
  });
});
