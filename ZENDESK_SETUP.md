# Zendesk Integration Setup Guide

This app includes integration with Zendesk Web Widget to allow users to ask questions about products they've found.

## Setup Instructions

### 1. Get Your Zendesk Web Widget Key

1. Log in to your Zendesk account
2. Go to **Admin** (gear icon) > **Channels** > **Messaging and social** > **Web Widget**
3. If you haven't created a widget yet, click **Add widget**
4. Copy your **Widget Key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Configure the Widget Key

#### Option A: Environment Variable (Recommended for Production)

Create a `.env` file in the root of your project:

```env
REACT_APP_ZENDESK_KEY=your-widget-key-here
REACT_APP_ZENDESK_ENABLED=true
```

#### Option B: Direct Configuration

Edit `src/config/zendesk.js`:

```javascript
export const ZENDESK_CONFIG = {
  key: 'your-widget-key-here',
  enabled: true,
};
```

### 3. Configure Custom Fields (Optional but Recommended)

To pass product information to Zendesk tickets, set up custom ticket fields:

1. Go to **Admin** > **Objects and rules** > **Tickets** > **Fields**
2. Create custom fields for:
   - Product Name (text field)
   - Product ID (text field)
   - Product Description (text area)
3. Note the Field IDs (you'll see them in the URL or field settings)
4. Update `src/utils/zendesk.js` in the `conversationFields` section:

```javascript
window.zE('webWidget', 'conversationFields', {
  '12345678': { value: productName },    // Replace with your Product Name field ID
  '12345679': { value: productId },      // Replace with your Product ID field ID
  '12345680': { value: productDescription }, // Replace with your Product Description field ID
});
```

### 4. Test the Integration

1. Build and run your app:
   ```bash
   npm start
   ```

2. Complete the product finder flow to find a product

3. Click the **"💬 Ask Questions About This Product"** button

4. The Zendesk widget should open with the product context

## How It Works

When a user clicks the "Ask Questions" button:

1. **Widget Opens**: The Zendesk Web Widget opens in the browser
2. **Context Passed**: Product information is passed to Zendesk via:
   - **Tags**: Product ID and name are added as tags
   - **Custom Fields**: Product details are set in custom ticket fields (if configured)
   - **Initial Message**: For chat mode, an initial message with product info is sent
3. **Support Agent Sees**: The agent will see the product information in the ticket/chat

## Features

- ✅ Automatic widget initialization
- ✅ Product context passed to Zendesk
- ✅ Works with both chat and ticket modes
- ✅ Tags for easy ticket organization
- ✅ Custom fields support (when configured)

## Troubleshooting

### Widget doesn't appear

- Check that your Zendesk key is correct
- Verify the widget is enabled in Zendesk Admin
- Check browser console for errors
- Make sure `ZENDESK_CONFIG.enabled` is `true`

### Product information not showing in tickets

- Verify custom fields are created in Zendesk
- Check that field IDs are correct in `zendesk.js`
- Ensure custom fields are visible to agents
- Check Zendesk ticket to see if tags are applied

### Widget loads but context isn't passed

- Check browser console for JavaScript errors
- Verify the widget is fully loaded before opening (wait 1-2 seconds)
- Try refreshing the page and testing again

## Advanced Configuration

### Customize Widget Appearance

You can customize the widget in Zendesk Admin > Channels > Web Widget > Customization

### Add User Information

If you have user information available, update the `prefill` section in `src/utils/zendesk.js`:

```javascript
window.zE('webWidget', 'prefill', {
  name: {
    value: user.name, // Your user's name
  },
  email: {
    value: user.email, // Your user's email
  },
});
```

### Disable Widget

Set `REACT_APP_ZENDESK_ENABLED=false` in your `.env` file or set `enabled: false` in the config file.

## Support

For Zendesk-specific issues, refer to:
- [Zendesk Web Widget Documentation](https://developer.zendesk.com/documentation/zendesk-web-widget-sdks/)
- [Zendesk API Documentation](https://developer.zendesk.com/api-reference/)

