"use strict"

// SIDEBAR

    const menuItems = document.querySelectorAll('.menu_item');
    const notificationPopUp = document.querySelector('.notification_popup');
    const notificationCount = document.querySelector('.notification_count');
    const messageNotificationCount = document.querySelector('.messages_notification_count');


    // ======================= SIDEBAR ======================= 

    // Remove active class from all Menu Item
    const changeActiveItem = () => {
        menuItems.forEach(item => {
            item.classList.remove('active');
        })
    }


    // Selecting one Menu Item at a time 
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');

            if(item.id != 'notifications') {
                notificationPopUp.style.display = 'none';
            } else {
                notificationPopUp.style.display = 'block';
                notificationCount.style.display = 'none';
            }
        })
    })

    // ======================= MESSAGES ======================= 

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if(item.id === 'messages_notifications') {
                messageNotificationCount.style.display = 'none';
                document
            }
        })

    })
