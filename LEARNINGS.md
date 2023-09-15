# React Security
![Alt text](react-security.png)

# Cross-site Scripting (XSS)
- This is done by embading some writing on to the url to gain access

1. Attacker submits malicious payload or link
2. The browser turns the payload into executable code.
3. Malicious code exfiltrates data or performs other actions.

## Impact of XSS Attacks
1. Stealing sensitive data.
2. Sending data receiving data.
2. Installing malware like keyloggers.
4. Account and session takeover.
5. Launching phishing attacks.
6. Evading security controls.

## DOM XSS Sourcing
- Sources are easily manipulated by attackers and are how malicious payloads are delivered to the application:
1. URLs
2. Cookies
3. Storage APIs

## JavaScript URLs in React
![Alt text](react-urls.png)