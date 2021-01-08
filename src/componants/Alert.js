import React from "react";
import { FcApproval } from "react-icons/fc";

const Alert = () => {
    return (
        <>

            <div
                className={
                    "text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500 md:w-1/2 w-11/12 m-auto"
                }
            >
                <span className="text-xl inline-block mr-5 align-middle">
                    <FcApproval className="text-5xl" />
                </span>
                <span className="inline-block align-middle mr-8 ">
                    <b className="capitalize">Thanks for being awesome! </b>

                </span>



                <div className="inline-block align-middle mr-8">
                    We appreciate you contacting us <br />
                    For further details stay in touch with your mail ID.<br />
                     And let us know if there’s anything else we can help you with.<br />

                    <span className="inline-block my-4  ">
                        -Team ACE PROFESSIONALS

                </span>

                </div>
            </div>

        </>
    );
};

export default Alert