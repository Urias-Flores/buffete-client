import CloseButton from "./close_button";
import {Document, Page, pdfjs} from "react-pdf";
import {useEffect, useState} from "react";
import {useOutletContext} from "@remix-run/react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ModalDocument ({ URL, setShowModalDocument, isInternalDocument = false }: any){
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [beVisible, setBevisible] = useState(false);

    useEffect( () => {
      setTimeout(() => {
        setBevisible(true);
      }, 100)
    }, [])

    const hideModal = () => {
      setBevisible(false);
      setTimeout(() => {
        setShowModalDocument(false);
      }, 300)
    }


    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
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

    return (
      <div className={`modal ${ beVisible ? 'active' : '' }`}>
        <div className='document'>
          
          <CloseButton 
            hideModal={hideModal}
          />

          <Document
            file={ `https://grupo-sosamorales.com:8000/api/${isInternalDocument ? `internal-documents/` : 'documents/'}download/${URL}`}
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
