import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())

// Configurazione Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

// Verifica connessione
transporter.verify((error) => {
  if (error) {
    console.log('❌ Errore configurazione email:', error)
  } else {
    console.log('✅ Server di email pronto')
  }
})

// Route per inviare email
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  // Validazione base
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' })
  }

  try {
    // Email da inviare a te
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'grafichenelchill@gmail.com',
      subject: `Nuovo messaggio da ${name}: ${subject}`,
      html: `
        <h2>Nuovo messaggio di contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Oggetto:</strong> ${subject}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    // Email di conferma al cliente
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Abbiamo ricevuto il tuo messaggio',
      html: `
        <h2>Grazie ${name}!</h2>
        <p>Abbiamo ricevuto il tuo messaggio e ti contatteremo presto.</p>
        <p>Team Chillart Studio</p>
      `
    })

    res.status(200).json({ success: true, message: 'Email inviata con successo' })
  } catch (error) {
    console.error('Errore invio email:', error)
    res.status(500).json({ error: 'Errore nell\'invio dell\'email' })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server in ascolto su http://localhost:${PORT}`)
})
