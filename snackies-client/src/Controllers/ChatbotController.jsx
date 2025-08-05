import axios from 'axios';

class ChatbotController {
  static async sendChatbotMessage(userId,message) {
    try {
      const webhookUrl = 'https://hibaanadani.app.n8n.cloud/webhook/ad1fb25e-0f3f-4470-9a06-c41838064492';
      const response = await axios.post(webhookUrl, {
        userId : userId || 0,
        message: message
      });

      return response;
      
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      throw error;
    }
  }
}

export default ChatbotController;