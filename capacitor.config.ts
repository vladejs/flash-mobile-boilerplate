import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.flash.boilerplate',
  appName: 'Flash',
  webDir: 'dist',
  bundledWebRuntime: false
}

// Configure this for using HMR on a device
// replace with your local network address
// then:
//  yarn start
//  cap copy ios
//  run the app from the native IDE
config.server = {
  url: 'http://192.168.100.79:3000',
  cleartext: true
}

export default config
