function loadSideNav(){
    const navDiv = document.getElementById("navDiv");
    navDiv.innerHTML = "<div class=\"sideLinks\"><h3 class=\"text-center navTitle\">Using Multimedia Software</h3><a href=\"../Pages/Home.html\" class=\" sideBtn text-center\"><b>Home</b></a><a href=\"../Pages/ClientReq.html\" class=\" sideBtn text-center\">Client Requirements</a><a href=\"../Pages/FunctionalDesign.html\" class=\" sideBtn text-center\">Functional Specification</a><a href=\"../Pages/Designing.html\" class=\" sideBtn text-center\">Designing</a><a href=\"../Pages/Prototyping.html\" class=\" sideBtn text-center\">Prototyping</a><a href=\"../Pages/Sitemap.html\" class=\" sideBtn text-center\">Sitemap</a><a href=\"../Pages/Develop.html\" class=\" sideBtn text-center\">Development</a><a href=\"../Pages/Handover.html\" class=\" sideBtn text-center\">Handover</a><a href=\"../Pages/Product.html\" class=\" sideBtn text-center\">Multimedia Product</a><a href=\"../Pages/Feedback.html\" class=\" sideBtn text-center\">User Feedback</a><a href=\"../Pages/SoftwareUsed.html\" class=\" sideBtn text-center\">Software Used</a><a href=\"../Pages/SourceList.html\" class=\" sideBtn text-center\">Source List</a><a href=\"#\" onclick=\"loadReader(\'../Documents/WitnessStatment.pdf\')\" class=\" sideBtn text-center\">Witness Statement</a><a href=\"#\" onclick=\"loadReader(\'../Documents/Evaluation.pdf\')\" class=\" sideBtn text-center\">Evaluation</a></div>";
}

function loadReader(filee){
    window.location.href = "../Pages/Reader.html?file="+filee;
}

function loadFile(path){

    const reader = document.getElementById("reader");
    reader.innerHTML= "<object data=\""+path+"\" type=\"application/pdf\" id=\"vv\" width=\"100%\" height=\"570\"\"><p>Alternative text - include a link <a href=\""+path+"\">to the PDF!</a></p></object>"
    
}