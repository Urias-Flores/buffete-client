
import { useState } from "react";
import {Document, Page, pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SubcategoriaExpediente  ({ subcategory, showSubcategory, setShowSubcategory }){

  const { SubcategoryID, Name } = subcategory
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={`subcategory`}>
      <div
        className="record-subcategory-up"
        onClick={ () => { setShowSubcategory( showSubcategory === SubcategoryID ? 0 : SubcategoryID ) } }
      >
        <p>{ Name }</p>
        <img src="/img/chevron-down.svg" alt="arrow"/>
      </div>
      <div className={`documents ${ showSubcategory === SubcategoryID ? 'active' : '' }`}>
        {
          showSubcategory === SubcategoryID && (
            <>
              <Document
                file="https://api46.ilovepdf.com/v1/download/1wry1yg98d2xt71zr72dvfcdA2w21zkvr671ch8r6jzs91pnjjh7drqxg5q3vnjA2smmr1gk06lkxtrkjlwztypnx3ffs23g0g81vf6yt6ywb7dp4v7l71dqb4qb1nk2fbkzbp29n08mt2tlv4Arl0tq1xsrkclflnqcqc1rxftmnlncgq21"
                onLoadError={console.error}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber}/>
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </>
          )
        }

      </div>
    </div>
  )
}
