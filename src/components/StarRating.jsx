import React from 'react'

export const StarRating = ({rating, calificaciones}) => {
    return (
        <div className="star-rating">
            <label className='rating'>{rating}</label>
          {Array.from({ length: 5 }, (_, index) => {
            const fill = Math.max(0, Math.min(1, rating - index));
            return (
              <label key={index} className="star">   
                <label className="star-filled" style={{ width: `${fill * 100}%` }}>★</label> 
              </label>
            );
          })}
          <label className='resenas'>(130)</label>
        </div>
      );
}
