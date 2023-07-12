import Slider from "react-slick";
import './slider.css'
import {getHistograms} from "../../reqest/resultHistograms";
import {useState } from 'react'
import { Context } from '../../store';
import {useContext} from "react";

export default function HistogramsSlider() {
  const store = useContext(Context)
  const [isLoading, setLoading] = useState(false)
  const [histograms, setHistograms] = useState([])

  const loadHistograms = async () => {
    if (!isLoading) {
      setLoading(true)
      const histograms = await getHistograms(store.userInputData)
      // store.setHistograms(response.data)
      setHistograms((prev) => [...prev, ...histograms])
      setLoading(false)
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return ( 
    <div className="wrapper">
      <div className="wrapperSlader">
        <div className="hearders">
          <div className="hearder">Период</div>
          <div className="hearder">Всего</div>
          <div className="hearder">Риски</div>
        </div>
      <Slider className="flex-or-table"{...settings}>
        {histograms.map((num) => 
       					<div className="wrapperResults" > 
                  <div className="line"></div >
                  <div className="ResultContainer">
                    <div className="Result">{num.date}</div>
                    <div className="Result">{num.totalDocuments}</div>
                    <div className="Result">{num.riskFactors}</div>
                  </div>                     
               </div>)}
        {
          isLoading
            ? (
              <div className={'компонент загрузчика'}>Loading</div>
            )
            : null
        }
      </Slider>
      </div>
      </div>
  )
}