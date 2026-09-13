# Contact delivery

The GitHub Pages website sends enquiries to Web3Forms. No application server, Gmail credentials, paid subscription, or build step is required. The receiving mailbox is configured in the owner's Web3Forms account and is not included in website code or these notes.

## Visitor experience

- `index.html` posts to `https://api.web3forms.com/submit` using the form's public access key. This key is a form identifier intended for browser code, not an account-management credential.
- `js/contact.js` sends JSON and keeps the visitor on the website. It confirms receipt only after both a successful HTTP response and an explicit `success: true` response body.
- The form validates required fields, rejects whitespace-only input, and uses the visitor's `email` field as Reply-To. Company and service are optional.
- Fields are temporarily disabled during submission to prevent duplicate sends or edits to a pending enquiry. Unconfirmed enquiries remain in the form, including after a network failure, rejection, or 20-second timeout. There are no automatic retries. Reloading or closing the page discards unsent fields; no browser draft storage is used.
- A hidden `botcheck` field supplements the service's enabled server spam filtering. There is no visible CAPTCHA or third-party success page in the JavaScript experience.
- Without JavaScript, native form submission requests a redirect to `https://innovetron.com/thanks.html`. This fallback URL becomes available when the PR is merged and GitHub Pages deploys it. Native submission errors are handled by the provider.

## Administration

Sign in at [Web3Forms](https://app.web3forms.com/) using the owner's verified account. The form is named **Innovetron — Project enquiries**.

In **Settings → Email Configuration**, the recipient is the owner's verified mailbox, the subject is `Innovetron — Project enquiry`, and the sender name is `Innovetron website`. These subject and sender defaults also appear in the HTML. Reply in the receiving mail application to contact the visitor. No automatic email is sent to visitors.

To move delivery to an Innovetron domain mailbox later:

1. Create the mailbox and confirm it can receive email.
2. Add and verify it under **Linked Emails** in Web3Forms.
3. Open this form's **Settings → Email Configuration**, replace the current recipient with the verified domain address, and save.
4. Send one test enquiry and confirm delivery and Reply-To in the new mailbox.

The public form key stays the same, so changing the recipient does not require a website code change. If the key itself is replaced, update the `access_key` input in `index.html` through a PR and repeat delivery verification. Never add login codes, passwords, or account-management API credentials to this public repository.

## Free plan and limits

The account was configured on the free plan on 2026-09-13. It currently allows **250 submissions per month**, one recipient per form, and additional verified linked email addresses. Usage is visible under **Billing & Usage**; the service documents warning emails near the limit and rejects submissions once the allowance is exhausted. No payment method or paid plan was added.

Server spam filtering is enabled. Domain restrictions, multiple simultaneous recipients, and autoresponder emails require a paid plan. The public key can receive unsolicited submissions; inspect usage and unwanted mail if spam increases. Free notification emails may contain the provider's branding in the owner's inbox.

Provider documentation: [pricing and limits](https://web3forms.com/pricing), [JavaScript integration](https://docs.web3forms.com/how-to-guides/html-and-javascript), [public access keys](https://docs.web3forms.com/getting-started/faq), [Reply-To](https://docs.web3forms.com/getting-started/customizations/custom-reply-to), [redirects](https://docs.web3forms.com/getting-started/customizations/redirection).

## Verification

On 2026-09-13:

- Submitted one labelled test enquiry through the actual form in Chrome at `http://localhost:8000/`; the page confirmed receipt, cleared fields, and remained on Innovetron.
- Confirmed the matching email in the configured Gmail **Inbox**, including name, email, company, service, message, subject, and Reply-To.
- Checked the contact layout at desktop and 390px mobile width, with no horizontal overflow. Browser validation blocked invalid email and whitespace-only messages without sending.
- Automated tests cover explicit success, HTTP/rejected/malformed responses, rate limits, network errors, actual abort handling, duplicate-send protection, retry, input validation, and clearing an old confirmation when a new enquiry starts. Static checks validate the public key and fallback target.

Run `node --check js/contact.js`, `node --check js/site.js`, and `node --test tests/*.test.cjs`. Live submissions consume the monthly allowance; automated tests are isolated and do not contact the service.

Production verification on `https://innovetron.com/` and the native POST redirect must follow the owner's PR approval, merge, and GitHub Pages deployment. Do not merge or deploy solely to perform a test.
