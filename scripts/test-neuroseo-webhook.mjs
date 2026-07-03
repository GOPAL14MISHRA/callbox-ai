import { createHmac } from 'node:crypto';

const args = process.argv.slice(2);
const useWrongSignature = args.includes('--wrong');
const targetUrl = args.find((arg) => !arg.startsWith('--')) ?? 'http://127.0.0.1:3100/api/neuroseo-webhook';
const body = args.find((arg) => arg.startsWith('{')) ?? JSON.stringify({ test: true });
const signingSecret = process.env.NEUROSEO_SIGNING_SECRET;

if (!signingSecret) {
  console.error('Set NEUROSEO_SIGNING_SECRET before running this script.');
  process.exit(1);
}

const signature = createHmac('sha256', signingSecret).update(body).digest('hex');
const headerValue = useWrongSignature ? `${signature.slice(0, -1)}${signature.at(-1) === '0' ? '1' : '0'}` : signature;

const response = await fetch(targetUrl, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'x-neuroseo-signature': headerValue,
    'x-neuroseo-event': 'ping',
  },
  body,
});

console.log(`status=${response.status}`);
console.log(await response.text());
