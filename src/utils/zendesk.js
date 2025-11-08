/**
 * Zendesk Web Widget Integration
 * 
 * This utility handles opening the Zendesk messaging widget
 * and passing context about the found product.
 */

// Initialize Zendesk widget (call this once when app loads)
export const initializeZendesk = (zendeskKey) => {
  if (window.zE) {
    // Widget already initialized
    return;
  }

  // Add Zendesk script if not already present
  if (!document.getElementById('ze-snippet')) {
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`;
    script.async = true;
    document.body.appendChild(script);
  }
};

// Open Zendesk widget with product context
export const openZendeskWidget = (product) => {
  if (!window.zE) {
    console.warn('Zendesk widget not initialized. Please call initializeZendesk first.');
    return;
  }

  const productName = product?.name || 'Unknown Product';
  const productId = product?.id || '';
  const productDescription = product?.description || '';

  // Show the widget
  window.zE('webWidget', 'show');

  // Wait for widget to be ready, then set context
  window.zE('webWidget:on', 'open', () => {
    // Set tags for the conversation (helps with routing and organization)
    try {
      window.zE('webWidget', 'helpCenter:setSuggestions', {
        labels: [productId, productName.replace(/\s+/g, '_').toLowerCase()]
      });
    } catch (e) {
      console.log('Could not set help center suggestions');
    }

    // Set conversation fields (custom fields in Zendesk)
    // Note: You need to configure these custom fields in your Zendesk account first
    try {
      window.zE('webWidget', 'conversationFields', {
        // Add your custom field IDs here (found in Zendesk Admin > Objects and rules > Tickets > Fields)
        // Example: '12345678': { value: productName }
      });
    } catch (e) {
      console.log('Could not set conversation fields - make sure custom fields are configured in Zendesk');
    }

    // Set user context (if available)
    try {
      window.zE('webWidget', 'prefill', {
        name: {
          value: '', // Prefill if you have user name
        },
        email: {
          value: '', // Prefill if you have user email
        },
      });
    } catch (e) {
      console.log('Could not prefill user information');
    }
  });

  // For messaging/chat mode, you can send an initial message
  // This will appear as the first message in the conversation
  window.zE('webWidget:on', 'chat:connected', () => {
    const contextMessage = `I have questions about this product:\n\nProduct: ${productName}\nProduct ID: ${productId}\n\n${productDescription}`;
    
    try {
      // Send initial message with product context
      window.zE('webWidget', 'chat:send', contextMessage);
    } catch (e) {
      console.log('Could not send initial message - widget may not be in chat mode');
    }
  });

  // Alternative: For ticket mode, you can set the subject and description
  window.zE('webWidget:on', 'ticket:created', () => {
    try {
      // This fires after a ticket is created, you can update it with product info
      const ticketSubject = `Questions about ${productName}`;
      const ticketDescription = `Product Information:\n- Product: ${productName}\n- Product ID: ${productId}\n- Description: ${productDescription}`;
      
      // Note: You may need to use Zendesk API to update the ticket after creation
      console.log('Ticket created with context:', { ticketSubject, ticketDescription });
    } catch (e) {
      console.log('Could not set ticket information');
    }
  });
};

// Check if Zendesk widget is available
export const isZendeskAvailable = () => {
  return typeof window !== 'undefined' && window.zE;
};

