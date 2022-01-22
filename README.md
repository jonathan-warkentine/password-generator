# Password Generator

👉 [This application is live!](https://jonathan-warkentine.github.io/password-generator/)

---

## Description
This project seeks to provide the user with a sleek and intuitive interface from which they can customize and generate passwords. The project is deployed at https://jonathan-warkentine.github.io/password-generator/

## Usage
   
![Screenshot](./assets/images/demo.gif)

The app can be accessed via the above-listed URL. Length designation can be set via a sliding scale "range" selector, and various options to include or exclude symbols, numbers, uppercase, and lowercase letters can be checked or unchecked. Every time a user input is registered, a password according to the desired specifications will automatically be generated and displayed, and can be copied by clicking anywhere in the password's container. An alert then notifies the user that the password has been copied to the clipboard.

If the "Generate Password" button is clicked, a password will be generated once more according to the user specifications.

If the user attempts to generate a password *without* uppercase, lowercase, symbols, or numbers, an error alert notifies the user that at least one option must be selected.

## Features
Most of the password generating apps I've seen use window prompts, confirmations, and alerts, which seem painful and tedious to have to use. Additionally, manually entering the digits for the length of password that you want, or else clicking up and down through the HTML type "number" input, seems a lot less smooth than clicking once on a slider and dragging it where you'd like to go.

The app also generates passwords *as the user interacts with inputs*, meaning the passwords are generated and updated in real time while the user interacts with the webpage, further heightening the seamless user experience.

If the user attempts to copy the password by clicking *before* a password has been generated, the copy-by-clicking mechanism is short circuited and nothing happens.

If the user attempts to generate a password *without* uppercase, lowercase, symbols, or numbers, an error alert notifies the user that at least one option must be selected.

The CSS styling is responsive, adapting for viewing on mobile devices.

## Tests
If the user attempts to copy the password by clicking *before* a password has been generated, the copy-by-clicking mechanism is short circuited and nothing happens.

If the user attempts to generate a password *without* uppercase, lowercase, symbols, or numbers, an error alert notifies the user that at least one option must be selected.

## License
This project is fully open source.