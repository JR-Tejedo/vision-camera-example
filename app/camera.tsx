import React from "react"
import useCamera from "@/hooks/pages/useCamera"
import CameraTools from "@/components/CameraTools"
import {StyleSheet, View} from "react-native"
import {Camera} from "react-native-vision-camera"

export default function () {
    const {
        cameraReference,
        cameraState,
        device,
        format,
        pagePaddingBottom,
        takePhoto,
        toggleCameraState
    } = useCamera()

    if (!device) return undefined

    return (
        <View className="flex-1">
            <Camera
                device={device}
                format={format}
                fps={cameraState.is60fpsEnabled ? 60 : format?.maxFps}
                isActive
                photo
                photoHdr={format?.supportsPhotoHdr}
                photoQualityBalance={cameraState.isHighQualityRequired ? 'quality' : 'balanced'}
                ref={cameraReference}
                style={StyleSheet.absoluteFill}
                videoHdr={format?.supportsVideoHdr}
            />

            <View className="justify-end " style={StyleSheet.absoluteFill}>
                <CameraTools
                    {...cameraState}
                    className="bg-slate-700/40"
                    onChange60fpsEnabled={toggleCameraState('is60fpsEnabled', !cameraState.is60fpsEnabled)}
                    onChangeFlash={toggleCameraState('flash', cameraState.flash === 'on' ? 'off' : 'on')}
                    onChangeHdr={toggleCameraState('isHdrActivated', !cameraState.isHdrActivated)}
                    onChangeHighQuality={toggleCameraState('isHighQualityRequired', !cameraState.isHighQualityRequired)}
                    onChangePosition={toggleCameraState('position', cameraState.position === 'back' ? 'front' : 'back')}
                    onChangeShutterSound={toggleCameraState('isShutterSoundEnabled', !cameraState.isShutterSoundEnabled)}
                    onTakePhoto={takePhoto}
                    style={{paddingBottom: pagePaddingBottom}}
                />
            </View>
        </View>
    )
}