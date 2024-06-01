import * as ExpoSplashScreen from "expo-splash-screen"

export async function avoidSplashScreenAutoHide() {
    return await ExpoSplashScreen.preventAutoHideAsync()
}

export async function hideSplashScreen() {
    await ExpoSplashScreen.hideAsync()
}