# EmailX - Email Scraper

EmailX is a Chrome extension that extracts email addresses from the currently active webpage.

## 🚀 Features
- Extracts all visible email addresses from a webpage.
- Displays extracted emails in a user-friendly UI.
- Copy extracted emails to the clipboard with one click.

## 🛠 Installation

1. **Download or Clone the Repository**
   ```sh
   git clone https://github.com/yourusername/emailx.git
   ```
2. **Open Chrome and Navigate to Extensions**
   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer Mode** (toggle in the top-right corner)
3. **Load the Extension**
   - Click on **Load Unpacked**
   - Select the project folder
4. **Pin EmailX for Quick Access**
   - Click on the Extensions icon in Chrome (`🧩`)
   - Pin **EmailX** for easy access

## 📜 Usage
1. Open a webpage containing email addresses.
2. Click on the **EmailX** extension icon.
3. Click **Launch** to extract emails.
4. Click **Copy** to save extracted emails to the clipboard.

## 📂 Project Structure
```
emailx/
│── icons/               # Extension icons
│── index.html           # Extension popup UI
│── index.js             # Main script for handling UI and email extraction
│── manifest.json        # Chrome extension manifest
│── styling.css          # Styling for the extension popup
```

## 🔒 Permissions
This extension requires the following Chrome permissions:
- **activeTab** - Access the currently active webpage
- **scripting** - Inject scripts to extract email addresses
