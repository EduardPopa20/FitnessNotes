export const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const passwordPattern = {
    min8Characters: /^.{8,}$/,
    max20Characters: /^.{1,20}$/,
    atLeastOneUppercase: /[A-Z]/,
    atLeastOneLowercase: /[a-z]/,
    atLeastOneDigit: /[0-9]/,
    atLeastOneSpecial: /[\!\?\*\.]/
};