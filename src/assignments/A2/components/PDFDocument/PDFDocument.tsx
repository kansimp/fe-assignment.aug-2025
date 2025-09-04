// PDFDocument.tsx
import { Document, Page, Text, StyleSheet, PDFViewer, View, Font } from '@react-pdf/renderer';
import { useAppSelector } from '@redux/hook';

function PDFDocument() {
    const form = useAppSelector((state) => state.form.form);
    Font.register({
        family: 'Roboto',
        fonts: [
            { src: 'fonts/Roboto-Regular.ttf', fontWeight: 'normal' },
            { src: 'fonts/Roboto-Bold.ttf', fontWeight: 'bold' },
        ],
    });
    return (
        <PDFViewer width="100%" height="100%">
            <Document>
                <Page size="A4" style={pdfStyles.page}>
                    {/* MAIN HEADER */}
                    <View style={pdfStyles.mainHeaderBox}>
                        <Text style={pdfStyles.mainHeader}>Personal Information Form</Text>
                    </View>

                    {/* PERSONAL INFO */}
                    <View style={pdfStyles.headerBox}>
                        <Text style={pdfStyles.header}>Personal Info</Text>
                    </View>
                    <View style={pdfStyles.sectionBox}>
                        <Text style={pdfStyles.text}>Full Name: {form.fullName}</Text>
                        <Text style={pdfStyles.text}>Email: {form.email}</Text>
                        <Text style={pdfStyles.text}>Phone: {form.phone}</Text>
                    </View>

                    {/* ADDRESS INFO */}
                    <View style={pdfStyles.headerBox}>
                        <Text style={pdfStyles.header}>Address Info</Text>
                    </View>
                    <View style={pdfStyles.sectionBox}>
                        <Text style={pdfStyles.text}>City: {form.city}</Text>
                        <Text style={pdfStyles.text}>Country: {form.country}</Text>
                    </View>

                    {/* EDUCATION */}
                    <View style={pdfStyles.headerBox}>
                        <Text style={pdfStyles.header}>Education</Text>
                    </View>
                    <View style={pdfStyles.sectionBox}>
                        <Text style={pdfStyles.text}>School: {form.school}</Text>
                        <Text style={pdfStyles.text}>Major: {form.major}</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default PDFDocument;

const pdfStyles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        backgroundColor: '#ffffff',
        fontFamily: 'Roboto',
    },
    mainHeaderBox: {
        backgroundColor: '#3b82f6',
        padding: 10,
        borderRadius: 6,
        marginBottom: 16,
        textAlign: 'center',
    },
    mainHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    headerBox: {
        backgroundColor: '#3b82f6',
        padding: 6,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 0,
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    sectionBox: {
        backgroundColor: '#f3f4f6',
        padding: 10,
        borderRadius: 4,
        marginBottom: 8,
    },
    text: {
        marginBottom: 4,
        color: '#374151',
    },
});
