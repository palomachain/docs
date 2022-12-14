# Paloma Station Mobile App

Paloma Station Mobile is an application that enables users to interact with Paloma.

Paloma Station Mobile allows users to:

- Create wallets and send tokens
- Get involved with staking by browsing through validator information and delegating GRAIN tokens.
- Use QRCodes for easy interactions when sending assets and recovering wallets

## URL Scheme

Paloma Station Mobile includes a custom [URL Scheme](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app) that lets developers trigger different actions in the app.

These URL handlers can be opened by scanning a QR code or opening the link directly.

### Send

The send function allows a user to send a specified amount of funds to a recipient. This function can be used to accept payment for goods and other point-of-sale configurations.

#### URL

```
Palomastation://send/?payload=${base64 json}
```

#### Payload format

| Key     | Description                                   | Required? |
| ------- | --------------------------------------------- | --------- |
| address | Paloma address to send funds to                |           |
| token   | Native token denom or cw20 contract address   | ✔️        |
| amount  | Amount of tokens in micro format              |           |
| memo    | Specific memo to include with the transaction |           |

#### Example

**Payload:**

```
{
  "address": "paloma1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8",
  "token": "ugrain",
  "amount": "250000",
  "memo": "Order #1122"
}
```

**Base64 encoded payload:**

```
ewogICJhZGRyZXNzIjogInRlcnJhMWRjZWd5cmVrbHRzd3Z5eTB4eTY5eWRneG45eDh4MzJ6ZHRhcGQ4IiwKICAidG9rZW4iOiAidXVzZCIsCiAgImFtb3VudCI6ICIyNTAwMDAiLAogICJtZW1vIjogIk9yZGVyICMxMTIyIgp9
```

**Full URL with encoded payload:**

```
Palomastation://send/?payload=ewogICJhZGRyZXNzIjogInRlcnJhMWRjZWd5cmVrbHRzd3Z5eTB4eTY5eWRneG45eDh4MzJ6ZHRhcGQ4IiwKICAidG9rZW4iOiAidXVzZCIsCiAgImFtb3VudCI6ICIyNTAwMDAiLAogICJtZW1vIjogIk9yZGVyICMxMTIyIgp9
```

**Find out more on [GitHub](https://github.com/paloma/station-mobile/#app-scheme).**
