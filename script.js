//your JS code here. If required.
 window.addEventListener('resize', updateSize);

    function updateSize() {
      var width = window.innerWidth;
      var height = window.innerHeight;

      var dimensionsElement = document.getElementById('dimensions');
      dimensionsElement.textContent = 'Width: ' + width + ', Height: ' + height;
    }