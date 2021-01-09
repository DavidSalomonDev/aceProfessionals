import React, { useEffect, useState } from 'react'
import { getUserData } from '../functions/airtable'



export const UserData = () => {
    const [list, setList] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        getUserData().then((res) => setList(res)).catch(() => setError(true))

    }, [])




    if (error) return <div>Oops, Something Went Wrong!</div>

    if (!list.length) return <div>Loading</div>
    return (
        <div className="overflow-auto">
            <div className="text-green-900  text-center my-4 mx-auto bg-green-200 py-3 px-6 rounded">
                User Data
                                </div>
            <div className="md:px-32 py-8 m-4 flex items-center justify-center">
                <div className="shadow container rounded border-b border-gray-200">
                    <table className="border-collapse w-full">
                        <thead>
                            <tr>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Phone No.</th>
                                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>

                            </tr>
                        </thead>

                        <tbody className="flex-1 sm:flex-none">
                            {(list).filter(el => el.name && el.email && el.phone).map(data => {
                                return (
                                    <tr className="flex flex-col flex-no wrap sm:table-row my-4  bg-gray-200">
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span className="lg:hidden rounded-lg absolute top-2 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Name</span>
                                            {data.name}
                                        </td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span className="lg:hidden rounded-lg absolute top-2 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Phone No.</span>
                                            <a className="hover:text-blue-500" href={`tel:${data.phone}`}>{data.phone}</a>
                                        </td>
                                        <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                                            <span className="lg:hidden rounded-lg absolute top-2 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                                            <a className="hover:text-blue-500" href={`mailto:${data.email}`}>{data.email}</a>
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
