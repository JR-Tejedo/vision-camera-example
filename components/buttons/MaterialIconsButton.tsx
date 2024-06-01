import React from "react"
import {MaterialIconsType} from "@/types/MaterialIconsType"
import {Pressable, PressableProps} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import colors from "tailwindcss/colors"

interface MaterialIconsButtonProps extends Omit<PressableProps, 'children'> {
    iconColor?: string
    iconName: MaterialIconsType
    iconSize?: number
}

export default function ({iconColor = colors.slate["700"], iconName, iconSize, ...props}: MaterialIconsButtonProps) {
    return (
        <Pressable {...props}>
            <MaterialIcons color={iconColor} name={iconName} size={iconSize}/>
        </Pressable>
    )
}