import React from "react"
import {DefaultTheme, ThemeProvider} from "@react-navigation/native"
import {Stack} from "expo-router"

export default function () {
    return (
        <ThemeProvider value={DefaultTheme}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="camera" />
            </Stack>
        </ThemeProvider>
    )
}