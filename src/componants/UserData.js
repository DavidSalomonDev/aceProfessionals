import React, { useEffect, useState } from 'react'
import firebaseDb from "../firebase"



export const UserData = () => {
    const [list, setList] = useState({})
    useEffect(() => {
        firebaseDb.database().ref('message').on("value", snapshot => {
            if (snapshot.val() != null) {
                setList({ ...snapshot.val() })
            }

        })

    }, [])


    return (
        <div classNameName="overflow-auto">
            <div className="text-green-900  text-center my-4 mx-auto bg-green-200 py-3 px-6 rounded">
                                   User Data
                                </div>
            <div classNameName="md:px-32 py-8 m-4 flex items-center justify-center">
                <div classNameName="shadow container rounded border-b border-gray-200">
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Phone No.</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>

                            </tr>
                        </thead>

                        <tbody className="flex-1 sm:flex-none">
                            {Object.keys(list).map(data => {
                                return (
                                    <tr className="flex flex-col flex-no wrap sm:table-row my-4  bg-gray-200">
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span className="lg:hidden rounded-lg absolute top-2 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                                            {list[data].from_name}
                                        </td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span className="lg:hidden rounded-lg absolute top-2 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Phone No.</span>
                                            <a classNameName="hover:text-blue-500" href={`tel:${list[data].phoneNo}`}>{list[data].phoneNo}</a>
                                        </td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span className="lg:hidden rounded-lg absolute top-2 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                                            <a classNameName="hover:text-blue-500" href={`mailto:${list[data].to_name}`}>{list[data].to_name}</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}
