import React from 'react'

function ShowReviews({hotel}) {
  return (
    <div>
        {
            hotel.reviews.map(e=>(
                <div>
                    <span>{e.score}</span>
                    <h5>{e.title}</h5>
                    <span>{e.comment}</span>
                </div>
            ))
        }
    </div>
  )
}

export default ShowReviews