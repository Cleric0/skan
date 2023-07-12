import React from 'react';
import {getDocuments} from "../../reqest/document";
import {useState, useEffect} from 'react'
import { Context } from '../../store';
import {useContext} from "react";

function Documents() {
  const store = useContext(Context)
  const [isFirstPartLoaded, setIsFirstPartLoaded] = useState(false)
  const [isAllLoaded, setIsAllLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [documents, setDocuments] = useState([])

  const loadDocuments = async () => {
    if (!isLoading) {
      try {
      setIsLoading(true)
      const documents = await getDocuments(store.userInputData)
      setDocuments((prev) => [...prev, ...documents])
      setIsLoading(false)
      if (documents.length < store.userInputData.limit) {
        setIsAllLoaded(true)
      }
    } catch (e) {
      console.log(e)
      setIsLoading(false)
    }
  }}

  useEffect(() => {
    loadDocuments().then(() => setIsFirstPartLoaded(true))
  }, [])

  const buttonClickHandler = async () => {
    if (!isAllLoaded) {
      await loadDocuments()
    }
  }

  return (
    <div className={'обертка для блока с документами'}>
      {/* можно добавить ещё опциональную обертку, если необходимы отдельные стили отступов для загрузчика */}
      <div className={'обертка для документов'}>
        {documents.map((doc) => 
        <div className={'элемент документа'}>
          <div className="wrapperDateLink">
            <div className="date">{doc.date}</div>
            <a className="link" target="_blank">{}</a>
          </div>
          <h1 className="title">{}</h1>
          <div className="tag">Технические новости</div>
          <img className="image" alt="Картинка" />
          <p className="documentText">{}</p>
          <div className="wrapperBtnAmountWords">
            <button className="readMoreBtn">Читать в источнике</button>
          <div className="amountWords">{}</div>
		  </div>
        </div>)}
        {
          isLoading
            ? (
              <div className={'компонент загрузчика'}>Loading</div>
            )
            : null
        }
      </div>
      {
        !isLoading && isFirstPartLoaded && !isAllLoaded
          ? (
              <button
                onClick={buttonClickHandler}
                className={'показать больше'}
              >
                Показать больше
              </button>
          )
          : null
      }
    </div>
  );
}

export default Documents;