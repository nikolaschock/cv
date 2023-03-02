const sendEmail = () => {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const currentTime = new Date().getTime();
    const lastSentTime = localStorage.getItem("lastSentTime");
    const ip = localStorage.getItem("ip");
  
    if (lastSentTime && ip === getIPAddress() && currentTime - lastSentTime < 3600000) {
      alert("You have already sent a message within the past hour.");
      return;
    }
  
    const mailtoLink = `mailto:asusrogstrixyerevan2023@gmail.com?subject=New CV request&body=Name: ${fullname}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  
    window.open(mailtoLink);
  
    localStorage.setItem("lastSentTime", currentTime);
    localStorage.setItem("ip", getIPAddress());
  };
  
  const getIPAddress = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.ipify.org/?format=json", false);
    xhr.send();
  
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      return response.ip;
    } else {
      return "unknown";
    }
  };