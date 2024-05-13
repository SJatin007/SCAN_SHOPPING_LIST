document.getElementById('scanButton').addEventListener('click', function() {
  scanBarcode();
});

function scanBarcode() {
  const codeReader = new ZXing.BrowserBarcodeReader();
  codeReader
    .decodeFromInputVideoDevice(undefined, 'video')
    .then(result => {
      addToShoppingList(result.text);
    })
    .catch(err => {
      console.error(err);
      alert('Error scanning barcode. Please try again.');
    });
}

function addToShoppingList(itemName) {
  const shoppingList = document.getElementById('shoppingList');
  shoppingList.value += `${itemName}\n`;
}

document.getElementById('saveButton').addEventListener('click', function() {
  saveShoppingList();
});

function saveShoppingList() {
  const shoppingList = document.getElementById('shoppingList').value;
  // Here you can save the shopping list to local storage or a server
  alert('Shopping list saved!');
}