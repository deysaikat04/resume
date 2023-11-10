import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./App.css";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <div className="bg-slate-100 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex flex-row w-100 p-4 shadow bg-slate-200 md:flex">
        <p className="text-md text-slate-600">Resume</p>
        <div className="ml-4 text-blue-500 cursor-pointer">Download</div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="shadow-sm md:flex">
          <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <div className="shadow-sm mt-4 md:flex">
          <Document file="resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={2} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default App;
