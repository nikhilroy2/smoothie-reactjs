import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-around items-center h-fit border rounded-lg py-3.5 px-3 space-x-2">
            <div className="text-center w-12">
                <p className="text-b1 font-bold">{timeLeft.days}</p>
                <p className="text-b2 font-medium text-foreground">days</p>
            </div>
            <div className="text-center w-12">
                <p className="text-b1 font-bold">{timeLeft.hours}</p>
                <p className="text-b2 font-medium text-foreground">hrs</p>
            </div>
            <div className="text-center w-12">
                <p className="text-b1 font-bold">{timeLeft.minutes}</p>
                <p className="text-b2 font-medium text-foreground">min</p>
            </div>
            <div className="text-center w-12">
                <p className="text-b1 font-bold">{timeLeft.seconds}</p>
                <p className="text-b2 font-medium text-foreground">sec</p>
            </div>
        </div>
    );
};


export default CountdownTimer;