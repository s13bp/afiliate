
window.onload = function()
{
    document.getElementById('three').scrollIntoView();
};

const pages = document.querySelectorAll(".page");
    const translateAmount = 100; 
    let translate = 0;

    slide = (direction) => {

      direction === "next" ? translate -= translateAmount : translate += translateAmount;

      pages.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
    }
    dropContainer.ondragover = dropContainer.ondragenter = function(evt) {
      evt.preventDefault();
    };
    
    dropContainer.ondrop = function(evt) {
      // pretty simple -- but not for IE :(
      fileInput.files = evt.dataTransfer.files;
    
      // If you want to use some of the dropped files
      const dT = new DataTransfer();
      dT.items.add(evt.dataTransfer.files[0]);
      dT.items.add(evt.dataTransfer.files[3]);
      fileInput.files = dT.files;
    
      evt.preventDefault();
    };  