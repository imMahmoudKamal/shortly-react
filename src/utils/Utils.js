export function copyTextToClibpoard(text) {
  const textArea = document.createElement('textarea');

  document.body.appendChild(textArea);
  textArea.value = text;
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);

  return true;
}
