import React from "react"
import useSplashScreen from "@/hooks/pages/useSplashScreen"
import * as Screen from "@/utils/Screen"

Screen.avoidSplashScreenAutoHide()

export default function () {
    useSplashScreen()

    return undefined
}