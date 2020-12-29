---
title: '<span style="display:none">**Karen**</span>'
output: 
  html_document:
    css: figures.css
---

<script src="https://kit.fontawesome.com/0af1a424a5.js" crossorigin="anonymous"></script>

<style>
#myBtn {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

#myBtn:hover {
  background-color: #555; /* Add a dark-grey background on hover */
}
.main-container {
  width: 1800px;
  margin-left: auto;
  margin-right: auto;
}

h1, h2, h3, h4 {
text-align: center
}
/* Responsive layout - makes the two columns/boxes stack on top of each other instead of next to each other, on small screens */
@media (max-width: 700px) {
  .main-container {
    width: 100%;
    height: auto;
  }
}

</style>

<div class = "row">

<div class="col-md-3" style="float: left; display: inline">

<div class = "row">
<style> img {width: 100%; text-align: center}</style>
![](karen.png)
<p  align="center">**Karen**</p>

<p  align="center">I’d love to hear from you, so feel free to reach out:</p>

<p  align="center"><a href="mailto:karen.cristine.goncalves.dos.santos@uqtr.ca"  style="color:#fc1c03"><i class="fas fa-envelope"></i></a> <a href="mailto:cris.kgs@gmail.com" style="color:#03b6fc"><i class="fas fa-envelope"></i></a></p>


<p  align="center">Or connect with me on:</p>
<span style="font-size: 2em"> <p  align="center"> [<i class="fab fa-twitter"></i>](http://twitter.com/KarenCristineG1) [<i class="fab fa-linkedin-in"></i>](https://www.linkedin.com/in/karen-cristine-gon%C3%A7alves-dos-santos-05847a113/) [<i class="fab fa-github"></i>](http://github.com/KarenGoncalves) </p> </span>
</div>
</div>

<div class="col-md-9" style="float: left; display: inline">


# **Research path** {#research}

<div style="width: 100%; display: block">


I have a bachelor degree in Biology from Brazil at [Unila](https://portal.unila.edu.br/). There I researched the interaction of two bacteria, _Gluconacetobacter diazotrophicus_ and _Azospirillum brasiliensis_, and a fungi, _Trichoderma harzianum_, with the Mate plant, _Ilex paraguariensis_, under the direction of [Cristian A. Rojas](https://www.researchgate.net/profile/Cristian_Rojas6) and [Cleto Peres](https://www.researchgate.net/profile/Cleto_Peres).

I am currently doing my PhD in Quebec with [Hugo Germain](http://www.germainhugo.com/) and [Isabel Desgagne-Penix](https://oraprdnt.uqtr.uquebec.ca/pls/public/gscw031?owa_no_site=3466) at [UQTR](http:/uqtr.ca) on **_Transcriptomics and metabolomics of Arabidopsis in response to fungal virulence proteins_**. Although my PhD program is in Cellular and molecular biology, I did all the analyses of my transcriptomic and metabolomic data. I also developed a R package for selection of reference genes from transcriptomic data (DOI: https://doi.org/10.1186/s12864-019-6426-2), you can access it on  [Github](https://github.com/KarenGoncalves/CustomSelection) too. I have collaborated in other projects throughout my PhD doing _de novo_ transcriptome assembly and annotation

In 2018, I did an internship at [Peter Solomon's lab](https://biology.anu.edu.au/people/academics/peter-solomon) with [Megan McDonald](https://biology.anu.edu.au/people/academics/megan-mcdonald), where I used MinIon to sequence the genome of several isolates of the fungus _Bipolaris sorokiniana_, basecalled the reads and assembled them and finally aligned the new genomes to a reference to study structural changes in the chromosomes.

Finally, I am secretary of the Centre SEVE's International Partnership Committee (CPICS, 2018-present). In this role, that I share with two other people, I am responsible for the organization of documents of the committee, for the transcription of meetings and translation of documents. I also designed the [CPICS website](https://cpics.netlify.app).
</div>

</div>


<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
<script>
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>
