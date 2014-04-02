function el(id) {
  return document.getElementById(id);
}

var Video = function(fileList) {
  this.file = fileList[0];
  this.type = this.file.type; 
  this.name = this.file.name;
  this.createVideoURL();
}

Video.prototype.createVideoURL = function(){
  var URL = window.URL || window.webkitURL,
      file = this.file;

  this.fileURL = URL.createObjectURL(file);
}

function onInputChange(ev) {
  ev.preventDefault();

  var fileList = ev.currentTarget.files;
  var video = new Video(fileList); 
  
  el('video').src = video.fileURL;
}

el("input").addEventListener("change", onInputChange);