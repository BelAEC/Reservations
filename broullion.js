document.getElementById('courtForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
        
        date: formData.get('date'),
        court_no: formData.get('court_no'),
        type: formData.get('type'),
        time: formData.get('time'),
        status: "Booked", 
        player_name: formData.get('player_name')
    };

    try {
        const response = await fetch('http://localhost:3500/api/post', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);
        document.getElementById('confirmation').innerHTML=`Merci ${new_reservations.player_name}, votre réservations pour le ${new_reservation.date} à ${new_reservation.time} pour le court no ${new_reservation.court_no} est confirmée.`;
        
    } catch (error) {
        console.log('Error:', error);
        alert('An error occurred while adding the reservation.');
    }
});


