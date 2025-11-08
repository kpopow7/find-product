/**
 * Zendesk Configuration
 * 
 * Replace 'YOUR_ZENDESK_KEY' with your actual Zendesk Web Widget key.
 * You can find this in your Zendesk Admin > Channels > Messaging and social > Web Widget
 */

// Get environment variables
// Webpack DefinePlugin will replace process.env.REACT_APP_* at build time
// eslint-disable-next-line no-undef
const ZENDESK_KEY = process.env.REACT_APP_ZENDESK_KEY || 'YOUR_ZENDESK_KEY';

// eslint-disable-next-line no-undef
const ZENDESK_ENABLED_STR = process.env.REACT_APP_ZENDESK_ENABLED || 'false';

export const ZENDESK_CONFIG = {
  // Your Zendesk Web Widget key
  // Example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
  key: ZENDESK_KEY,
  
  // Enable/disable Zendesk widget (disabled by default if no key is set)
  enabled: ZENDESK_KEY !== 'YOUR_ZENDESK_KEY' && ZENDESK_ENABLED_STR !== 'false',
};

