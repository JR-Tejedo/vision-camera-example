import React from "react"
import PhotoViewer from "@/components/PhotoViewer"
import MaterialCommunityIconsButton from "@/components/buttons/MaterialCommunityIconsButton"
import IoniconsButton from "@/components/buttons/IoniconsButton"
import EntypoButton from "@/components/buttons/EntypoButton"
import clsx from "clsx"
import MaterialIconsButton from "@/components/buttons/MaterialIconsButton"
import {CameraStateType} from "@/types/CameraStateType"
import {PressableProps, View, ViewProps} from "react-native"
import colors from "tailwindcss/colors"

interface CameraToolsProps extends Omit<ViewProps, 'children'>, Partial<CameraStateType> {
    onChange60fpsEnabled?: PressableProps['onPress']
    onChangeFlash?: PressableProps['onPress']
    onChangeHdr?: PressableProps['onPress']
    onChangeHighQuality?: PressableProps['onPress']
    onChangePosition?: PressableProps['onPress']
    onChangeShutterSound?: PressableProps['onPress']
    onTakePhoto?: PressableProps['onPress']
}

export default function ({flash, is60fpsEnabled, isHdrActivated, isHighQualityRequired, isShutterSoundEnabled, onChange60fpsEnabled, onChangeFlash, onChangeHdr, onChangeHighQuality, onChangePosition, onChangeShutterSound, onTakePhoto, photos, ...props}: CameraToolsProps) {
    return (
        <View className="p-6" {...props}>
            <View className="flex-row justify-between items-center">
                <PhotoViewer photos={photos} />

                <MaterialCommunityIconsButton
                    className="p-4"
                    iconName="circle-slice-8"
                    iconColor={colors.white}
                    iconSize={80}
                    onPress={onTakePhoto}
                />

                <IoniconsButton
                    className="p-4"
                    iconName="sync"
                    iconColor={colors.white}
                    iconSize={24}
                    onPress={onChangePosition}
                />
            </View>

            <View className="flex-row justify-evenly mt-6">
                <EntypoButton
                    className={clsx('p-2 rounded-full bg-white', flash === 'on' && 'bg-yellow-500')}
                    iconName="flash"
                    iconColor={flash === 'on' ? colors.white : colors.slate["700"]}
                    iconSize={18}
                    onPress={onChangeFlash}
                />

                <IoniconsButton
                    className={clsx('p-2 rounded-full bg-white', isShutterSoundEnabled && 'bg-yellow-500')}
                    iconName={isShutterSoundEnabled ? 'volume-high' : 'volume-mute'}
                    iconColor={isShutterSoundEnabled ? colors.white : colors.slate["700"]}
                    iconSize={18}
                    onPress={onChangeShutterSound}
                />

                <MaterialIconsButton
                    className={clsx('p-2 rounded-full bg-white', is60fpsEnabled && 'bg-yellow-500')}
                    iconName="60fps-select"
                    iconColor={is60fpsEnabled ? colors.white : colors.slate["700"]}
                    iconSize={18}
                    onPress={onChange60fpsEnabled}
                />

                <MaterialCommunityIconsButton
                    className={clsx('p-2 rounded-full bg-white', isHdrActivated && 'bg-yellow-500')}
                    iconName="hdr"
                    iconColor={isHdrActivated ? colors.white : colors.slate["700"]}
                    iconSize={18}
                    onPress={onChangeHdr}
                />

                <MaterialCommunityIconsButton
                    className={clsx('p-2 rounded-full bg-white', isHighQualityRequired && 'bg-yellow-500')}
                    iconName="quality-high"
                    iconColor={isHighQualityRequired ? colors.white : colors.slate["700"]}
                    iconSize={18}
                    onPress={onChangeHighQuality}
                />
            </View>
        </View>
    )
}