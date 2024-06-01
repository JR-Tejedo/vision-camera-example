import {Camera} from "react-native-vision-camera"
import {Alert, Linking} from "react-native"

export async function checkPermission(): Promise<boolean> {
    const hasCameraPermission = hasPermission()

    if(!hasCameraPermission) {
        const isGranted = await requestPermission()

        if (!isGranted) {
            Alert.alert("Mensaje", "Permisos de la cámara requeridas", [
                {text: "Aceptar", onPress: () => Linking.openSettings()}
            ])

            return false
        }
    }

    return true
}

function hasPermission() {
    return Camera.getCameraPermissionStatus() === 'granted'
}

async function requestPermission() {
    return await Camera.requestCameraPermission() === 'granted'
}