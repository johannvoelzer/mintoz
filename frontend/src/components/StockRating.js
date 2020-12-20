import { useState, useEffect } from 'react'
import axios from 'axios'
import { RatingBox, RatingField, RatingBar } from '../styles/boxes/RatingBox'
import Details from '../styles/text/Details'

export default function StockRating({symbol}) {
    const [dataColor, setDataColor] = useState('#132F3E')
    const [rating, setRating] = useState([])
    const [ratingNumber, setRatingNumber] = useState()

    useEffect(() => {
        axios.get(`https://financialmodelingprep.com/api/v3/rating/${symbol}?apikey=***`)  
        .then(response => {
            if (response && response.data && response.data.length !== 0) {
                setRating(response.data[0])
                setRatingNumber(Math.round(((response.data[0].ratingDetailsDCFScore)
                +(response.data[0].ratingDetailsROEScore)
                +(response.data[0].ratingDetailsROAScore)
                +(response.data[0].ratingDetailsDEScore)
                +(response.data[0].ratingDetailsPEScore)
                +(response.data[0].ratingDetailsPBScore))*10/6)/10)
            }
        })
    }, [symbol])

    useEffect(() => {
        if (rating.ratingScore >= 3.5) {
            setDataColor('var(--green-main)')
        } else if (rating.ratingScore < 3.5 && rating.ratingScore >= 2.5) {
            setDataColor('var(--yellow-main)')
        } else if (rating.ratingScore < 2.5 && rating.ratingScore >= 0) {
            setDataColor('var(--red-main)')
        } else {
            setDataColor('transparent')
        }
    }, [rating])

    return (
        <RatingBox>
            <Details>
                <h5>RATING</h5>
                {rating.ratingRecommendation ? <h4>{rating.ratingRecommendation}</h4> : <h4 style={{color: 'var(--white-25)'}}>NO RATING YET</h4>}
            </Details>
            <RatingField>
                <RatingBar style={{background: dataColor, opacity: '80%', width: ratingNumber/5*100 + '%'}}>
                    <h5 style={{marginLeft: '8px', color: 'white'}}>{ratingNumber}</h5>
                </RatingBar>
            </RatingField>
        </RatingBox>
    )
}
