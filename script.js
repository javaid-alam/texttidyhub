document.getElementById('clean-btn').addEventListener('click', function() {
    // Get input text and checkbox state
    let input = document.getElementById('input').value;
    let removeSpecial = document.getElementById('remove-special').checked;
    
    // Clean the text step-by-step
    let cleaned = input
        .replace(/(\r\n|\n|\r)+/g, '\n') // Normalize all line breaks to single \n
        .replace(/[ \t]+/g, ' ')        // Replace multiple spaces or tabs with one
        .trim();                        // Remove leading/trailing whitespace
    
    // Remove special characters except comma, full stop, and alphanumeric if checkbox is checked
    if (removeSpecial) {
        cleaned = cleaned.replace(/[^a-zA-Z0-9\s,.]/g, '');
    }
    
    // Display cleaned text
    document.getElementById('output').value = cleaned;
});

document.getElementById('copy-btn').addEventListener('click', function() {
    // Copy to clipboard
    let output = document.getElementById('output');
    output.select();
    navigator.clipboard.writeText(output.value)
        .then(() => alert('Text copied to clipboard!'))
        .catch(() => alert('Failed to copy text.'));
});

document.getElementById('reset-btn').addEventListener('click', function() {
    // Reset both text areas
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
});