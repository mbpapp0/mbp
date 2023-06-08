import React from 'react';
import { Document, Page, Text, PDFViewer } from 'react-pdf';

const PdfComponent = () => {
  const renderPDF = () => (
    <Document>
      <Page>
          <Text>Hello, World!</Text>
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
