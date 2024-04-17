import AuthErrorMessages from "../constants/authErrorMessages"
import numberPatterns from "../regexes/numbers"

export const hasUpTo2Decimals = (height: string): string => {
    if (!numberPatterns.lessThan2Decimals.test(height)) {
        return AuthErrorMessages.InvalidHeightDecimals
    }
}