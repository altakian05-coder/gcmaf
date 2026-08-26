# Email Setup Guide — GcMAF Biopharma Contact Form

The contact form uses [Resend](https://resend.com) for email delivery.
The site is deployed to **Cloudflare Workers** via OpenNext.

There are two phases for the FROM address — start with Phase 1 now and
switch to Phase 2 whenever you gain DNS access to `ibio.asia`.

---

## Phase 1 — Use your personal Gmail (available now)

Resend lets you verify a single email address without needing domain access.

### Step 1 — Create a Resend account

Go to [resend.com](https://resend.com) and sign up. The free tier is enough.

### Step 2 — Verify your Gmail address as a sender

1. In the Resend dashboard go to **Domains → Add sender email**.
2. Enter your Gmail address and click **Send verification**.
3. Open Gmail and click the verification link.

### Step 3 — Get your API key

1. Go to **API Keys → Create API Key**.
2. Set permission to **Sending access**.
3. Copy the key — starts with `re_`, shown only once.

---

## Deployment — Cloudflare Workers

### Step 1 — Log in to Cloudflare via Wrangler

```bash
pnpm wrangler login
```

This opens a browser window. Approve access to your Cloudflare account.

### Step 2 — Add environment secrets

Run these two commands and paste your values when prompted:

```bash
pnpm wrangler secret put RESEND_API_KEY
# paste: re_your_actual_key_here

pnpm wrangler secret put RESEND_FROM
# paste: Your Name <you@gmail.com>
```

Secrets are encrypted and stored in Cloudflare — never in your code or git.

### Step 3 — Deploy

```bash
pnpm deploy
```

This builds the app with OpenNext and pushes it to Cloudflare Workers.
Your site is live at `https://gcmaf-biopharma.<your-cloudflare-subdomain>.workers.dev`.

### Step 4 — Connect your custom domain

1. In the [Cloudflare dashboard](https://dash.cloudflare.com) go to **Workers & Pages → gcmaf-biopharma**.
2. Click **Settings → Domains & Routes → Add custom domain**.
3. Enter your domain (e.g. `gcmafbiopharma.com`) — since the domain is already on Cloudflare, DNS is configured automatically.

---

## Phase 2 — Switch FROM address to ibio.asia (when you have DNS access)

1. Verify the domain `ibio.asia` in Resend (Domains → Add Domain → follow the DNS instructions).
2. Update the secret:
   ```bash
   pnpm wrangler secret put RESEND_FROM
   # paste: GcMAF Biopharma <noreply@ibio.asia>
   ```
3. Redeploy:
   ```bash
   pnpm deploy
   ```

No code changes needed.

---

## How the email works

| Field | Value |
|---|---|
| **From** | whatever `RESEND_FROM` is set to |
| **To** | `info@ibio.asia` |
| **CC** | secondary address (server-side only, never shown on site) |
| **Reply-To** | the visitor's email address |
| **Subject** | `[GcMAF Inquiry] {inquiry type} — {name}` |

---

## Local development

Fill in `.env.local` for local testing:

```
# Resend API key — get yours free at https://resend.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# The "From" address shown in the email.
# Phase 1 (now): your personal Gmail after verifying it in Resend.
# Phase 2 (later): noreply@ibio.asia after verifying the domain in Resend.
RESEND_FROM=Your Name <you@gmail.com>
```

Then run `pnpm dev` as normal.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| "Failed to send message" on the form | Run `pnpm wrangler secret list` to verify secrets are set |
| FROM email not verified in Resend | Go to Resend → Domains and verify the email address or domain |
| `wrangler login` fails | Make sure you're logged in to the correct Cloudflare account |
| Custom domain not working | Check Workers & Pages → gcmaf-biopharma → Settings → Domains |
