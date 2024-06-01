import React from "react"
import {PhotoFile} from "react-native-vision-camera"
import {ImageBackground, Text, View} from "react-native"

interface PhotoViewerProps {
    photos?: PhotoFile[]
}

export default function ({photos}: PhotoViewerProps) {
    return (
        <View className="h-20 w-14 border-4 border-slate-300 rounded-md bg-zinc-100">
            {
                photos !== undefined && photos.length > 0 && (
                    <ImageBackground
                        className="flex-1"
                        source={{uri: photos[photos.length - 1].path}}
                    />
                )
            }

            <View className="absolute -bottom-3 -right-3 rounded-full p-1 bg-gray-700 w-6 h-6 items-center justify-center">
                <Text className="text-white text-sm leading-tight font-semibold">{photos?.length ?? 0}</Text>
            </View>
        </View>
    )
}