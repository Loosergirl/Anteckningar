function buttons() {
  var inputs = document.getElementsByTagName("input");
  var j=0;
  for (j=0; j<inputs.length; j++) {
    if(inputs[j].getAttribute('type') == 'image') {
      var image = inputs[j];
      image.offImage = new Image();
      image.offImage.src = image.src;
      image.onImage = new Image();
      image.onImage.imageElement = image;
      if (navigator.userAgent.toLowerCase().indexOf('safari') != - 1) {
        image.onmouseover = function() { this.src = this.onImage.src; };
        image.onfocus = function() { this.src = this.onImage.src; };
        image.onmouseout = function() { this.src = this.offImage.src; };
        image.onblur = function() { this.src = this.offImage.src; };
      } else {
        image.onImage.onload = function() {
        this.imageElement.onmouseover = function() { this.src = this.onImage.src; };
        this.imageElement.onfocus = function() { this.src = this.onImage.src; };
        this.imageElement.onmouseout = function() { this.src = this.offImage.src; };
        this.imageElement.onblur = function() { this.src = this.offImage.src; };
      };
    }
    image.onImage.src = image.src.replace(/-off\./, '-on.');
    }
  }
}
window.onload=buttons;