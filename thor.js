function run() {
    var elems = document.getElementsByClassName("content"); //The inner div with content
    for (var i=0; i < elems.length; i++) {
        processElement(elems[i]);
    }
}
function processElement(item) {
    var index = item.innerText.toLowerCase().indexOf("/smite");
    if (index === 0) {
        item.setAttribute("style"," padding-top: 56.36%; background-image: url(/forums/assets/uploads/banned.gif); background-size:cover;");
        console.log(item.innerText.toLowerCase().indexOf("/dab"));
    }
    index = item.innerText.toLowerCase().indexOf("/dab");
    if (index === 0) {
        item.setAttribute("style"," padding-top: 56.36%; background-image: url(/forums/assets/uploads/dab.gif); background-size:cover;");
    }
     // Padding-top is calculated by height/width, set background image to url
}

//run();
// select the target node
var target = document.querySelector("html");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      run();
      
      var nodes = mutation.addedNodes;
      var node;
      var run = false;
      for(var n = 0; node = nodes[n], n < nodes.length; n++) {
          if(node.tagName == "ul" && node.getAttribute("component") == "topic") {
            console.log("topic found");
            for ;
          }
      }
    });
});

// configuration of the observer:
var config = { attributes: false, childList: true, subtree: true, characterData: false };

// pass in the target node, as well as the observer options
observer.observe(target, config);