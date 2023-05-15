import Link from 'next/link';
import Head from 'next/head';
import jwtDecode from "jwt-decode"
import { useState, useEffect, useCallback } from 'react';
import { getConfirmation } from '../../service/user';

import { NumericFormat } from 'react-number-format';

const Profile = ({ user }) => {
    const [confirmationList, setConfirmationList] = useState([])

    const getConfirmationList = useCallback(async() => {
        const response = await getConfirmation()
        console.log(response)
        if(response.error) {
            toast.error(response.message)
        } else {
            setConfirmationList(response.data)
        }
    })

    useEffect(() => {
        getConfirmationList()
    }, [])

    return (
        <>
        <Head>
            <title>Fight camp || account</title>
        </Head>
        <div className="px-2 sm:px-10 text-white">
            <div className="md:w-1/2 m-auto text-center">
                <h1 className="text-3xl font-semibold">{user.username}</h1>
                <p className="text-sm mt-2 text-white/50">{user.email}</p>
            </div>
            <h1 className="w-full md:w-1/2 text-sm bg-white/10 text-white/70 py-2 text-center m-auto mt-10 tracking-widest">History Payment</h1>
            <hr className="mt-3 w-full md:w-1/2 m-auto" />

            <div className="mt-5 w-full md:w-1/2 m-auto">
                {confirmationList.map(item => {
                    return(
                        <Link key={item._id} href={`/account/history/${item._id}`} className="mt-2 flex justify-between py-5 px-2 md:px-8 items-center bg-white/5 rounded-sm">
                            <h1 className="font-semibold text-xs md:text-sm">{item.historyTraining.trainingName}</h1>
                            <h1 className="font-semibold text-xs md:text-sm"><NumericFormat prefix="Rp. " value={item.total} displayType="text" thousandSeparator="." decimalSeparator="," /></h1>
                            <h1 className="font-semibold text-xs md:text-sm bg-red-600 text-center px-2 py-1 rounded-lg">{item.historyTraining.package}</h1>
                            <h1 className="text-xs">{item.status}</h1>
                        </Link>
                    )
                })}
            </div>
        </div>
        </>
    );
};
  
export default Profile;

export async function getServerSideProps({ req }) {
    const { token } = req.cookies;
    if (!token) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false
            }
        };
    }
    const jwtToken = Buffer.from(token, "base64").toString("ascii");
    const payload = jwtDecode(jwtToken);
    const userFromPayload = payload.user;

    return {
        props: {
            user: userFromPayload
        }
    };
}