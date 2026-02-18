# Configurazione Email Form - Node.js Backend

## Setup Iniziale

### 1. Installa le dipendenze
```bash
npm install
```

### 2. Configurazione Gmail

**Importante:** Non usare la password di Gmail normale, ma una "App Password".

#### Passaggi:
1. Vai a [Google Account Security](https://myaccount.google.com/security)
2. Abilita "Verifica in due passaggi" (se non lo hai già fatto)
3. Torna in Security e cerca "App passwords"
4. Seleziona "Mail" e "Windows Computer"
5. Copia la password a 16 caratteri che ti viene generata

### 3. Configura il file `.env`

Apri il file `.env` nella root del progetto e sostituisci:

```
EMAIL_USER=grafichenelchill@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

Sostituisci la password con quella a 16 caratteri che hai copiato (senza spazi).

## Avviare il progetto

### Opzione 1: Frontend e Backend separati (Consigliato in development)

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```

**Terminal 2 - Backend (Node.js):**
```bash
npm run server
```

Accedi a `http://localhost:5173` (frontend)

### Opzione 2: Entrambi contemporaneamente
```bash
npm run dev-full
```

## Cosa succede quando invii il form?

1. L'utente compila il form e clicca "Invia Messaggio"
2. React invia i dati al backend (localhost:3001/api/contact)
3. Node.js riceve il messaggio e lo manda a `grafichenelchill@gmail.com`
4. Una email di conferma viene mandata al mittente
5. Viene mostrato un messaggio di successo all'utente

## Troubleshooting

**❌ "Cannot POST /api/contact"**
- Il server Node.js non è in esecuzione
- Soluzione: Esegui `npm run server` in un altro terminal

**❌ "Errore nell'invio dell'email"**
- La password è errata
- L'email non è stata configurata correttamente
- Soluzione: Controlla il file `.env` e i log del server

**✅ Server in ascolto su http://localhost:3001**
- Tutto corretto! Il backend è pronto.

## Note di Sicurezza

- Non committare il file `.env` su git (è già in .gitignore)
- Usa App Passwords di Gmail, non la password reale
- Per produzione, usa variabili d'ambiente del server

## Per la produzione

Quando deployi il sito:
1. Configura le variabili d'ambiente sul server (es. Heroku, Vercel, Railway, ecc.)
2. Cambia l'URL del fetch in Contact.jsx da `http://localhost:3001` al tuo dominio backend
3. Deployi il backend (Node.js server) su una piattaforma appropriata
