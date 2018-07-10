var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'p2.jpg') {
      myImage.setAttribute ('src','artcell.jpg');
    } else {
      myImage.setAttribute ('src','p2.jpg');
    }
}