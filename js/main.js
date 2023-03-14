/**
 * Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Benvenuto nella mia pagina VUE JS',
            imageUrl: "https://www.ilsegretodellacqua.it/wp-content/uploads/2018/10/Ideogramma-ki-200x197.jpg"
        }
    }
}).mount('#app')