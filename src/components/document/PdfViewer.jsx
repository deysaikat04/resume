import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PdfViewer({ setNumPages }) {
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <section id="page_one" className="pt-12">
        <div className="md:flex md:flex-col md:items-center md:justify-center m-4">
          <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </section>
      <section id="page_two" className="pt-12">
        <div className="flex flex-col items-center justify-center mt-4">
          <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={2} />
          </Document>
        </div>
      </section>
    </>
  );
}

export default PdfViewer;
