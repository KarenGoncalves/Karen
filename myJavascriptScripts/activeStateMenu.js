// manage active state of menu based on current page
$(document).ready(function () {
    // active menu anchor
    href = window.location.pathname
    href = href.substr(href.lastIndexOf('/') + 1)
    if (href === "") {
        href = "index.html";
    }
    var menuAnchor = $('a[href="' + href + '"]');
  
    // mark it active
    menuAnchor.tab('show');
  
    // if it's got a parent navbar menu mark it active as well
    menuAnchor.closest('li.dropdown').addClass('active');
  
    // offset scroll position for anchor links (for fixed navbar)
    for (var i = 1; i <= 6; i++) {
        css += ".section h" + i + "{ " + pt + mt + "}\n";
    }
    style.innerHTML = "body {" + pt + "padding-bottom: 40px; }\n" + css;
    document.head.appendChild(style);
});