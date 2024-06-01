import React from "react"
import {EnypoType} from "@/types/EntypoType"
import {Pressable, PressableProps} from "react-native"
import {Entypo} from "@expo/vector-icons"
import colors from "tailwindcss/colors"

interface EntypoButtonProps extends Omit<PressableProps, 'children'> {
    iconColor?: string
    iconName: EnypoType
    iconSize?: number
}

export default function ({iconColor = colors.slate["700"], iconName, iconSize, ...props}: EntypoButtonProps) {
    return (
        <Pressable {...props}>
            <Entypo color={iconColor} name={iconName} size={iconSize}/>
        </Pressable>
    )
}