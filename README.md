# Web Simulation of Windows 11

This is a personal portfolio website with a Windows 11 theme, built using React.js and Tailwind CSS.

## Getting Started

To edit this project, clone it and make changes to the files in `/src/components`.

### Prerequisites

Make sure you have Node.js installed on your machine. You can use either Yarn or npm.

- Yarn: `yarn install`
- npm: `npm install`

### Running Locally

To run the project on localhost:

- Yarn: `yarn dev`
- npm: `npm run dev`

When you're done coding, use:

- Yarn: `yarn build`
- npm: `npm run build`

## Configuring the Contact Form

To enable the contact form:

1. Create an account on [EmailJS](https://www.emailjs.com/).
2. Create a new Outlook or Gmail account for sending emails.
3. Create a new service on EmailJS and log in with your newly created Outlook or Gmail account.
4. Copy the Service ID from the dashboard.
5. Create a `.env` file in your root folder and add the following:

    ```env
    VITE_SERVICE_ID = 'YOUR_SERVICE_ID'
    VITE_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
    VITE_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
    ```

    Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your EmailJS values.

## Scripts

This project was developed using Vite/React. Here are the available scripts:

### `yarn dev` / `npm run dev`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits, and you'll see any lint errors in the console.

### `yarn build` / `npm run build`

Builds the app for production in the `dist` folder.
It bundles React in production mode and optimizes the build for the best performance.
The build is minified, and filenames include hashes. Your app is ready to be deployed!

For more information on deployment, refer to the [Create React App Deployment Documentation](https://facebook.github.io/create-react-app/docs/deployment).

## Contributing

Contributions are welcome! If you'd like to contribute which will be **greatly appreciated**:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Added some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
