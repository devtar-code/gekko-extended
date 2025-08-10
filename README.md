# gekko-extended

Extended version of popular open source trading bot, Gekko.

## Binance connectivity test

This repository now includes a small script to verify that the environment can
reach Binance's public API. It uses only built-in Node.js modules and has been
confirmed to run on the latest Raspberry Pi OS (Raspbian) with Node.js 18.

Run the test with:

```bash
node binance-connect.js
```

The script will print the current BTC/USDT price if the connection succeeds.
