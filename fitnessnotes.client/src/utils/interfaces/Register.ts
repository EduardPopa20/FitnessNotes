import { Dayjs } from "dayjs";

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    country: string,
    city: string,
    birthday?: string | undefined;
    height?: number | undefined;
    weight?: number | undefined;
    phone: string;
}

export default RegisterFormData;