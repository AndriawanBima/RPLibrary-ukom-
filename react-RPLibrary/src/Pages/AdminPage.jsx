import React, { useState } from 'react'
import AdminUser from '../Components/AdminUser'
import AdminOrder from '../Components/AdminOrder'

function AdminPage() {
    const [isNotAdmin, setIsNotAdmin] = useState(sessionStorage.getItem('status_user') == 0 ? false : true)

    return (
        <>
            {isNotAdmin ? <h1 className='text-5xl ml-8 mb-4 row justify-start font-extrabold'>Access Denied</h1>
                :
                <> <div className="flex">
                    <h1 className='text-5xl ml-8 mb-4 row justify-start font-extrabold'>Admin Page</h1>
                </div>
                    <div role="tablist" className="tabs tabs-lifted bg-base-300 p-1 rounded-box m-4">
                        <input type="radio" name="my_tabs_2" role="tab" defaultChecked className="tab" aria-label="Users" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <AdminUser />
                        </div>

                        <input
                            type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Orders" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            <AdminOrder />
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Borrowment" />
                        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                            Borrowment
                        </div>
                    </div></>}
        </>
    )
}

export default AdminPage