import {useRef, useState} from "react"
import {CameraStateType} from "@/types/CameraStateType"
import usePaddingInsets from "@/hooks/usePaddingInsets"
import {Camera, useCameraDevice, useCameraFormat} from "react-native-vision-camera"
import {Alert, Dimensions} from "react-native"

export default function () {
    const dimensions = Dimensions.get('window')

    const [cameraState, setCameraState] = useState<Partial<CameraStateType>>({
        flash: 'off',
        is60fpsEnabled: true,
        isShutterSoundEnabled: true,
        position: 'back'
    })

    const cameraReference = useRef<Camera>(null)

    const {pagePaddingBottom} = usePaddingInsets()
    const device = useCameraDevice(cameraState.position!)

    const format = useCameraFormat(device, [{
        fps: cameraState.is60fpsEnabled ? 60 : undefined,
        photoResolution: dimensions,
        photoHdr: !!cameraState.isHdrActivated,
        videoHdr: !!cameraState.isHdrActivated
    }])

    async function takePhoto() {
        const photo = await cameraReference.current?.takePhoto({
            enableShutterSound: cameraState.isShutterSoundEnabled,
            flash: cameraState.flash
        })

        if (photo) {
            setCameraState(prev => {
                const photos = prev.photos ?? []

                return {
                    ...prev,
                    photos: [...photos, photo]
                }
            })
        } else Alert.alert("Mensaje", "No se pudo sacar la foto. Intente nuevamente", [{text: "Aceptar"}])
    }

    function toggleCameraState(key: keyof typeof cameraState, value: any) {
        return () => setCameraState(prev => ({...prev, [key]: value}))
    }

    return {
        cameraReference,
        cameraState,
        device,
        format,
        pagePaddingBottom,
        takePhoto,
        toggleCameraState
    }
}