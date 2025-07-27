async function generateToken() {
    const response = await fetch('http://localhost:3000/generate-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (data.token) {
        document.getElementById('message').textContent = "Token recibido. Acceso a datos privados.";
        
        const accessResponse = await fetch('http://localhost:3000/access-data', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${data.token}`
            }
        });

        const accessData = await accessResponse.json();
        if (accessData.success) {
            document.getElementById('message').textContent = "Acceso a datos privados concedido.";
        } else {
            document.getElementById('message').textContent = "Acceso denegado. Token no válido.";
        }
    } else {
        document.getElementById('message').textContent = 'No se pudo generar el token';
    }
}