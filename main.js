"use strict";

// SIDEBAR

const menuItems = document.querySelectorAll(".menu_item");
const notificationPopUp = document.querySelector(".notification_popup");
const notificationCount = document.querySelector(".notification_count");

// MESSAGES
const messagesNotifications = document.querySelector("#messages_notifications");
const messages = document.querySelector(".messages");
const messageNotificationCount = document.querySelector(
    ".messages_notification_count"
);

// Remove Box Shadow Onclick of Other Menu
const noMessagesBoxShadow = () => (messages.style.boxShadow = "none");

// ======================= SIDEBAR =======================

// Remove active class from all Menu Item
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

// Selecting one Menu Item at a time
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem(); //Call back function to remove 'active' from items
        item.classList.add("active"); //Adds active for each item clicked

        if (item.id != "notifications") {
            notificationPopUp.style.display = "none";
            noMessagesBoxShadow();
        } else {
            notificationPopUp.style.display = "block";
            notificationCount.style.display = "none";
            noMessagesBoxShadow();
        }
    });
});

// ======================= MESSAGES =======================

messagesNotifications.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 0.6rem #6633CC";
    messageNotificationCount.style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});
