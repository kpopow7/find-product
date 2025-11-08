/**
 * Zendesk Configuration
 * 
 * Replace 'YOUR_ZENDESK_KEY' with your actual Zendesk Web Widget key.
 * You can find this in your Zendesk Admin > Channels > Messaging and social > Web Widget
 */

export const ZENDESK_CONFIG = {
  // Your Zendesk Web Widget key
  // Example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
  key: process.env.REACT_APP_ZENDESK_KEY || 'YOUR_ZENDESK_KEY',
  
  // Enable/disable Zendesk widget
  enabled: process.env.REACT_APP_ZENDESK_ENABLED !== 'false',
};

