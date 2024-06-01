import React from "react"
import {MaterialCommunityIconsType} from "@/types/MaterialCommunityIconsType"
import {Pressable, PressableProps} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "tailwindcss/colors"

interface MaterialCommunityIconsButtonProps extends Omit<PressableProps, 'children'> {
    iconColor?: string
    iconName: MaterialCommunityIconsType
    iconSize?: number
}

export default function ({iconColor = colors.slate["700"], iconName, iconSize, ...props}: MaterialCommunityIconsButtonProps) {
    return (
        <Pressable {...props}>
            <MaterialCommunityIcons color={iconColor} name={iconName} size={iconSize}/>
        </Pressable>
    )
}