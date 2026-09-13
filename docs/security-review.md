# Pre-merge security review — PR #39

Reviewed 2026-09-13. The review covered the proposed contact integration, tracked files, both current GitHub Actions workflows, and all 83 commits reachable through locally available Git refs. Credential-pattern scanning covered 298 text blobs; 43 binary blobs were excluded from that text scan. Additional keyword candidates were manually reviewed. This is a scoped review, not a guarantee that every possible secret or vulnerability has been detected. GitHub account security settings and server-side provider implementation were not audited.

## Findings and decisions

### High privacy concern: embedded photo location metadata

`figures/circuit_sample.jpg` and `figures/circuit_sample_old.jpg` contained populated GPS latitude/longitude metadata. The coordinates are deliberately not reproduced here. Both current files have had their EXIF segments removed without recompressing the JPEGs. Decoded pixels and dimensions were verified identical before and after sanitization.

**Remaining exposure:** previously published commits still contain the original metadata, and production retains its current files until deployment. A new commit does not remove historical copies. If removal of old copies is required, coordinate a separate Git history rewrite, updates to affected branches/tags and clones, and any available hosting/cache cleanup. Public downloads and forks cannot be recalled. Do not perform a force-push or history rewrite as part of this PR without the owner's explicit agreement.

### Medium availability concern: public form ID can be abused

Web3Forms intentionally uses a public `access_key`. It permits inbound form submissions; it does not grant mailbox access or permission to administer the account. Putting it in a GitHub Actions secret, obscuring it, or injecting it at build time cannot conceal it from a visitor's browser.

The current free integration uses provider spam filtering and a hidden honeypot. The honeypot and client-side validation can be bypassed. Unwanted accepted submissions could consume the 250/month allowance and prevent legitimate enquiries until the allowance resets. No abuse was observed during this review.

Options before merge:

- Retain the current invisible experience and accept this residual risk, with usage/spam review in the provider dashboard.
- For stronger protection without a paid plan, integrate hCaptcha and require it in the provider's form settings. It can present a customer challenge, so this changes the requested invisible experience. Test valid, expired, missing, and rejected tokens before release.
- Paid Web3Forms features include domain restrictions and Turnstile. These conflict with the current free-only constraint. Domain restrictions reduce abuse; they should not be treated as a substitute for server-validated bot protection.

References: [public access keys](https://docs.web3forms.com/getting-started/faq), [hCaptcha integration and server enforcement](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha), [domain restrictions](https://docs.web3forms.com/getting-started/pro-features/restrict-to-domain).

### Privacy concern: email address in Git authorship

The receiving mailbox address is absent from website files but appears in public Git author/committer metadata, including commits predating this PR. Keeping the form recipient server-side does not remove this independent disclosure. The address is deliberately not repeated in these notes.

Use the owner's GitHub-provided no-reply author address for future commits and enable GitHub's email privacy/push-protection preferences as appropriate. Removing the existing address from older commits requires an explicitly coordinated history rewrite and cannot erase copies already downloaded. Do not assume a private-email setting retroactively changes existing commits.

## Other results

- No credential-pattern matches or credential-file names were found in the scanned history. The configured recipient mailbox address was absent from scanned file content. Historical commit authorship and intentionally published professional details are not hidden by this review.
- Form status uses `textContent`, and provider response messages are not inserted as HTML. No client-side mailbox credentials, server administration keys, or authentication tokens are present in the integration.
- The preview workflow does not check out or execute PR code, uses event data through the GitHub API context rather than interpolating it into executable script source, and limits its write permission to PR comments. The test workflow uses read-only repository permissions.
- Workflow actions currently use major-version tags. Pinning verified upstream commit SHAs is optional supply-chain hardening; no evidence of a compromised action was found.
- The form is not a confidential file-transfer channel. Enquiry contents are processed by Web3Forms and delivered by email. Do not describe the public form as end-to-end encrypted or suitable for secret technical material.
- Added ignore patterns for common local credential files to reduce accidental commits. Ignore rules do not protect already tracked files or browser-visible values.

PR #39 must remain unmerged until the owner has reviewed the location-history exposure, Git author email disclosure, and the form-abuse tradeoff.
