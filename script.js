function showMessage() {
  const message = `
  مرحبا بك في موقعنا 🌟

  نحن فريق تطوير شاب نعمل على إنشاء تطبيقات ومواقع حديثة.
  هدفنا تقديم حلول بسيطة وفعالة باستعمال أحدث التقنيات.

  شكرا لزيارتك 💙
  `;

  document.getElementById("messageText").innerText = message;
  document.getElementById("messageBox").classList.remove("hidden");
}