import {Document, Page, pdfjs} from "react-pdf";
import {useState} from "react";
import {useOutletContext} from "@remix-run/react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ModalDocument ({ URL, setShowModalDocument, isInternalDocument = false }){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const reduce = () => {
      if(pageNumber !== 1){
        setPageNumber(pageNumber - 1)
      }
    }

    const add = () => {
      if(pageNumber !== numPages){
        setPageNumber(pageNumber + 1)
      }
    }

    const context = useOutletContext();

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
            file={`${context.URL_API}/${ isInternalDocument ? 'internaldocument' : 'document' }/download/${URL}`}
            onLoadError={console.error}
            onLoadSuccess={onDocumentLoadSuccess}
            className='file'
          >
            <Page pageNumber={pageNumber}/>
          </Document>
          <div className='changerpage'>
            <img src="/img/arror-left.svg" alt="left" onClick={ reduce }/>
            <p>{pageNumber} / {numPages}</p>
            <img src="/img/arrow-right.svg" alt="right" onClick={ add }/>
          </div>
        </div>
      </div>
    )
}
