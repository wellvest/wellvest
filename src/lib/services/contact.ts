import { api, handleApiError } from './api';
import { emailService } from './email';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  service?: string;
  preferredTime?: string;
  message?: string;
}

export const contactService = {
  async submitContactForm(data: ContactFormData) {
    try {
      // Send to backend API
      const response = await api.post('https://dashboard.wellvest.in/api/contact/message', {
        full_name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        subject: data.subject || 'Contact Form Submission',
        message: data.message
      });
      
      // As a fallback, also try to send via SMTP.js if available
      try {
        await emailService.sendContactFormNotification(data);
        await emailService.sendContactFormConfirmation(data);
      } catch (emailError) {
        console.log('Email sending failed, but API request succeeded:', emailError);
        // We don't throw here since API request was successful
      }
      
      return response.data;
    } catch (error) {
      console.error('Contact form submission failed:', error);
      handleApiError(error);
    }
  },

  async requestCallback(data: CallbackFormData & { service?: string, message?: string }) {
    try {
      // Send to backend API
      const response = await api.post('https://dashboard.wellvest.in0/api/contact/callback', {
        name: data.name,
        phone: data.phone,
        service: data.service || 'Not specified',
        preferred_time: data.preferredTime || 'Not specified',
        message: data.message || undefined
      });
      
      // As a fallback, also try to send via SMTP.js if available
      try {
        // Create email body for callback request
        const callbackData = {
          name: data.name,
          email: 'Not provided', // Email is not collected for callbacks
          phone: data.phone,
          message: `Callback Request\nService: ${data.service || 'Not specified'}\nPreferred Time: ${data.preferredTime || 'Not specified'}${data.message ? '\n\nMessage: ' + data.message : ''}`
        };
        
        // Send email notification to company
        await emailService.sendContactFormNotification(callbackData);
      } catch (emailError) {
        console.log('Email sending failed, but API request succeeded:', emailError);
        // We don't throw here since API request was successful
      }
      
      return response.data;
    } catch (error) {
      console.error('Callback request failed:', error);
      handleApiError(error);
    }
  },
}; 