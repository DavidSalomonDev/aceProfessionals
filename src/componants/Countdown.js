import React, { useState, useEffect } from 'react'

export const Countdown = (props) => {
    const { initialMinute = 35, initialSeconds = 10 } = props;
    const [hours ] = useState(0)
    const [minutes, setminutes] = useState(initialMinute)
    const [seconds, setseconds] = useState(initialSeconds)
    const [navbar, setnavbar] = useState(0)
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setnavbar(0);
        } else {
            setnavbar(-38);
        }
        prevScrollpos = currentScrollPos;
    }


    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setseconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setminutes(minutes - 1);
                    setseconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });







    if (seconds === 0 && minutes === 0) {
        return (
            <div className=" fixed bg-red-700 shadow-md block     py-3 md:px-6  z-50 w-full px-5 py-1 flex justify-between items-div" style={{ top: navbar }}>
                <div className="mb-0  text-center font-bold md:text-2xl text-xs m-auto text-white ">

                    <div className="block">Offer EXPIRED</div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div id="navbar" className=" fixed bg-red-700 shadow-md block     py-3 md:px-6  z-50 w-full px-5 py-1 flex justify-between items-center" style={{ top: navbar }}>
                <div className="mb-0 text-center font-bold md:text-2xl text-xs m-auto text-white ">

                    <div className="block">Limited Seats Book Now</div>
                </div>
                <ul className="flex mt-0 justify-center">
                    <li>  <div className="  text-center border rounded-lg border-red-700 bg-red-700 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline  ">
                        <span className="font-black m-0 p-0">{hours}</span><div className="text-xs font-extralight ">Hours</div></div></li>

                    <li>  <div className="  text-center border rounded-lg border-red-700 bg-red-700 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline  "><span className="font-black m-0 p-0">{minutes}</span><div className="text-xs font-extralight  ">Minutes</div></div></li>

                    <li>  <div className="  text-center border rounded-lg border-red-700 bg-red-700 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline  "><span className="font-black m-0 p-0">{seconds}</span><div className="text-xs  font-extralight">Seconds</div></div></li>

                </ul>
            </div>
        )
    }

}

