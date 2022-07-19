function openTab(evt, tabName) {
    // Declare all variables
    var i, sections, menu_item;
      
    // Get all elements with class="tabcontent" and hide them
    sections = document.getElementsByClassName("sections");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
      
    // Get all elements with class="tablinks" and remove the class "active"
    menu_item = document.getElementsByClassName("menu_item");
    for (i = 0; i < menu_item.length; i++) {
        menu_item[i].className = menu_item[i].className.replace(" active", "");
    }
      
    // Show the current tab, and add an "active" class to the button that opened the tab
    if (tabName == "skills") {
        document.getElementById(tabName).style.display = "flex";
        evt.currentTarget.className += " active";    
    } else {
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }       
    
    evt.currentTarget.className += " active";
    style.innerHTML = 'body {top: 0}'
    } 
     
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();    