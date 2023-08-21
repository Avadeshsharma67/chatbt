
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);


function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('User', userMessage);

    const botResponse = getBotResponse(userMessage);
    appendMessage('Bot', botResponse);

    userInput.value = '';
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender.toLowerCase());
    messageElement.textContent = `${sender}: ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight; 
}

function getBotResponse(userMessage) {
  const lowerCaseMessage = userMessage.toLowerCase();

  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I assist you today?';
  } else if (lowerCaseMessage.includes('admission')) {
      return 'Our admission process starts in the fall. You can find more information on our website.';
  } else if (lowerCaseMessage.includes('courses')) {
      return 'We offer a variety of courses, including Computer Science, Economics, and Biology. Check our course catalog for details.';
  } else if (lowerCaseMessage.includes('scholarships')) {
      return 'We have several scholarship opportunities available. You can learn more about them on our scholarship page.';
  } else if (lowerCaseMessage.includes('campus')) {
      return 'Our campus is located in a beautiful and serene environment, providing an ideal learning atmosphere.';
  } else if (lowerCaseMessage.includes('application deadline')) {
      return 'The application deadline for the upcoming semester is July 15th. Make sure to submit your application on time!';
  } else {
      return "I'm sorry, I didn't understand your question. Please feel free to ask something else.";
  }
}