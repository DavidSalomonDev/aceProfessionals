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
        <div>
            <div class="md:px-32 py-8 w-full">
                <div class="shadow overflow-hidden rounded border-b border-gray-200">
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-800 text-white">
                            <tr>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>

                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            {Object.keys(list).map(data => {
                                return (
                                    <tr>
                                        <td class="w-1/3 text-left py-3 px-4">{list[data].from_name}</td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href={`tel:${list[data].phoneNo}`}>{list[data].phoneNo}</a></td>
                                        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href={`{mailto:${list[data].to_name}}`}>{list[data].to_name}</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
