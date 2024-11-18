document.getElementById('gravar').addEventListener('click', async () => {
    const nome = document.getElementById('nome').value;
    const pendencias = document.getElementById('pendencias').value;

    if (nome && pendencias) {
        try {
            const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/YOUR_SPREADSHEET_ID/values/Sheet1!A1:append?valueInputOption=USER_ENTERED', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer YOUR_API_KEY'
                },
                body: JSON.stringify({
                    values: [[nome, pendencias]]
                })
            });
            if (response.ok) {
                alert('Dados enviados com sucesso!');
            } else {
                alert('Erro ao enviar dados!');
            }
        } catch (error) {
            console.error(error);
            alert('Erro ao conectar com a planilha.');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});