import * as Yup from 'yup';

export const stepSchemas = [
    Yup.object({
        fullName: Yup.string()
            .trim()
            .required('Full name is required')
            .matches(/^[\p{L}\s'-]+$/u, 'Invalid full name'),
        email: Yup.string().trim().required('Email is required').email('Invalid email'),
        phone: Yup.string()
            .trim()
            .required('Phone is required')
            .matches(/^0\d{8,9}$/, 'Invalid phone'),
    }),
    Yup.object({
        city: Yup.string().trim().required('City is required'),
        country: Yup.string().trim().required('Country is required'),
    }),
    Yup.object({
        school: Yup.string().trim().required('School is required'),
        major: Yup.string().trim().required('Major is required'),
    }),
];
