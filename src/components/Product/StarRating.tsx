import StarRatings from 'react-star-ratings';

interface ratingType{
    rating: number
}

const StartRating = ({rating}: ratingType) => {
  return (
    <StarRatings 
        rating={rating}
        starRatedColor="rgb(251, 205, 21)"
        numberOfStars={5}
        name='rating'
        starDimension="24px"
        starSpacing="2px"
    />
  )
}

export default StartRating