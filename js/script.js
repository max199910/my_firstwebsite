document.getElementById('toggelButton').addEventListener("click", function(){
    var extraImage = document.getElementById('extraImage');
    if (extraImage.style.display === 'none'){
        extraImage.style.display = 'block';
        this.textContent = 'Close';
    } else {
    extraImage.style.display = 'none';
    his.textContent = 'Open';
    }
})
