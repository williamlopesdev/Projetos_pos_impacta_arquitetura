document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const imc = weight / (height * height);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Magreza';
        } else if (imc >= 18.5 && imc < 24.9) {
            classification = 'Normal';
        } else if (imc >= 24.9 && imc < 30) {
            classification = 'Sobrepeso';
        } else if (imc >= 30) {
            classification = 'Obesidade';
        }

        document.getElementById('result').innerText = `IMC: ${imc.toFixed(2)} (${classification})`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos.';
    }
});
