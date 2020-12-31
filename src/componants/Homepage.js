import React, { useState } from 'react';
import { FcCheckmark, FcTodoList, FcAcceptDatabase, FcStart, } from "react-icons/fc";
import { FiMail, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { Countdown } from './Countdown';
import { AccordionPage } from './Accordion';
import { PopUpForm } from './PopUpForm';



export const HomePage = () => {
    const [isVideoOpen, setisVideoOpen] = useState(false)
    const [showModal, setshowModal] = useState(false)











    return (
        <div className={`overflow-x-hidden overflow-y-hidden `} >



            {showModal ? (
                <div>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

                    >
                        <div className="relative w-11/12  md:w-1/2 my-6 mx-auto h-3/4">
                            {/*content*/}
                            <div className="border-0 mt-6  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between px-5 py-1  border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Registeration Form
                  </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setshowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                    </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative  my-1 text-gray-600 text-lg leading-relaxed px-2 flex-auto">
                                    <PopUpForm setshowModal={setshowModal} />
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div >
            ) : null}







            <div className={!showModal ? "visible " : "invisible"} >

                <Countdown />
            </div>
            <h2>
                <span id="main"> &nbsp; </span>

            </h2>
            <div className="   text-gray-800    md:w-10/12 w-full m-auto" style={{ marginTop: "8rem" }}>
                <main id="main" className=" h-screen  md:h-auto md:h-5/6 flex flex-col md:flex-row  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6  lg:mt-20 lg:px-8 xl:mt-28 " style={{ height: "37rem" }}>
                    <div className="sm:text-center  p-3 lg:text-left"  >
                        <h1 data-aos-duration="1000" data-aos="fade-up" className="text-4xl tracking-tight font-bold  text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline "> Welcome to</span>
                            <span className="block text-indigo-800 xl:inline">ACE PROFESSIONALS</span>
                        </h1>
                        <p data-aos-duration="1000" data-aos="fade-up" className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            It doesn’t takes luck or money to succeed,<br />
                            You just need a new startup plan <br />- We’ll show you how!
                     </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div data-aos="fade-right" className="rounded-md shadow" style={{ transition: "all .15s ease" }} onClick={() => { setshowModal(true) }}>
                                <button className="w-full rounded flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                                    ✔ Book Now
                             </button>
                            </div>
                            <div data-aos="fade-left" className="mt-3 sm:mt-0 sm:ml-3" onClick={() => {
                                setisVideoOpen(true)
                            }}>
                                <a href="#video" className="w-full rounded flex items-center justify-center px-8  border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 py-1 md:text-lg md:px-10">
                                    I want to<br /> Learn more
                                 </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-duration="1500"
                        data-aos-easing="ease-out-cubic"
                        className=" mt-4 md:mt-0 md:w-1/2 mx-auto   p-6 md:p-4  rounded">
                        <img className=" w-1/2 md:w-9/12 p-6 md:p-4 m-auto" src={process.env.PUBLIC_URL + "/AceLogo.jpg"} alt="Logo" />
                    </div>
                </main>
                <div className="mt-12">
                    <center ><span data-aos="flip-down" data-aos-duration="1000" className="text-3xl text-gray-800 font-bold  mt-12 md:mt-4">Are you looking for…</span></center>

                    <ul className=" list-disc md:w-1/2 w-10/12 m-auto mb-12 text-blue-800">


                        <li>  <div data-aos-duration="1000" data-aos="fade-up-right" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex  text-gray-700">

                                A New professional startup with low investment?
      </p>
                        </div></li>
                        <li> <div data-aos-duration="1000" data-aos="fade-up-left" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                An extra professional income?
      </p>
                        </div></li>
                        <li>  <div data-aos-duration="1000" data-aos="fade-up-right" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                Backup income source for  your pasion & living ?
      </p>
                        </div></li>
                        <li>   <div data-aos-duration="1000" data-aos="fade-up-left" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                A side hustle to make your life better?
      </p>
                        </div></li>

                        <li>   <div data-aos-duration="1000" data-aos="fade-up-left" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                A home friendly business?
      </p>
                        </div></li>
                        <li>   <div data-aos-duration="1000" data-aos="fade-up-right" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                A system with inbuilt procedures, manuals, documents, ads & digital access?
      </p>
                        </div></li>
                        <li>   <div data-aos-duration="1000" data-aos="fade-up-left" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                An entrepreneurial career with Financial independence?
      </p>
                        </div></li>
                        <li> <div data-aos-duration="1000" data-aos="fade-up-right" className="flex justify-between px-2 py-2 </li>hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                Something new to accelerate life, disturbed due to COVID-19?
      </p>
                        </div></li>
                        <li>   <div data-aos-duration="1000" data-aos="fade-up-left" className="flex justify-between px-2 py-2 hover:bg-blue-100 rounded">
                            <p className="flex text-gray-700">

                                A high-income practical skill that can upgrade your respective profession?
      </p>
                        </div></li>

                    </ul>
                    <div data-aos-duration="1000" data-aos="fade-up"
                        className=" text-center my-12 px-2 py-2 hover:bg-blue-100 rounded">
                        <div className=" text-gray-700 pointer inline-block " onClick={() => {
                            setisVideoOpen(true)
                        }} >

                            If you fall in any of the categories just watch the video, It’ll hardly take your 5 minutes!
                        <center> <a href="#video" className="block text-2xl  bg-gray-200 rounded-lg  m-4 p-4  text-gray-900 pointer"><FcStart className="inline" />Click to watch the video</a></center>
                        </div>
                    </div>

                </div>
                <h2>
                    <span id="video"> &nbsp; </span>

                </h2>

                <div data-aos="fade-up"
                    className={`my-12 ${isVideoOpen ? "" : "hidden"}`}>

                    <center className="inline md:w-10/12  bg-blue  ">
                        <iframe width="100%" title="video" height="350" src="https://www.youtube.com/embed/4eWF2nftXsE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe></center>

                </div>
                <div className="mt-5 sm:mt-8  sm:flex sm:justify-center lg:justify-start">
                    <div data-aos="fade-right" className="rounded-md m-auto shadow" style={{ transition: "all .15s ease" }} onClick={() => { setshowModal(true) }}>
                        <button className="w-full rounded m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            <center>
                                Yes! the video was awesome,<br />
                        I want to register😊
                             </center>
                        </button>
                    </div>
                </div>
                <div className="my-4 border-2 rounded-lg">
                    <AccordionPage />
                </div>





                <div className="w-full my-12  m-auto ">
                    <center> <span data-aos-duration="1000" data-aos="fade-up"
                        className="block xl:inline  text-2xl tracking-tight font-bold  text-gray-900 sm:text-3xl md:text-4xl text-gray-700"> What you’ll get from the webinar?</span></center>
                    <center>  <span data-aos-duration="1000" data-aos="fade-up"
                        className="mt-3 text-base m-4 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> We understand your problem about starting something new with a simple & easy to replicate path for earning income.</span>
                    </center>
                    <center>

                        <h3 data-aos-duration="1000" data-aos="fade-up"
                            className="text-lg   text-gray-600">You’ll discover….</h3>
                    </center>
                    <ul className=" rounded-lg m-4 text-blue-800">

                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div> Exact way to earn income,  that fits best for your financial goals.</div></div>
                        </li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>How to kick start a micro entrepreneurship with aces</div></div> </li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>Real truth & myths of business world.</div></div></li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>How to start earning in next 30 days with Ace.</div></div></li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg"><div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>To operate everything with our Special management system.</div></div></li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg"><div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>Exactly from the ground-level  to high level income.</div></div></li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg"><div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>Handholding support & system that can help.</div></div></li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg"><div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>How you can run and operate everything very smoothly.</div></div></li>
                        <li data-aos-duration="1000" data-aos="flip-up" className="mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg"><div className="flex"><div className="md:mt-1 md:m-auto list_icon px-1">  <FcCheckmark /> </div><div>Discover a FREE bonus specially designed for your growth.</div></div></li>
                    </ul>

                </div>


                <div className="mt-5 sm:mt-8  sm:flex sm:justify-center lg:justify-start">
                    <div data-aos="fade-right" className="rounded-md m-auto shadow" style={{ transition: "all .15s ease" }} onClick={() => { setshowModal(true) }}>
                        <button className="w-full rounded m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            <center>
                                Book my Slot 💯
                             </center>
                        </button>
                    </div>
                </div>


                <center className="w-full m-auto  md:leading-loose my-12">

                    <div data-aos="flip-up" data-aos-duration="1000" className="block">
                        <div className="bg-white rounded   border p-6 m-auto ">
                            <span className=" text-xl">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center  w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                                DISCLAIMER:-
                           </span>

                            <span className="block text-lg">  <span className="font-bold "> 60 MINUTES</span> on Netflix & time flies, lets watch another one but <span className="font-bold "> 60 MINUTES</span> to learn new business & skills, I wish I had a time</span>

                            <span className="block text-lg">    Choose wisely because what you'll do today will determine your tomorrow.</span>

                            <span className="block text-lg">   <span className="font-bold ">  WE ARE NOT SELLING ANYTHING TO YOU</span>, it's chance to get something better</span>

                            <span className="block text-lg">    DON’T MISS IT</span>

                        </div>
                    </div>
                </center>




                <div className="my-12">

                    {/* flex need to change */}

                    <center>   <div data-aos="flip-up" data-aos-duration="1000" className="block text-center xl:inline  text-2xl  font-bold  text-gray-900 sm:text-3xl md:text-4xl text-gray-700  "> <FcTodoList className="inline" /> Ready ? Just follow the 3 steps below….</div></center>
                    <div className="flex flex-wrap justify-between m-4">
                        <div data-aos-duration="1000" data-aos="flip-up" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div className="w-10 ring-offset-4 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"> 1 </div>
                                <span className="text-lg   font-medium title-font mb-2">Filling The Form</span>
                                <p className="leading-relaxed text-base">We first need you to fill the forum below so We can get an overview about you .</p>

                                <div className="text-center mt-2 leading-none flex justify-between w-full">
                                    <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                        <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                  2 sec
                </span>
                                    <div onClick={() => { setshowModal(true) }} className=" inline-flex items-center curser leading-none text-sm">
                                        <FcAcceptDatabase className="inline" />
                    Form Link
                </div>

                                </div>

                            </div>
                        </div>

                        <div data-aos-duration="1000" data-aos="flip-up" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div className="w-10 ring-offset-4 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic">
                                    2
                                 </div>
                                <span className="text-lg  font-medium title-font mb-2">Click on the register button</span>
                                <p className="leading-relaxed text-base">So that we can enroll you in our system to share further details.</p>

                                <div className="text-center mt-2 leading-none flex justify-between w-full">
                                    <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                        <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                  2 sec
                </span>

                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-up" data-aos-duration="1000" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-300 p-6 rounded-lg">
                                <div className="w-10 ring-offset-4 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    3
              </div>
                                <span className="text-lg  font-medium title-font mb-2">Congratulations</span>
                                <p className="leading-relaxed text-base">Congratulations you have been  registered successfully your mail in our records.
                Stay in touch with your mail ID.We'll share the details there.</p>

                                <div className="text-center mt-2 leading-none flex justify-between w-full">
                                    <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                                        <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" /></svg>
                  3 sec
                </span>

                                </div>

                            </div>
                        </div>
                    </div>
                    {/* flex end */}

                    <div data-aos="zoom-in" data-aos-duration="2000" className="font-bold text-center text-lg  ">    IT HARDLY TAKES 60 SECONDS, DON’T MISS IT</div>
                </div>



                <div className="mt-5 sm:mt-8  sm:flex sm:justify-center lg:justify-start">
                    <div data-aos="fade-right" className="rounded-md m-auto shadow" style={{ transition: "all .15s ease" }} onClick={() => { setshowModal(true) }}>
                        <button className="w-full rounded m-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            <center>
                                ✔   Excited & want to Register🤩
                             </center>
                        </button>
                    </div>
                </div>

                <div className="my-6">

                </div>



                <div className="my-6">
                    <div data-aos="zoom-out-right" data-aos-duration="1000" className="font-bold text-center ">
                        <span className="block text-center xl:inline  text-2xl  font-bold  text-gray-900 sm:text-3xl md:text-4xl text-gray-600 ">COME, MAY BE THIS IS ONLY FOR YOU</span>    </div>
                    <div className="my-4 py-4 md:w-1/2 w-10/12 m-auto cursor-pointer border-2 rounded-lg text-sm group">

                        <ul className="  list-disc md:w-1/2 w-10/12 m-auto text-blue-800">
                            <li data-aos="flip-left" data-aos-duration="1000" >Straightforward  <span className="font-bold ">Micro entrepreneurship </span>Plan.   </li>
                            <li data-aos="flip-right" data-aos-duration="1000"> <span className="font-bold ">Video+</span> post marketing Ads for  <span className="font-bold ">National & International regions</span></li>
                            <li data-aos="flip-left" data-aos-duration="1000"> <span className="font-bold ">frameworks, process manuals,</span></li>
                            <li data-aos="flip-right" data-aos-duration="1000">SOP’s, documents, <span className="font-bold ">letterheads</span>+</li>
                            <li data-aos="flip-left" data-aos-duration="1000">Group Discussions, <span className="font-bold ">strategy sheets,</span> </li>
                            <li data-aos="flip-right" data-aos-duration="1000">Feedback forms, <span className="font-bold ">tracker</span> tools.</li>
                            <li data-aos="flip-left" data-aos-duration="1000"><span className="font-bold ">Email</span> marketing support+ <span className="font-bold ">lead</span> management</li>
                            <li data-aos="flip-right" data-aos-duration="1000">Financial & Productivity <span className="font-bold ">planner</span> </li>
                            <li data-aos="flip-left" data-aos-duration="1000">Grab 21st century’s top <span className="font-bold ">High Income Skills</span>.</li>
                            <li data-aos="flip-right" data-aos-duration="1000">Digital <span className="font-bold ">web+ app</span> Access </li>
                            <li data-aos="flip-left" data-aos-duration="1000"><span className="font-bold ">Promotions</span> for lead generation</li>
                        </ul>
                    </div>
                    <div data-aos="flip-down" data-aos-duration="1000" className="max-w-6xl mx-auto sm:px-6 py-4  bg-gray-900 text-gray-100 rounded-lg px-6">
                        <span className="glow block  text-4xl">FREE</span>
                        <div className="md:text-center font-bold text-1xl"> For webinar attendee’s,<br />
                            <span className="text-4xl animate-ping color_red" >ACEFLIX</span>     <br />
                            IS A FREE BONUS…
                            <span className="block">21 DAYS CARREER & SKILLS RELATED SHOWS</span>
                        </div>
                        <div>
                            Or you can Watch live <del className="text-2xl">@500</del> <span className="text-2xl glow">@99</span>   only.
                            </div>
                        <u> <a href="#form"> No Thanks, I Only want free webinar.</a></u>

                        <div className="max-w-5xl mx-auto sm:px-6 py-4">
                            <div className="text-center animate-bounce text-lg m-0 ">The ACEFLIX Shows 👇🏻 </div>
                            <div className="flex flex-wrap m-4">

                                <div className="text-teal-900  my-4 mx-auto bg-teal-200 py-3 px-6 rounded">
                                    <p>Personality pro 👋<br />
                    ALPHA MEN & WOMEN<br />

                    INFUENCER SKILLS </p>
                                </div>
                                <div className="text-purple-900   my-4 mx-auto bg-purple-200 py-3 px-6 rounded">
                                    <p>Interviews skills. 🎁<br />
                    JOB INTERVIEWS, <br /> MANNERS,<br />BUSINESS & RELATION.</p>
                                </div>
                                <div className="text-green-900   my-4 mx-auto bg-green-200 py-3 px-6 rounded">
                                    <p>Public speaking.🎉<br />
                    COMMUNICATION,<br />  SALES & LEADERSHIP </p>
                                </div>
                                <div className="text-teal-900   my-4 mx-auto bg-teal-200 py-3 px-6 rounded">
                                    <p>Success. 💞<br />
                    PRINCIPLES OF SUCCESS<br />
                     & SELF BUILDING</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div data-aos="zoom-in-up" data-aos-duration="1000" className="text-center block text-center   text-2xl  font-bold  text-gray-900 sm:text-3xl md:text-4xl text-gray-600">Check These free e-books</div>
            <div data-aos="zoom-in-up" data-aos-duration="1000" className="overflow-x-auto  flex md:justify-center w-11/12 m-auto ">
                <a href="https://drive.google.com/file/d/1j1Br8x5S8g4AvNnC-7wGD7Ik1b2B2K6V/view?usp=sharing" className="  mx-2">  <img className="w-48  m-2  inline" src={process.env.PUBLIC_URL + "/e-book2.jpg"} alt="ebook" /></a>
                <a href="https://drive.google.com/file/d/1j4kch62Zyh10FKHu-vS19AlDpFCKP5xj/view?usp=sharing" className="  mx-2">    <img className="w-48  m-2  inline" src={process.env.PUBLIC_URL + "/e-book4.jpg"} alt="ebook" /></a>
                <a href="https://drive.google.com/file/d/1ihDwPMW8BpdXk1vnak2dLTLTk1Yo-JdM/view?usp=sharing" className="  mx-2"> <img className="w-48  m-2  inline" src={process.env.PUBLIC_URL + "/e-book5.jpg"} alt="ebook" /></a>
            </div>
            <h2>
                <span id="form"> &nbsp; </span>

            </h2>
            <PopUpForm />
            <div className="bg-yellow-600 font-seria bg-opacity-25 my-4 text-center p-4 md:w-1/2 md:m-auto font-bold text-white text-lg" style={{ transition: "all .15s ease" }} onClick={() => { setshowModal(true) }}>
                <p className="p-4">

                    LAUNCH your new year with the most effective success  coaching program which is now FREE for everyone courtesy of ACE PROFESSIONALS
</p>

                <a href="#form" className="bg-black inline-block text-yellow-600 p-4 font-bold rounded-lg ">RESERVE YOUR SPOT NOW
   <span className="block font-light">100% FREE</span>

                </a>

            </div>

            <footer className="h-2/3 bg-gray-800 p-4 text-white text-center">
                <div className="flex w-12/13">
                    <div className="md:m-auto">
                        ACE PROFESSIONALS ♠️
                    <ul className="flex flex-row justify-center">

                            <li className="m-2 p-2 text-2xl"> <a href="mailto:professionalaces@gmail.com"><FiMail className="text-white" /></a></li>
                            <li className="m-2 p-2 text-2xl"><a href="https://www.facebook.com/professionalaces"> <FiFacebook className="text-white" /></a></li>
                            <li className="m-2 p-2 text-2xl"><a href="https://www.instagram.com/ace_professionals/"> <FiInstagram className="text-white" /></a></li>
                            <li className="m-2 p-2 text-2xl"> <a href="https://twitter.com/pro_aces"><FiTwitter className="text-white" /></a></li>
                            <li className="m-2 p-2 text-2xl"> <a href="https://www.youtube.com/channel/UCSfUb50DjPGLYXS-PKOK6XA"> <FiYoutube className="text-white" /></a></li>
                        </ul>
                        <div className="block text-lg">Copyright © 2020 Ace Professionals Business Solutions Company </div>
                    </div>

                </div>
                <span >Made With ❤ By <a href="https://www.instagram.com/vipansh_thakur/" className="pointer">Vipansh</a></span>


            </footer>




            <a href="https://api.whatsapp.com/send?phone=+918351023981&text=Thank%20you%20for%20contacting%20Ace%20Professionals%20😄
            %20We%20will%20get%20back%20to%20you%20shortly!
            %20Please%20leave%20your%20message... 
            %20Namaste🙏🏻&source=&data=">



                <div className={`fixed bottom-0 md:hidden flex z-50 justify-end mx-12 ${!showModal ? "visible " : "invisible"}`} style={{ right: "-10%", bottom: "5%" }}>


                    <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94 36.666l-.065-.113A23.322 23.322 0 011.761 24.89C1.766 12.027 12.236 1.562 25.098 1.562c6.24.002 12.103 2.432 16.508 6.842a23.2 23.2 0 016.831 16.505C48.431 37.774 37.963 48.24 25.1 48.24A23.39 23.39 0 0113.937 45.4l-.109-.06-12.134 3.182L4.94 36.666z" fill="#F2FAFF"></path><path d="M25.098 1.875c6.156.002 11.94 2.399 16.287 6.75a22.891 22.891 0 016.74 16.284c-.006 12.692-10.335 23.018-23.034 23.018a23.064 23.064 0 01-11.004-2.801l-.218-.12-.24.064-11.49 3.013 3.068-11.209.07-.252-.131-.226A23.007 23.007 0 012.072 24.89C2.08 12.2 12.408 1.875 25.099 1.875zm0-.625c-13.034 0-23.644 10.606-23.65 23.64a23.58 23.58 0 003.156 11.82L1.25 48.961l12.537-3.288a23.633 23.633 0 0011.303 2.878h.01c13.034 0 23.644-10.606 23.65-23.642a23.513 23.513 0 00-6.923-16.727c-4.465-4.47-10.402-6.931-16.729-6.933z" fill="#788B9C"></path><path d="M24.994 43.75a18.773 18.773 0 01-8.958-2.279l-1.792-.977-1.974.517-4.051 1.062 1.037-3.788.566-2.07-1.073-1.859a18.726 18.726 0 01-2.499-9.365c.004-10.333 8.415-18.74 18.748-18.741a18.635 18.635 0 0113.263 5.496 18.642 18.642 0 015.489 13.26c-.005 10.336-8.416 18.744-18.756 18.744z" fill="#79BA7E"></path><path d="M35.35 29.61c-.562-.28-3.325-1.641-3.839-1.828-.515-.188-.89-.28-1.264.281-.375.563-1.451 1.828-1.778 2.202-.328.374-.655.421-1.218.141-.562-.28-2.373-.875-4.518-2.788-1.672-1.49-2.8-3.33-3.126-3.892-.328-.563-.036-.866.246-1.147.252-.252.563-.657.843-.984.28-.328.375-.563.563-.938.188-.374.094-.703-.047-.984-.141-.28-1.264-3.047-1.733-4.17-.456-1.095-.92-.947-1.265-.964a21.778 21.778 0 00-1.076-.019c-.374 0-.984.141-1.498.704-.514.562-1.967 1.921-1.967 4.686 0 2.765 2.014 5.437 2.294 5.811.281.375 3.962 6.049 9.6 8.482 1.34.578 2.389.924 3.204 1.184 1.345.427 2.57.367 3.54.222 1.08-.162 3.325-1.359 3.791-2.67.47-1.313.47-2.438.328-2.672-.142-.235-.517-.376-1.08-.657z" fill="#fff"></path></svg>

                </div>


            </a>
        </div >

    )
}
