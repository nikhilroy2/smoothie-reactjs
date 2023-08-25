import React from 'react';
import NoReviewIcon from '../../assets/images/icons/no_review.svg';
function ProfileReviews({username}) {
    return (
        <div id='ProfileReviews'>
            <div className="infinite-scroll-component__outerdiv">
                <div className="infinite-scroll-component space-y-14 !overflow-visible !h-auto">
                    <div className="my-6 flex flex-col gap-2">
                        <div className="flex-center w-[48px] h-[48px]">
                            <img src={NoReviewIcon} className='w-[48px] h-[48px] object-cover' alt="img" />
                        </div>
                        <p className="text-h2">
                            {username} hasn't written reviews for any products yet
                        </p>

                        <p className="text-b2">
                            Once they do, the reviews will show up here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileReviews;