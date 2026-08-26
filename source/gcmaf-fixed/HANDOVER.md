# Project Handover Guide

This document covers the full process of transferring ownership of this project to the receiving party. Follow the steps in order.

---

## Before You Start

Make sure you have the following ready:
- Their **GitHub username** or organization name
- Their **Cloudflare account email** (they need to create one at cloudflare.com if they don't have one)
- A secure way to share the `.env.local` file (see Step 4)

---

## Step 1 — Transfer the GitHub Repository

1. Go to the repository on GitHub
2. Click **Settings** (top navigation of the repo)
3. Scroll all the way down to **Danger Zone**
4. Click **Transfer ownership**
5. Type the repository name to confirm
6. Enter their GitHub username or organization name
7. Click **I understand, transfer this repository**

They will receive an email invitation. The transfer completes once they accept.

> You will lose access to the repository immediately after they accept.

---

## Step 2 — Transfer the Cloudflare Domain

### If they already have a Cloudflare account:

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select the domain
3. Go to **Overview** → scroll to the bottom
4. Find **Transfer domain** and follow the prompts to transfer to their account email

### If they do not have a Cloudflare account:

1. Ask them to create a free account at [cloudflare.com](https://cloudflare.com)
2. Once they have an account, follow the steps above

> This also transfers any Cloudflare Pages deployment and Workers attached to the domain, so hosting moves with it.

---

## Step 3 — Share the Environment Variables

The `.env.local` file contains API keys the site needs to function. It is not included in GitHub (intentionally).

**Share it securely:**
1. Go to [onetimesecret.com](https://onetimesecret.com)
2. Paste the contents of `.env.local`
3. Set it to expire after 1 view
4. Send them the link

Current variables in the file:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=...
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

> After sharing, delete your local copy of `.env.local` if you want a clean break.

---

## Step 4 — They Must Replace the Web3Forms Key

The current Web3Forms key is registered to your email. Contact form and subscribe form notifications will come to **you** until this is changed.

**Tell them to:**

1. Go to [web3forms.com](https://web3forms.com)
2. Enter **their** email address
3. Copy the new access key they receive
4. In the project, open `.env.local` and replace:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=their-new-key-here
   ```
5. Redeploy the project

---

## Step 5 — They Must Replace the Turnstile Keys

The current Turnstile keys are test/dummy keys. Real keys need to be generated from their Cloudflare account (which they now own after Step 2).

**Tell them to:**

1. Log in to their Cloudflare Dashboard
2. Go to **Turnstile** in the left sidebar
3. Click **Add site**
4. Enter the domain name and complete the setup
5. Copy the **Site Key** and **Secret Key**
6. In the project, open `.env.local` and replace:
   ```
   NEXT_PUBLIC_TURNSTILE_SITE_KEY=their-site-key
   TURNSTILE_SECRET_KEY=their-secret-key
   ```
7. Redeploy the project

---

## Step 6 — Redeploy the Project

After updating the environment variables, they need to redeploy so the new keys take effect.

If deployed on **Cloudflare Pages**:
1. Go to Cloudflare Dashboard → **Pages** → select the project
2. Go to **Settings → Environment Variables**
3. Add all three variables from `.env.local`
4. Go to **Deployments** → click **Retry deployment** or push a new commit

---

## Handover Checklist

Work through this before considering the handover complete:

- [ ] GitHub repository transferred and they have confirmed access
- [ ] Cloudflare domain transferred and they have confirmed access
- [ ] `.env.local` shared securely via one-time link
- [ ] They have replaced the Web3Forms key with their own
- [ ] They have generated and replaced the Turnstile keys
- [ ] Project redeployed with new environment variables
- [ ] Contact form tested and sending to **their** inbox
- [ ] Subscribe form tested and sending to **their** inbox
- [ ] You have removed your own access to everything

---

## After Handover

Once everything above is confirmed, you are fully detached from the project. Nothing will route to your email, your GitHub, or your Cloudflare account.
