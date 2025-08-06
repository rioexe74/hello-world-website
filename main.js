const copyButton = document.getElementById('copyButton');
const contractAddress = document.getElementById('contractAddress').innerText;

copyButton.addEventListener('click', () => {
    // Create a temporary textarea element to copy the text
    const textArea = document.createElement('textarea');
    textArea.value = contractAddress;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        // Use the modern clipboard API if available
        if (navigator.clipboard) {
            navigator.clipboard.writeText(contractAddress).then(() => {
                showCopiedState();
            });
        } else {
            // Fallback for older browsers
            document.execCommand('copy');
            showCopiedState();
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    document.body.removeChild(textArea);
});

function showCopiedState() {
    copyButton.innerText = 'Copied!';
    copyButton.classList.remove('bg-cyan-400');
    copyButton.classList.add('bg-green-500');

    setTimeout(() => {
        copyButton.innerText = 'Copy Contract';
        copyButton.classList.remove('bg-green-500');
        copyButton.classList.add('bg-cyan-400');
    }, 2000);
}