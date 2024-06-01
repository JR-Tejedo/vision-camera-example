import React from "react"
import {IoniconType} from "@/types/IoniconType"
import {Pressable, PressableProps} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import colors from "tailwindcss/colors"

interface IoniconButtonProps extends Omit<PressableProps, 'children'> {
    iconColor?: string
    iconName: IoniconType
    iconSize?: number
}

export default function ({iconColor = colors.slate["700"], iconName, iconSize, ...props}: IoniconButtonProps) {
    return (
        <Pressable {...props}>
            <Ionicons color={iconColor} name={iconName} size={iconSize}/>
        </Pressable>
    )
}