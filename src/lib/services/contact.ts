import { api, handleApiError } from './api';
import { emailService } from './email';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime?: string;
}

export const contactService = {
  async submitContactForm(data: ContactFormData) {
    try {
      // Send email notifications using SMTP.js
      await emailService.sendContactFormNotification(data);
      await emailService.sendContactFormConfirmation(data);
      
      // Also send to backend API if available
      try {
        const response = await api.post('/contact', data);
        return response.data;
      } catch (apiError) {
        console.log('API submission failed, but email was sent:', apiError);
        // We don't throw here since emails were sent successfully
      }
      
      return { success: true, message: 'Contact form submitted successfully' };
    } catch (error) {
      console.error('Contact form submission failed:', error);
      handleApiError(error);
    }
  },

  async requestCallback(data: CallbackFormData) {
    try {
      // Create email body for callback request
      const callbackData = {
        name: data.name,
        email: 'Not provided', // Email is not collected for callbacks
        phone: data.phone,
        message: `Callback Request\nPreferred Time: ${data.preferredTime || 'Not specified'}`
      };
      
      // Send email notification to company
      await emailService.sendContactFormNotification(callbackData);
      
      // Also send to backend API if available
      try {
        const response = await api.post('/callback', data);
        return response.data;
      } catch (apiError) {
        console.log('API submission failed, but email was sent:', apiError);
        // We don't throw here since emails were sent successfully
      }
      
      return { success: true, message: 'Callback request submitted successfully' };
    } catch (error) {
      console.error('Callback request failed:', error);
      handleApiError(error);
    }
  },
}; 