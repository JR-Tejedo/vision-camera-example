import {useSafeAreaInsets} from "react-native-safe-area-context"

export default function () {
    const insets = useSafeAreaInsets()

    const pagePaddingTop = insets.top === 0 ? 16 : insets.top + 4
    const pagePaddingBottom = insets.bottom === 0 ? 16 : insets.bottom + 4

    return {
        pagePaddingBottom,
        pagePaddingTop
    }
}