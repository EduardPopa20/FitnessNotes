import AuthErrorMessages from "../constants/authErrorMessages";

import { emailPattern, passwordPattern } from "../regexes/auth";
import numberPatterns from "../regexes/numbers";

export const hasAtLeast8Characters = (password: string): string => {
    if (!passwordPattern.min8Characters.test(password)) {
        return AuthErrorMessages.MinLengthPassword;
    }
    else {
        return ''
    }
}

export const hasAtMost20Characters = (password: string): string => {
    if (!passwordPattern.max20Characters.test(password)) {
        return AuthErrorMessages.MaxLengthPassword;
    } else {
        return '';
    }
};

export const hasAtLeastOneUppercase = (password: string): string => {
    if (!passwordPattern.atLeastOneUppercase.test(password)) {
        return AuthErrorMessages.AtLeastOneUppercase;
    } else {
        return '';
    }
};

export const hasAtLeastOneLowercase = (password: string): string => {
    if (!passwordPattern.atLeastOneLowercase.test(password)) {
        return AuthErrorMessages.AtLeastOneLowercase;
    } else {
        return '';
    }
};

export const hasAtLeastOneDigit = (password: string): string => {
    if (!passwordPattern.atLeastOneDigit.test(password)) {
        return AuthErrorMessages.AtLeastOneDigit;
    } else {
        return '';
    }
};

export const hasAtLeastOneSpecial = (password: string): string => {
    return !passwordPattern.atLeastOneSpecial.test(password) ? AuthErrorMessages.AtLeastOneSpecial : "";
};

export const isValidEmail = (email: string): string => {
    return !emailPattern.test(email) ? AuthErrorMessages.MustBeEmail : ''
}

export const isSamePassword = (password: string, confirmPassword: string): string => {
    return password !== confirmPassword ? AuthErrorMessages.DifferentPasswords : '';
}

export const isRequiredField = (fieldValue: string): string => {
    return fieldValue ? '' : AuthErrorMessages.RequiredField
}


export const isValidHeight = (height: string): string => {
    return !numberPatterns.lessThan2Decimals.test(height) ? AuthErrorMessages.InvalidHeightDecimals : '';
}