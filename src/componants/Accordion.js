import React, { useState } from 'react'
import { FcCollapse, FcExpand } from "react-icons/fc";


export const AccordionPage = () => {
    const [queone, setQueone] = useState(true)
    const [quetwo, setQuetwo] = useState(true)
    const [quethree, setQuethree] = useState(true)
    const [quefour, setQuefour] = useState(true)
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="1500" className="m-4 p-4 cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                <div className="accordion-div  block text-indigo-800 font-semibold" onClick={() => { setQueone(!queone) }}>
                SHOULD I HAVE TO PAY FOR THIS WEBINAR? {queone ? <FcExpand className="inline" /> : <FcCollapse className="inline" />}
                </div>
                <div
                    className={`accordion-item ${queone ? 'collapsed' : 'expanded'}`}
                >
            No, you don’t have to pay a single penny for this web conference.😊
                   
                </div>
            </div>

            <div data-aos="fade-up"
                data-aos-duration="1500" className="m-4 p-4 cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                <div className="accordion-div  block text-indigo-800 font-semibold" onClick={() => { setQuetwo(!quetwo) }}>
                I DONT HAVE ANY BUSINESS BACKGROUND, HOW SHOULD I START FROM SCRATCH? {quetwo ? <FcExpand className="inline" /> : <FcCollapse className="inline" />}
                </div>
                <div
                    className={`accordion-item ${quetwo ? 'collapsed' : 'expanded'}`}
                >
            No worries, anyone can learn anything on this earth, we have business experts who early belongs to engineering & medical professions  but Now they are doing very well.👍🏻
           
                   
                </div>
            </div>

            <div data-aos="fade-up"
                data-aos-duration="1500" className="m-4 p-4 cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                <div className="accordion-div  block text-indigo-800 font-semibold" onClick={() => { setQuethree(!quethree) }}>
                WHAT KIND OF BUSINESS MODEL ACE PROVIDES?{quetwo ? <FcExpand className="inline" /> : <FcCollapse className="inline" />}
                </div>
                         <div className={`accordion-item ${quethree ? 'collapsed' : 'expanded'}`}  >
                       No worries, anyone can learn anything on this earth, we have business experts who early belongs to engineering & medical professions  but Now they are doing very well.👍🏻
                        </div>
            </div>


            <div data-aos="fade-up"
                data-aos-duration="1500" className="m-4 p-4 cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                <div className="accordion-div  block text-indigo-800 font-semibold" onClick={() => { setQuefour(!quefour) }}>
                I DONT KNOW WHAT IS THIS MODEL, IS THIS FOR ME ?{quefour ? <FcExpand className="inline" /> : <FcCollapse className="inline" />}
                </div>
                         <div className={`accordion-item ${quefour ? 'collapsed' : 'expanded'}`}  >
                         Yes, this is for you, you can do this with us on a part-time basis too, your efforts will give you results.💰
                        </div>
            </div>
        </div>
    )
}










