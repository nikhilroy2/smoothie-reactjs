import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ProfileCompleteRange({isColumn=false}) {

    const [completeRate, setCompleteRate] = useState(20)
    
    return (
        <div className={`flex-center gap-x-4 w-full p-6 mt-3  border rounded-lg ${isColumn ? 'flex-wrap': 'mb-5'}`}>
            <div className="w-full space-y-6">
                <p className="text-b1 font-bold">
                    Your profile is {completeRate}% complete</p>

                <div className={`w-full bg-focus-gray-10 rounded-full `}>
                    <div className="h-2 bg-success-foreground rounded-full"
                        style={{ width: completeRate+'%' }} />
                </div>
            </div>

            <Link className={`flex-center rounded-[40px] h-fit disabled:opacity-80 disabled:cursor-default transition-all bg-foreground text-white not-disabled:hover:brightness-95 font-semibold p-3  ${isColumn ? 'mt-4 w-full': ' w-max '}`}
                to="/onboarding">
                <span className="px-3">Continue</span>
            </Link>

        </div>
    );
}

export default ProfileCompleteRange;