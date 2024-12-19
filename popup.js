document.addEventListener('DOMContentLoaded', function() {
  console.log('Loading settings...');

  // Load saved settings
  chrome.storage.sync.get([
    'targetLang', 
    'apiService', 
    'openaiKey',
    'deeplKey',
    'groqKey',
    'groqModel',
    'autoTranslate', // Add this
    'autoCopy'       // Add this
  ], function(items) {
    console.log('Loaded settings:', items);

    if (items.targetLang) document.getElementById('targetLang').value = items.targetLang;
    if (items.apiService) document.getElementById('apiService').value = items.apiService;
    if (items.openaiKey) document.getElementById('openaiKey').value = items.openaiKey;
    if (items.deeplKey) document.getElementById('deeplKey').value = items.deeplKey;
    if (items.groqKey) document.getElementById('groqKey').value = items.groqKey;
    if (items.groqModel) document.getElementById('groqModel').value = items.groqModel;
    if (items.autoTranslate) document.getElementById('autoTranslate').checked = items.autoTranslate;
    if (items.autoCopy) document.getElementById('autoCopy').checked = items.autoCopy;
            // Set checkbox states
            document.getElementById('autoTranslate').checked = items.autoTranslate || false;
            document.getElementById('autoCopy').checked = items.autoCopy || false;
    updateVisibleSettings(items.apiService);
  });

  // Handle API service change
  document.getElementById('apiService').addEventListener('change', function(e) {
    updateVisibleSettings(e.target.value);
  });

  // Save settings
  document.getElementById('saveSettings').addEventListener('click', function() {
    const settings = {
      targetLang: document.getElementById('targetLang').value,
      apiService: document.getElementById('apiService').value,
      openaiKey: document.getElementById('openaiKey').value || '',
      deeplKey: document.getElementById('deeplKey').value || '',
      groqKey: document.getElementById('groqKey').value || '',
      groqModel: document.getElementById('groqModel').value || '',
      autoTranslate: document.getElementById('autoTranslate').checked,
      autoCopy: document.getElementById('autoCopy').checked
    };

    console.log('Saving settings:', settings);

    chrome.storage.sync.set(settings, function() {
      if (chrome.runtime.lastError) {
        console.error('Error saving settings:', chrome.runtime.lastError);
        alert('Error saving settings: ' + chrome.runtime.lastError.message);
      } else {
        console.log('Settings saved successfully');
        
        // Reload all tabs after saving settings
        chrome.tabs.query({}, function(tabs) {
          tabs.forEach(function(tab) {
            chrome.tabs.reload(tab.id);
          });
        });

        // Reload the extension
        chrome.runtime.reload();

        alert('Settings saved! The extension will reload to apply changes.');
        window.close(); // Close the popup
      }
    });
  });
});

function updateVisibleSettings(apiService) {
  console.log('Updating visible settings for:', apiService);
  const openaiSettings = document.getElementById('openaiSettings');
  const deeplSettings = document.getElementById('deeplSettings');
  const groqSettings = document.getElementById('groqSettings');

  openaiSettings.classList.add('hidden');
  deeplSettings.classList.add('hidden');
  groqSettings.classList.add('hidden');

  switch(apiService) {
    case 'openai':
      openaiSettings.classList.remove('hidden');
      break;
    case 'deepl':
      deeplSettings.classList.remove('hidden');
      break;
    case 'groq':
      groqSettings.classList.remove('hidden');
      break;
  }
} 