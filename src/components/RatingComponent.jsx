import StarActiveIcon from '../assets/images/icons/star_active.svg';
import StarNotActiveIcon from '../assets/images/icons/star_not_active.svg';

export const RatingComponent = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="flex-center">
            {Array.from({ length: totalStars }).map((_, index) => (
                <div key={index} className="w-[18px] h-[18px]">
                    {index < rating ? (
                        <img src={StarActiveIcon} alt="img" />
                    ) : (
                        <img src={StarNotActiveIcon} alt="img" />
                    )}
                </div>
            ))}
        </div>
    );
};