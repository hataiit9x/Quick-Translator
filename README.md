# Quick Translator Extension

A Chrome browser extension for quick text translation, supporting multiple languages through OpenAI API, Groq API, and DeepL API.

## Features

- Instant translation of selected text
- Multi-language support
- Integration with OpenAI and Groq APIs for accurate translations
- Clean and user-friendly interface
- Option for automatic or manual translation
- Persistent user settings

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Configuration

### OpenAI API Setup
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy your API key

### Groq API Setup
1. Visit [Groq Console](https://console.groq.com/keys)
2. Create an account or sign in
3. Go to the "API Keys" section
4. Click "Create API Key"
5. Copy your API key and store it safely

### DeepL API Setup
1. Visit [DeepL Free API](https://deeplx.missuo.ru/)
2. Login with your GitHub account
3. Your API key will be automatically generated
4. Copy your API key from the dashboard

Note: This is a community-maintained free DeepL API service. While it's free to use, please be mindful of usage limits and consider supporting the official DeepL service for commercial applications.

### Extension Setup
1. Click the extension icon in Chrome toolbar
2. Enter your preferred API keys (OpenAI, Groq, or DeepL)
3. Select your default target language
4. Customize other settings as needed

## How to Use

1. Select any text on a webpage
2. Text will be translated automatically (if enabled)
3. Or right-click and select "Translate Selection" from the context menu

## Requirements

- Google Chrome (latest version)
- OpenAI API key or Groq API key

## Technologies Used

- JavaScript
- Chrome Extension API
- OpenAI API
- Groq API

## API Comparison

### OpenAI
- Pay-as-you-go model
- Pricing varies based on model used
- Wide range of language models available

### Groq
- Known for ultra-fast inference speeds
- Competitive pricing
- Specialized in LLM inference
- Simple API integration

### DeepL (Free API)
- Free to use through community-maintained service
- High-quality translations
- Supports many language pairs
- May have usage limitations
- Best for personal use

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests if you want to improve the extension.

## License

[MIT License](LICENSE)

## Support

If you encounter any issues or have questions, please create an issue in the repository. 