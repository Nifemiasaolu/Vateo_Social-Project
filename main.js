"use strict";

// SIDEBAR
const menuItems = document.querySelectorAll(".menu_item");
const notifications = document.querySelector("#notifications");
const notificationPopUp = document.querySelector(".notification_popup");
const notificationCount = document.querySelector(".notification_count");
const body = document.querySelector("body");

// MESSAGES
const messagesNotifications = document.querySelector("#messages_notifications");
const messages = document.querySelector(".messages");
const messageNotificationCount = document.querySelector(
    ".messages_notification_count"
);
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message_search");
// Remove Box Shadow Onclick of Other Menu
const noMessagesBoxShadow = () => (messages.style.boxShadow = "none");

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize_theme");
const fontSizes = document.querySelectorAll(".font_size span");
const root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose_color span");
const Bg1 = document.querySelector(".bg_1");
const Bg2 = document.querySelector(".bg_2");
const Bg3 = document.querySelector(".bg_3");

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

        if (item.id === "notifications") {
            notificationPopUp.style.display = "block";
            notificationCount.style.display = "none";
            messages.style.display = "none";
            noMessagesBoxShadow();
            themeModal.style.display = "none";
        } else if (item.id === "messages_notifications") {
            messages.style.display = "block";
            notificationPopUp.style.display = "none";
            themeModal.style.display = "none";
        }  else {
            notificationPopUp.style.display = "none";
            messages.style.display = "none";
            noMessagesBoxShadow();
            themeModal.style.display = "none";
            const closeThemeModal = (e) => {
                if (e.target.classList.contains("body")) {
                    themeModal.style.display = "none";
                }
            };
            themeModal.addEventListener("click", closeThemeModal);
        }
    });
});

// Close Notification Messages
const closeNotificationMessages = (c) => {
    if(c.target.classList.contains('body')) {
        notificationPopUp.style.display = 'none';
    }
}
notificationPopUp.addEventListener('click', closeNotificationMessages);

// ======================= MESSAGES =======================
// Highlight messages card when messages menu item is clicked
messagesNotifications.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 0.6rem #6633CC";
    messageNotificationCount.style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// Search Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((chat) => {
        const name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};
messageSearch.addEventListener("keyup", searchMessage);

// ======================= THEME/DISPLAY CUSTOMIZATION =======================
// opens modal
const openThemeModal = () => {
    themeModal.style.display = "grid";
};
theme.addEventListener("click", openThemeModal);

// close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains("body")) {
        themeModal.style.display = "none";
    }
};
themeModal.addEventListener("click", closeThemeModal);

// ======================= FONTS =======================
// Remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};

fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        let fontSize;
        removeSizeSelector();
        size.classList.toggle("active");

        if (size.classList.contains("font_size_1")) {
            fontSize = "10px";
            root.style.setProperty("$sticky-top-left", "5.4rem");
            root.style.setProperty("$sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font_size_2")) {
            fontSize = "13px";
            root.style.setProperty("$sticky-top-left", "5.4rem");
            root.style.setProperty("$sticky-top-right", "-7rem");
        } else if (size.classList.contains("font_size_3")) {
            fontSize = "16px";
            root.style.setProperty("$sticky-top-left", "-2rem");
            root.style.setProperty("$sticky-top-right", "-17rem");
        } else if (size.classList.contains("font_size_4")) {
            fontSize = "19px";
            root.style.setProperty("$sticky-top-left", "-5rem");
            root.style.setProperty("$sticky-top-right", "-25rem");
        } else if (size.classList.contains("font_size_5")) {
            fontSize = "22px";
            root.style.setProperty("$sticky-top-left", "-12rem");
            root.style.setProperty("$sticky-top-right", "-35rem");
        }

        // Change font size of the root html elements
        document.querySelector("html").style.fontSize = fontSize;
    });
});

// ======================= COLORS ======================
// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach((colorPicker) => {
        colorPicker.classList.remove("active");
    });
};
// Change primary colors
colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        let primaryHue;
        changeActiveColorClass();

        if (color.classList.contains("color_1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color_2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color_3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color_4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color_5")) {
            primaryHue = 282;
        }

        color.classList.add("active");

        root.style.setProperty("--primary-hue", primaryHue);
    });
});

// ======================= THEME BACKGROUND ======================
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Change background color
const changeBG = () => {
    root.style.setProperty("--light-color-lightness", lightColorLightness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener("click", () => {
    // Add active class
    Bg1.classList.add("active");

    // Remove active classs
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    // Remove customized changes from local storage
    window.location.reload();
});
Bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    Bg1.style.color = "black";
    Bg1.style.backgroundColor = "#fff";
    // Add active class
    Bg2.classList.add("active");

    // Remove active classs
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
});

Bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";
    Bg1.style.color = "black";
    Bg1.style.backgroundColor = "#fff";

    // Add active class
    Bg3.classList.add("active");

    // Remove active classs
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
});
