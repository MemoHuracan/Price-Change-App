function calculatePrice(){
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const resultElement = document.getElementById('result');

    if(isNaN(itemPrice)) {
        resultElement.textContent='Por favor ingresa un número válido!';
        return;
        }

        //Applying the formula
        const finalPrice = (itemPrice * 1.023) / 1.16;

        resultElement.textContent =  `Final Price: $${finalPrice.toFixed(2)}`;
}