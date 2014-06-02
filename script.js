function el(id) {
  return document.getElementById(id);
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className);
  else
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
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
  
  $video = el('video');
  $video.src = video.fileURL;
  removeClass($video, 'hide');
  addClass($video, 'show');

  $input = el('input');
  addClass($input, 'hide');
}

el("input").addEventListener("change", onInputChange);