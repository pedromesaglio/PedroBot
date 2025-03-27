// Elementos del Chatbot
const chatbot = document.getElementById('chatbot');
const openChatbotBtn = document.getElementById('open-chatbot');
const closeChatBtn = document.getElementById('close-chat');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotText = document.getElementById('chatbot-text');
const chatbotSend = document.getElementById('chatbot-send');

// Abrir el Chatbot
openChatbotBtn.addEventListener('click', function() {
  chatbot.style.display = 'flex';
  openChatbotBtn.style.display = 'none';
});

// Cerrar el Chatbot
closeChatBtn.addEventListener('click', function() {
  chatbot.style.display = 'none';
  openChatbotBtn.style.display = 'block';
});

// Función para añadir mensajes al chat
function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.style.marginBottom = '10px';
  messageDiv.textContent = sender + ': ' + text;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Función para simular la respuesta del chatbot  
function getChatbotResponse(message) {
  // Aquí puedes integrar una API real o implementar lógica más avanzada
  return "Has dicho: " + message;
}

// Enviar mensaje del usuario
chatbotSend.addEventListener('click', function() {
  const userMessage = chatbotText.value.trim();
  if (userMessage === '') return;
  appendMessage('Tú', userMessage);
  chatbotText.value = '';
  
  setTimeout(() => {
    const botResponse = getChatbotResponse(userMessage);
    appendMessage('Chatbot', botResponse);
  }, 500);
});

// Enviar mensaje al presionar Enter
chatbotText.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    chatbotSend.click();
  }
});
