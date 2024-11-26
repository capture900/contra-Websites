document.getElementById('generate-video').addEventListener('click', function() {
    // Get input values
    const script = document.getElementById('script').value;
    const background = document.getElementById('background').value;
    const narrator = document.getElementById('narrator').value;
    const subtitles = document.getElementById('subtitles').checked;

    // Preview section
    let previewText = `
        <p><strong>Script:</strong> ${script}</p>
        <p><strong>Background:</strong> ${background}</p>
        <p><strong>Narrator:</strong> ${narrator}</p>
        <p><strong>Subtitles:</strong> ${subtitles ? "Enabled" : "Disabled"}</p>
    `;

    // Display the preview
    document.getElementById('video-preview').innerHTML = previewText;
});
