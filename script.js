document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Cảm ơn bạn đã đặt xe! Chúng tôi sẽ liên hệ lại sớm nhất.");
  this.reset();
});
