import {PhotoFile} from "react-native-vision-camera"

export type CameraStateType = {
    flash: 'on' | 'off'
    is60fpsEnabled: boolean
    isHdrActivated: boolean
    isHighQualityRequired: boolean
    isShutterSoundEnabled: boolean
    photos: PhotoFile[]
    position: 'front' | 'back'
}