import {Document, Page, pdfjs} from "react-pdf";
import {useState} from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ModalDocument ({ URL, setShowModalDocument }){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
      <div className='modal'>
        <div className='document'>
          <img
            src="/img/x.svg"
            className="button-close"
            alt="close"
            onClick={
              ()=> {
                setShowModalDocument(false)
              }
            }
          />
          <Document
            file={`http://localhost:3001/api/document/download/${URL}`}
            onLoadError={console.error}
            onLoadSuccess={onDocumentLoadSuccess}
            className='file'
          >
            <Page pageNumber={pageNumber}/>
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    )
}
