import React from 'react';
import { Document, Page, Text, View, PDFViewer } from 'react-pdf';

const PdfComponent = () => {
  const renderPDF = () => (
    <Document>
      <Page>
        <View>
          <Text>Hello, World!</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFViewer width="100%" height="500px">
      {renderPDF()}
    </PDFViewer>
  );
};

export default PdfComponent;
