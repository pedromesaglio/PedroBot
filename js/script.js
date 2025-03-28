// Chatbot funcionalidad
const openChatbotBtn = document.getElementById('open-chatbot');
const closeChatBtn = document.getElementById('close-chat');
const chatbot = document.getElementById('chatbot');
const sendBtn = document.querySelector('#chatbot-input button');
const inputField = document.querySelector('#chatbot-input input');
const chatMessages = document.getElementById('chatbot-messages');

openChatbotBtn.onclick = () => {
  chatbot.style.display = 'flex';
};

closeChatBtn.onclick = () => {
  chatbot.style.display = 'none';
};

sendBtn.onclick = () => {
  let message = inputField.value.trim();
  if (message !== '') {
    // Mostrar mensaje del usuario
    chatMessages.innerHTML += `<div><strong>Tú:</strong> ${message}</div>`;
    inputField.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Simular respuesta del chatbot
    setTimeout(() => {
      chatMessages.innerHTML += `<div><strong>PedroBot:</strong> ¡Gracias por tu mensaje! Te responderé pronto.</div>`;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
  }
};

inputField.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendBtn.click();
  }
});
