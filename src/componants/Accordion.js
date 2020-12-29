import React, { useState } from 'react'
import { FcCollapse, FcExpand } from "react-icons/fc";
export const Accordion = (props) => {

    const AccordionItem = ({ label, isCollapsed, handleClick, children }) => {
        return (
            <>
                <div data-aos="fade-up"
                    data-aos-duration="1500" className="m-4 p-4 cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                    <div className="accordion-div  block text-indigo-800 font-semibold" onClick={handleClick}>
                        {label} {isCollapsed ? <FcExpand className="inline" /> : <FcCollapse className="inline" />}
                    </div>
                    <div
                        className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
                        aria-expanded={isCollapsed}
                    >
                        {children}
                    </div>
                </div>
            </>
        );
    };

    const Accordion = ({ defaultIndex, onItemClick, children }) => {
        const [bindIndex, setBindIndex] = useState(defaultIndex);

        const changeItem = itemIndex => {
            if (typeof onItemClick === 'function') onItemClick(itemIndex);
            if (itemIndex !== bindIndex) setBindIndex(itemIndex);
        };
        const items = children.filter(item => item.type.name === 'AccordionItem');

        return (
            <>
                {items.map(({ props }) => (
                    <AccordionItem
                        isCollapsed={bindIndex !== props.index}
                        label={props.label}
                        handleClick={() => changeItem(props.index)}
                        children={props.children} key={props.index}
                    />
                ))}
            </>
        );
    };
    return (
        <div>
            <Accordion defaultIndex="1" >

                <AccordionItem label="SHOULD I HAVE TO PAY FOR THIS WEBINAR?" index="1">
                    No, you don’t have to pay a single penny for this web conference.😊
    </AccordionItem>

                <AccordionItem label="I DONT HAVE ANY BUSINESS BACKGROUND, HOW SHOULD I START FROM SCRATCH?" index="2">
                    No worries, anyone can learn anything on this earth, we have business experts who early belongs to engineering & medical professions  but Now they are doing very well.👍🏻
    </AccordionItem>

                <AccordionItem label="WHAT KIND OF BUSINESS MODEL ACE PROVIDES?" index="3">
                    AT ACE, you will meet with a combination of two models, an asset-light & franchisee model which is called HYBRID BUSINESS MODEL.✌🏻
    </AccordionItem>

                <AccordionItem label="I DONT KNOW WHAT IS THIS MODEL, IS THIS FOR ME ?" index="4">
                    Yes, this is for you, you can do this with us on a part-time basis too, your efforts will give you results.💰
    </AccordionItem>
            </Accordion>
        </div>
    )
}



