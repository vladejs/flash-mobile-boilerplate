#### Boilerplate for modern hybrid mobile application development, Android & iOS

Bye bye ~react-scripts, webpack~ Welcome Speed

Experience the best mobile development experience so far:

- [x] Vite
- [x] Ionic
- [x] Capacitor
- [x] React.js
- [x] SCSS
- [x] Typescript
- [x] Jest
- [x] Storybook (no more slowness here)
- [x] ESLint and Prettier ready

HMR support on the device or simulator

> If you like my work please feel free to [buy me a coffee](https://www.paypal.com/paypalme/vladejs) and become an
> sponsor 👊😇

## Getting started

```
nvm install 16.15.0
nvm use
npm i -g yarn @capacitor/cli

yarn
yarn dev
```

You will have your app running on `http://localhost:3000`

## Pushing to your iPhone with HMR

> Same steps apply for android

0. Run your development server: `yarn dev`
1. Both your computer and phone must be on the same WiFi
2. Connect your iPhone to the computer via cable
3. Edit the file `capacitor.config.ts` and set your local IP address (it's shown when running `yarn dev`).
4. Follow

```
# open a new terminal
cap add ios # registers iOS platform
cap copy ios # copies the capacitor config to the ios app
```

5. On Xcode make sure your app has a development team certificate
6. Press the Run button targeting your iPhone

That's it, changing a React component should display the change instantly
on the app installed on your iPhone

## Storybook

You can use storybook to create isolated UIs. Just create `.stories.tsx` files
along your components.

```
yarn storybook
```

## Environment variables

Available through `import.meta.env.VARIABLE`
If you're using typescript, you can enable environment variables intellisense
by registering every environment on the `vite-env.d.ts` file.

```
# .env.development
VITE_APP_VERSION=0.0.1

# Tab1.tsx (or any other file)
const appVersion = import.meta.VITE_APP_VERSION
```

[More documentation](https://vitejs.dev/guide/env-and-mode.html#env-files)
