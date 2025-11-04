# 📧 Setup EmailJS per Newsletter Somnium

Segui questi passaggi per configurare l'invio reale delle email della newsletter.

## 📝 Passaggi di Configurazione

### 1️⃣ Registrazione su EmailJS

1. Vai su **https://www.emailjs.com/**
2. Clicca su **"Sign Up"** (puoi usare Google)
3. Verifica il tuo account email

---

### 2️⃣ Connetti il tuo Account Gmail

1. Nel dashboard di EmailJS, vai su **"Email Services"**
2. Clicca su **"Add New Service"**
3. Seleziona **"Gmail"**
4. Clicca su **"Connect Account"** e autorizza l'accesso a `evolv.project.business@gmail.com`
5. Assegna un nome al servizio (es: "Somnium Newsletter")
6. **Copia il SERVICE_ID** (es: `service_abc123`)

---

### 3️⃣ Crea il Template Email

1. Vai su **"Email Templates"**
2. Clicca su **"Create New Template"**
3. Imposta i seguenti campi:

**Template Name:** `Somnium Newsletter Subscription`

**From Name:** `Somnium App`

**From Email:** `evolv.project.business@gmail.com`

**To Email:** `evolv.project.business@gmail.com`

**Subject:** `Nuova iscrizione alla Newsletter Somnium`

**Content (HTML):** Copia il template da `/services/emailService.ts` (variabile `EMAIL_HTML_TEMPLATE`)

4. Nella sezione **Template Settings**, verifica che ci siano queste variabili:
   - `{{user_email}}` - Email dell'utente iscritto
   - `{{timestamp}}` - Data e ora dell'iscrizione
   - `{{user_name}}` - Nome utente (opzionale)

5. Clicca su **"Save"**
6. **Copia il TEMPLATE_ID** (es: `template_xyz789`)

---

### 4️⃣ Ottieni la Public Key

1. Vai su **"Account"** → **"General"**
2. Trova la sezione **"API Keys"**
3. **Copia la PUBLIC_KEY** (es: `user_ABC123XYZ`)

---

### 5️⃣ Configura il Codice

Apri il file `/services/emailService.ts` e sostituisci i placeholder:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',      // ← Il tuo Service ID
  TEMPLATE_ID: 'template_xyz789',    // ← Il tuo Template ID
  PUBLIC_KEY: 'user_ABC123XYZ',      // ← La tua Public Key
};
```

⚠️ **IMPORTANTE:** 
- Non includere virgolette extra
- Copia le credenziali esattamente come appaiono nel dashboard
- La Public Key inizia tipicamente con lettere/numeri casuali (NON "user_")
- Il Service ID inizia con "service_"
- Il Template ID inizia con "template_"

---

### 6️⃣ Test

1. Vai sulla pagina "Coming Soon" del tuo sito
2. Clicca su **"Iscriviti alla Newsletter"**
3. Inserisci una email di test
4. Clicca su **"Iscriviti Ora"**
5. Controlla la inbox di `evolv.project.business@gmail.com`

---

## 🎨 Personalizzazione Template Email

Il template HTML è già configurato con il design brand di Somnium:

- **Colori:** `#120b1e` (scuro) e `#0470f9` (blu)
- **Font:** Plus Jakarta Sans
- **Design:** Gradiente header, badge email, footer informativo

Puoi personalizzarlo ulteriormente modificando `EMAIL_HTML_TEMPLATE` in `/services/emailService.ts`.

---

## 💰 Limiti Piano Gratuito

- ✅ **200 email/mese** gratis
- ✅ Nessuna carta di credito richiesta
- ✅ Template illimitati

Se superi 200 iscrizioni al mese, considera il piano a pagamento (da $7/mese per 1000 email).

---

## 🔒 Sicurezza

⚠️ **IMPORTANTE:** Non condividere mai le tue credenziali EmailJS pubblicamente.

Le credenziali nel file `/services/emailService.ts` sono sicure perché:
- La **Public Key** è progettata per essere usata nel frontend
- EmailJS protegge contro spam con rate limiting automatico
- Puoi impostare domini autorizzati nel dashboard EmailJS

---

## 🆘 Troubleshooting

### Email non arriva?

1. Controlla la cartella **Spam** di Gmail
2. Verifica che le credenziali siano corrette
3. Controlla la **Console del Browser** per errori
4. Verifica lo stato del servizio su EmailJS dashboard

### Errore "Invalid Public Key"?

- Assicurati di aver copiato correttamente la Public Key
- Verifica che il servizio sia attivo nel dashboard

### Template non si carica?

- Assicurati che il Template ID sia corretto
- Verifica che il template sia salvato e pubblicato

---

## 📞 Supporto

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Dashboard:** https://dashboard.emailjs.com/
- **Support:** help@emailjs.com

---

✅ Una volta configurato, la newsletter funzionerà automaticamente e riceverai tutte le iscrizioni a `evolv.project.business@gmail.com` con il design brand Somnium!
