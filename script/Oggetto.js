else {
//chiamiamo il server per effettuare la verifica
fetch ( 'https://www.cacciaapi.altervista.org/login.php/loginIpad', {
method: 'POST', // o 'GET'
headers: {
      'Content-Type': "application/json',
}
body: JSON. stringify({
      {"Nome": "Cane", "Esemplari presenti": 900000000, "Estinzione": No}
      {"Nome": "Gatto", "Esemplari presenti": 600000000, "Estinzione": No}
      {"Nome": "Elefante", "Esemplari presenti": 352271, "Estinzione": No}
      {"Nome": "Giraffa", "Esemplari presenti": 117000, "Estinzione": No}
      {"Nome": "Farfalla", "Esemplari presenti": 158000, "Estinzione": No}
      {"Nome": "Ippopotamo", "Esemplari presenti": 130000, "Estinzione": No}
      {"Nome": "Leone", "Esemplari presenti": 50000, "Estinzione": No}
      {"Nome": "Aquila", "Esemplari presenti": 40000, "Estinzione": No}
      {"Nome": "Mucca", "Esemplari presenti": 1500000, "Estinzione": No}
      {"Nome": "Ghepardo", "Esemplari presenti": 6500, "Estinzione": No}
 })
.then(response => response json()) // converte la risposta in JSON
.then(data => console.log(data)) // stampa i dati
.catch( (error) => {
console.error ('Errore:', error);
});     
</script>
