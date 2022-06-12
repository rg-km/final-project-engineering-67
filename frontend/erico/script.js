const images_input = document.querySelector('#images_input');
var upload_images = "";

images_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => { 
    upload_images = reader.result; 
    document.querySelector("#display").style.backgroundImage = 'url(${upload_images})'
});
    reader.readAsDataURL(this.files[0]);
});