const sendEmail = () => {
    const fullname = $('#fullname').val();
    const email = $('#email').val();
    const message = $('#message').val();
  
    const data = {
      fullname: fullname,
      email: email,
      message: message
    };
  
    $.ajax({
      type: 'POST',
      url: 'send_email.php',
      data: data,
      success: function(response) {
        alert(response);
      },
      error: function() {
        alert('An error occurred while sending the email');
      }
    });
  };