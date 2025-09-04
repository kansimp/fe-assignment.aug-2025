import { useMemo, useState } from 'react';
import { User, Mail, MapPin, Globe, Phone, School, BookOpen } from 'lucide-react';
import PDFDocument from './components/PDFDocument/PDFDocument';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { Form, resetSubmitForm, updateSubmitForm } from '@redux/slices/A2/formSlice';
import { ErrorMessage, Formik } from 'formik';
import { stepSchemas } from './validation/formSchema';

const steps = ['Personal Info', 'Address Info', 'Education', 'Review'];

export default function A2() {
    const dispatch = useAppDispatch();
    const submitForm = useAppSelector((state) => state.form.form);
    const [step, setStep] = useState(0);

    const canContinue = (values: Form) => {
        return (
            (step === 0 && values.fullName && values.email && values.phone) ||
            (step === 1 && values.city && values.country) ||
            (step === 2 && values.school && values.major) ||
            step === 3
        );
    };

    return (
        <div className="flex h-screen p-6 bg-gradient-to-br from-blue-50 to-gray-100">
            {/* FORM AREA */}
            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    phone: '',
                    city: '',
                    country: '',
                    school: '',
                    major: '',
                }}
                validationSchema={stepSchemas[step]}
                onSubmit={(values) => {
                    setStep((s) => s + 1);
                    dispatch(updateSubmitForm(values));
                }}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ values, handleChange, handleSubmit, resetForm }) => (
                    <div className="w-1/2 p-8 bg-white rounded-2xl shadow-xl flex flex-col">
                        {/* Progress */}
                        <div className="flex items-center mb-10">
                            {steps.map((s, i) => (
                                <div key={i} className="flex items-center w-full">
                                    <div
                                        className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold shadow-md
                ${i <= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}
                                    >
                                        {i + 1}
                                    </div>
                                    <div className="flex-1 text-center text-xs font-medium">
                                        <p className={`${i <= step ? 'text-blue-600' : 'text-gray-400'}`}>{s}</p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className={`h-1 w-8 ${i < step ? 'bg-blue-600' : 'bg-gray-200'}`} />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Step 1 */}
                        {step === 0 && (
                            <div className="space-y-5">
                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <User className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="fullName"
                                        placeholder="Full Name"
                                        value={values.fullName}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="fullName" component="p" className="text-red-500 text-sm" />
                                </div>

                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <Mail className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                                </div>
                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <Phone className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="phone"
                                        placeholder="Phone"
                                        value={values.phone}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="phone" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                        )}

                        {step === 1 && (
                            <div className="space-y-5">
                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <MapPin className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="city"
                                        placeholder="City"
                                        value={values.city}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="city" component="p" className="text-red-500 text-sm" />
                                </div>
                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <Globe className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="country"
                                        placeholder="Country"
                                        value={values.country}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="country" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                        )}
                        {/* Step 3 */}
                        {step === 2 && (
                            <div className="space-y-5">
                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <School className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="school"
                                        placeholder="School"
                                        value={values.school}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="school" component="p" className="text-red-500 text-sm" />
                                </div>
                                <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                                    <BookOpen className="text-gray-400 mr-2" size={18} />
                                    <input
                                        name="major"
                                        placeholder="Major"
                                        value={values.major}
                                        onChange={handleChange}
                                        className="flex-1 outline-none"
                                    />
                                    <ErrorMessage name="major" component="p" className="text-red-500 text-sm" />
                                </div>
                            </div>
                        )}
                        {/* Step 4 */}
                        {step === 3 && (
                            <div className="space-y-6 text-gray-700">
                                <h2 className="text-xl font-bold text-blue-600 text-center">Review Your Information</h2>
                                <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
                                    <h3 className="text-lg font-semibold text-blue-500 mb-3">Personal Info</h3>
                                    <p>
                                        <strong>Full Name:</strong> {values.fullName}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {values.email}
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> {values.phone}
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
                                    <h3 className="text-lg font-semibold text-blue-500 mb-3">Address Info</h3>
                                    <p>
                                        <strong>City:</strong> {values.city}
                                    </p>
                                    <p>
                                        <strong>Country:</strong> {values.country}
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
                                    <h3 className="text-lg font-semibold text-blue-500 mb-3">Education</h3>
                                    <p>
                                        <strong>School:</strong> {values.school}
                                    </p>
                                    <p>
                                        <strong>Major:</strong> {values.major}
                                    </p>
                                </div>
                            </div>
                        )}
                        {/* button */}
                        <div className="flex justify-between mt-10">
                            <button
                                onClick={() => setStep((s) => Math.max(0, s - 1))}
                                disabled={step === 0}
                                className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition shadow-sm"
                            >
                                Back
                            </button>
                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={() => {
                                        handleSubmit();
                                    }}
                                    disabled={!canContinue(values)}
                                    className="px-6 py-2 rounded-xl text-white shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition disabled:opacity-50"
                                >
                                    Continue
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => {
                                        resetForm();
                                        dispatch(resetSubmitForm());
                                        setStep(0);
                                    }}
                                    className="px-6 py-2 rounded-xl text-white shadow-md bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition"
                                >
                                    Reset
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </Formik>
            {/* PDF PREVIEW */}
            <div className="w-1/2 ml-6 p-8 bg-white rounded-2xl shadow-xl flex flex-col">
                <h2 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">📄 PDF Preview</h2>
                <div className="flex-1 overflow-hidden rounded-xl border">
                    {useMemo(
                        () => (
                            <PDFDocument />
                        ),
                        [submitForm],
                    )}
                </div>
            </div>
        </div>
    );
}
