const input = document.querySelector('[autocomplete=one-time-code');
input.addEventListener('input', () => input.style.setProperty('--_otp-digit', input.selectionStart));
