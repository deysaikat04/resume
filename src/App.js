import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./App.css";
import PdfViewer from "./components/document/PdfViewer";

const App = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="bg-gray-100">
      <Navbar
        numPages={numPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

      <PdfViewer setNumPages={setNumPages} />
    </div>
  );
};

export default App;
