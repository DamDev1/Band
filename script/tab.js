const tabContent = document.querySelectorAll(".tab");
const tabBtn = document.querySelectorAll(".tabsBtn");

function showTabs(tabsIndex){
    tabContent.forEach(function(show){
        show.style.display = "";
    });

    tabContent[tabsIndex].style.display = "block";
}

showTabs(0);

