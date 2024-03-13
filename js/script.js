const inputText = document.getElementById('inputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');
const clearButton = document.getElementById('clearButton');
const uppercaseMessage = document.getElementById("uppercaseMessage");


inputText.addEventListener('input', () => {
  const hasUppercase = /[A-Z]/g.test(inputText.value);  // Check for uppercase
  const hasAccents = /[À-Úà-ú]/g.test(inputText.value); // Check for basic accented characters

  if (inputText.value.trim() === '') {
    decryptButton.disabled = true;
    clearButton.disabled = true;
    copyButton.style.display = 'none';  // Hide copy button
  } else if (hasUppercase || hasAccents) {
    document.getElementById("uppercaseMessage").style.display = "block";
    decryptButton.disabled = true;
    clearButton.disabled = true;
    copyButton.style.display = 'none';  // Hide copy button
  } else {
    document.getElementById("uppercaseMessage").style.display = "none";
    decryptButton.disabled = false;
    clearButton.disabled = false;
    copyButton.style.display = 'block';  // Show copy button
  }
});

encryptButton.addEventListener('click', () => {
  const hasText = inputText.value.trim() !== ""; // Check if there's trimmed text

  if (hasText) {
    decryptButton.disabled = false;
    decryptButton.style.backgroundColor = 'rgb(15, 15, 137)';
    decryptButton.style.color = 'white';
    clearButton.disabled = false;
    clearButton.style.backgroundColor = 'rgb(15, 15, 137)';
    clearButton.style.color = 'white';
  }
});

clearButton.addEventListener('click', () => {
  decryptButton.disabled = true;
  decryptButton.style.backgroundColor = '#ccc';
  decryptButton.style.color = '#666';
  clearButton.disabled = true;
  clearButton.style.backgroundColor = '#ccc';
  clearButton.style.color = '#666';
});

function hideImage() {
  const image = document.getElementById("image");
  if (inputText.value.trim() !== "") {
    image.style.display = "none";
  }
}

function showImageAndText() {
  // Only execute if the input value is empty to prevent flickering
  if (inputText.value.trim() === "") {
    const noMessage = document.getElementById("noMessage");
    const inputTextCopy = document.getElementById("inputTextCopy");
    image.style.display = "block";
    noMessage.style.display = "block";
    inputTextCopy.style.display = "block";
  }
}


inputText.addEventListener('input', () => {
  hideImage();
  showImageAndText();
});


function encryptText() {
  var inputText = document.getElementById("inputText").value;
  if (inputText === "") {
    //Mostrar un mensaje de error al usuario
      alert("No se ha ingresado texto para encriptar.");
   return;
  }
  
  var encryptedText = inputText.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
  document.getElementById("noMessage").style.display = "none";
  document.getElementById("inputTextCopy").innerHTML = encryptedText;
  document.getElementById("copyButton").style.display = "block";
}

function decryptText() {
  var inputText = document.getElementById("inputText").value;
  var decryptedText = inputText.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");
  document.getElementById("noMessage").style.display = "none";
  document.getElementById("inputTextCopy").innerHTML = decryptedText;
  document.getElementById("copyButton").style.display = "block";
}

function copyText() {
  var copyText = document.getElementById("inputTextCopy");
  navigator.clipboard.writeText(copyText.textContent).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function clearText() {
  inputText.value = '';
  decryptButton.disabled = true;
  copyButton.style.display = 'none';
  clearButton.disabled = true;
  document.getElementById("noMessage").style.display = "block";
  document.getElementById("inputTextCopy").innerHTML = "Ingrese el texto que desea encriptar o desencriptar.";

  // Reset button size regardless of disabled state
  clearButton.style.transform = 'scale(1)';
   // Call showImageAndText to reset image and messages
   showImageAndText();
}



// Event listener for hover on decryptButton
decryptButton.addEventListener('mouseover', () => {
  if (!decryptButton.disabled) {
    decryptButton.style.backgroundColor = 'orange';
    decryptButton.style.transform = 'scale(1.3)';
    decryptButton.style.transition = '0.2s ease-in-out';
  }
});


decryptButton.addEventListener('mouseleave', () => {
  if (!decryptButton.disabled) {
    decryptButton.style.backgroundColor = 'rgb(15, 15, 137)'; // Change back to original color
    decryptButton.style.transition = '0.2s ease-in-out'; // Set transition for smooth size change
    decryptButton.style.transform = 'scale(1)'; 
  }
});


clearButton.addEventListener('mouseover', () => {
  if (!clearButton.disabled) {
    clearButton.style.backgroundColor = 'orange';
    clearButton.style.transform = 'scale(1.3)';
    clearButton.style.transition = '0.2s ease-in-out';
  }
});

clearButton.addEventListener('mouseleave', () => {
  if (!clearButton.disabled) {
    clearButton.style.backgroundColor = 'rgb(15, 15, 137)'; // Change back to original color
    clearButton.style.transition = '0.2s ease-in-out'; // Set transition for smooth size change
    clearButton.style.transform = 'scale(1)'; 
  }
});