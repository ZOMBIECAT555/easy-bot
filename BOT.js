<!DOCTYPE html>
<html>
<head>
    <title>Simple Chatbot</title>
    <style>
        #chat-container {
            width: 250px;
            margin: 0 auto;
            border: 1px solid #ccc;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div id="chat-container">
        <div id="chat-box"></div>
        <input type="text" id="user-input" placeholder="Type your message..." onkeydown="handleUserInput(event)">
    </div>

    <script>
        const chatBox = document.getElementById('chat-box');
        const userInput = document.getElementById('user-input');

        function handleUserInput(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        }

        function sendMessage() {
            const userMessage = userInput.value;
            appendMessage('You: ' + userMessage);
            userInput.value = ''; // Clear the input field
            replyToUser(userMessage);
        }

        function replyToUser(userMessage) {
            const botResponse = getBotResponse(userMessage);
            appendMessage('Bot: ' + botResponse);
        }

        function getBotResponse(userMessage) {
            // Define your predefined responses here
            switch (userMessage.toLowerCase()) {
                case "hello":
                    return "Hello! How can I help you?";
                case "how are you":
                    return "I'm just a bot, but I'm here to assist you!";
                default:
                    return "I don't understand. Please ask another question.";
                case "whats your name ?":
                    return "my name is adam";
                case "gm":
                    return "good morning";
                case "gn":
                    return "good night";
                case "your country":
                    return "I m sri lanka";
                    return "you ?";
                case "hi":
                    return "hi welcome";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                case "hello":
                    return "Hello! How can I help you?";
                
            }
        }

        function appendMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.textContent = message;
            chatBox.appendChild(messageElement);
        }
    </script>
</body>
</html>
