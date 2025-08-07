import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/v0.1/user";

class NotifController {
  static async getNotifs(token, id) {
    try {
      const response = await axios.get(`${BASE_URL}/notifications/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.payload;
    } catch (error) {
      console.error("Failed to fetch notifications", error);
      throw error;
    }
  }

  static async markAsRead(token, userId, notifId) {
    try {
      const response = await axios.post(
        `${BASE_URL}/mark_as_read`,
        { userId, notifId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data.payload;
    } catch (error) {
      console.error("Failed to delete notification", error);
      throw error;
    }
  }
}

export default NotifController;
