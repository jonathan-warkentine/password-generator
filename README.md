# Password Generator

👉 [This application is live!](https://jonathan-warkentine.github.io/password-generator/)

---

## Description
This project seeks to provide the user with a sleek and intuitive interface from which they can customize and generate passwords. The project is deployed at https://jonathan-warkentine.github.io/password-generator/

## Usage
   
![Screenshot](./assets/images/demo.gif)

The app can be accessed via the above-listed URL. Length designation can be set via a sliding scale "range" selector, and various options to include or exclude symbols, numbers, uppercase, and lowercase letters can be checked or unchecked.

When the "Generate Password" button is clicked, then a randomized password according to the user-specifications is populated to the screen, and can be copied by clicking anywhere in the password's container, with an alert notifying the user that the password has been copied to the clipboard.

If the user attempts to copy the password by clicking *before* a password has been generated, the copy-by-clicking mechanism is short circuited and nothing happens.

If the user attempts to generate a password *without* uppercase, lowercase, symbols, or numbers, an error alert notifies the user that at least one option must be selected.

## Features
Most of the password generating apps I've seen use window prompts, confirmations, and alerts, which I find incredibly tacky.

## Tests
If the user attempts to copy the password by clicking *before* a password has been generated, the copy-by-clicking mechanism is short circuited and nothing happens.

If the user attempts to generate a password *without* uppercase, lowercase, symbols, or numbers, an error alert notifies the user that at least one option must be selected.

## License
This project is fully open source.