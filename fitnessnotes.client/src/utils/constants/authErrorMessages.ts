const AuthErrorMessages = {
    RequiredField: "This field is required",
    MustBeEmail: "The email format is not correct",
    MaxLengthEmail: "Email must not be longer than 320 characters",
    MinLengthPassword: "Password must be at least 8 characters",
    MaxLengthPassword: "Password must not be longer than 20 characters",
    DifferentPasswords: "Passwords do not match",
    AtLeastOneUppercase: "Password must contain at least one uppercase letter",
    AtLeastOneLowercase: "Password must contain at least one lowercase letter",
    AtLeastOneDigit: "Password must contain at least one digit",
    AtLeastOneSpecial: "Your password must contain at least one (!? *.)",
    InvalidHeightDecimals: "Height must have up to 3 decimals",
    InvalidHeightInterval: "Height must be between 0.1 and 3.0 meters",
};

export default AuthErrorMessages;
