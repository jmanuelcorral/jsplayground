export function bind(element, className) {
    let elementPosition = {x : 0, y: 0};
    let mousePosition = {x : 0, y: 0};
    element.onmousedown = dragMouseDown;
    element.className = className;
     
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
  
    function calculateCursorPosition(e) {
      elementPosition.x = mousePosition.x - e.clientX;
      elementPosition.y = mousePosition.y - e.clientY;
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    }

    function setElementPosition() {
      element.style.top = (element.offsetTop - elementPosition.y) + "px";
      element.style.left = (element.offsetLeft - elementPosition.x) + "px";
    }

    function elementDrag (e) {
      e = e || window.event;
      e.preventDefault();
      calculateCursorPosition(e);
      setElementPosition();
    }
  
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
}