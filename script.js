document.getElementById('locationButton').addEventListener('click', function() {
  
    document.getElementById('iframeContainer').style.display = 'block';
    document.getElementById('image').style.display = 'none';

    document.getElementById('image').classList.remove('animate');
});


document.getElementById('backButton').addEventListener('click', function() {

    document.getElementById('iframeContainer').style.display = 'none';
    document.getElementById('image').style.display = 'block';

    document.getElementById('image').classList.add('animate');
    
    setTimeout(function() {
        document.getElementById('image').classList.remove('animate');
    }, 50); 
});
