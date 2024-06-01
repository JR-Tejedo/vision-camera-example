import {useEffect} from "react"
import {router} from "expo-router"
import * as Camera from "@/utils/Camera"
import * as Screen from "@/utils/Screen"

export default function () {
    useEffect(() => {
        init()
    }, [])

    async function init() {
        if (await Camera.checkPermission()) {
            router.replace('/camera')
            await Screen.hideSplashScreen()
        }
    }
}