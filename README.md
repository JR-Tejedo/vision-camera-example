# Example Implementation using react-native-vision-camera

This is a practical example of some of the functionalities provided by [**react-native-vision-camera**](https://react-native-vision-camera.com/). 

## First steps
* Open `Terminal` and cd into project root
* Run `npm install` to install dependencies

## Building the example app
In both cases, the device must be connected to the MAC.

### IOS
* Download and install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
* Install CocoaPods and pod dependencies
  * Run `sudo gem install cocoapods`
  * cd into `<project root>/ios`
  * Run `pod install`
    * This should create a Pods directory populated with the Pods specified in the Podspec
* Open `Terminal` and cd into `<project_root>`
* Run `npm run start`
* Open the `visioncamera.xcworkspace` file
* Choose the physical device name **(1)**
* Set up the signature settings **(2)**
* Run **(3)**

![signature_settings](./assets/images/signature_settings.png)

### Android
* Download and install [Android Studio](https://developer.android.com/studio)
* Go to project root and set up `local.properties`
* Open `Terminal` and cd into `<project_root>`
* Run `npm run android`

## Additional resources
* [expo-router](https://docs.expo.dev/router/introduction/)
* [nativewind](https://www.nativewind.dev/)
