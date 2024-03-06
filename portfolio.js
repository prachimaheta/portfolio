$(document).ready(function(){
    $('#menu').click(function(){
          $(this).toggleClass('fa-times');
          $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
    //smooth scrolling
    $('a[href*="#"]').on('click',function(e){
      e.preventDefault();
      $('html , body').animate({
         scrollTop : $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
      );
    });
    function saveFormResponse() {
      // Gather form data
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;
  
      // Format data into a string
      var formData = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

      // Display form data on the webpage
    var displayArea = document.getElementById('savedData');
    displayArea.textContent = formData;
  
      // Create a Blob with the form data
      var blob = new Blob([formData], { type: 'text/plain' });
  
      // Create a temporary URL representing the file content
      var url = URL.createObjectURL(blob);
  
      // Create a link element
      var link = desktop.createElement('a');
  
      // Set the link's attributes
      link.href = URL;
      link.download = 'form response.text';
  
      // Append the link to the document body
      desktop.body.appendChild(link);
  
      // Programmatically trigger a click event on the link
      link.click();
  
      // Remove the link from the document body
      document.body.removeChild(link);
    };
    
    });
   