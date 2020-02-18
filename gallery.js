function upDate(previewPic){
    var urlString = 'url(' + previewPic.src + ')';
       document.getElementById("image").style.backgroundImage = urlString;
       document.getElementById("image").innerHTML = previewPic.alt;
       
       }
   
       function unDo(){
      var urlString = 'none';
       document.getElementById("image").style.backgroundImage = urlString;
       document.getElementById("image").innerHTML = 'Hover over an image below to display here.';
       }