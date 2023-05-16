import Head from "next/head"
import Image from "next/image"
import { NumericFormat } from 'react-number-format';
import jwtDecode from "jwt-decode";

import { getConfirmationDetail } from "../../../service/user"

const DetailHistory = ({ confirmationDetail, user }) => {
    console.log(user)
    return (
        <>
        <Head>
            <title>Fight camp || History detail</title>
        </Head> 

        <div className="container px-20 text-white m-auto">
            <h1 className="text-3xl font-semibold tracking-wide">Detail History</h1>
            {confirmationDetail.map((item) => {
                return (
                    <>
                        <Image className="w-full h-[170px] object-cover mt-7 rounded-sm" src="/img/gambar-training.jpg" width={400} height={0} alt="gambar-training" />

                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <div>
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="font-semibold text-2xl tracking-wide">{item.historyTraining.trainingName}</h1>
                                        <div className="flex">
                                            <p className="text-sm mt-4 font-semibold text-white/60"><NumericFormat prefix="Rp. " value={item.historyTraining.price} displayType="text" thousandSeparator="." decimalSeparator="," />{' '} -</p>
                                            {item.historyDiscount && item.historyDiscount.discount && (
                                                <p className="text-sm mt-4 font-semibold text-white/60">
                                                    -{' '}<NumericFormat prefix="Discount : Rp. " value={item.historyDiscount.discount} displayType="text" thousandSeparator="." decimalSeparator="," />
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="bg-red-600 p-2 font-semibold rounded-md text-sm">{item.historyTraining.package}</h1>
                                        <h1 className="text-sm mt-4 font-semibold text-white/60">{item.historyTraining.session}</h1>
                                    </div>
                                </div>
                                <hr className="mt-3" />
                            </div>

                            <div>
                                {/* bank */}
                                <div className="flex justify-between">
                                    <div>
                                        <h1 className="font-semibold">{item.historyBank.bankName}</h1>
                                        <h1 className="text-sm text-white/60">{item.historyBank.noRekening}</h1>
                                    </div>

                                    <div>
                                        <h1 className="font-semibold">{item.historyBank.name}</h1>
                                        <h1 className="text-sm text-white/60">{item.historyBank.noWhatsapp}</h1>
                                    </div>
                                </div>
                                <hr className="mt-10" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-5 mt-8">
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-sm font-semibold">Nomor whatsapp admin</h1>
                                    <p className="text-sm mt-3 font-semibold text-white/60">085242934208</p>
                                </div>

                                <div className="">
                                    <h1 className="text-sm font-semibold"><NumericFormat prefix="Total : Rp. " value={item.total} displayType="text" thousandSeparator="." decimalSeparator="," /></h1>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-sm font-semibold">{user.username}</h1>
                                <p className="text-sm mt-3 font-semibold text-white/60">{user.email}</p>
                            </div>
                        </div>

                        <div className="mt-14">
                        {item.status === "pending" && (
                            <h1 className="text-sm text-center w-full bg-orange-500 p-3 font-semibold">
                                Pending
                            </h1>
                        )}
                        {item.status === "success" && (
                            <h1 className="text-sm text-center w-full bg-green-700 p-3 font-semibold">
                                Success
                            </h1>
                        )}
                        {item.status === "failed" && (
                            <h1 className="text-sm text-center w-full bg-red-700 p-3 font-semibold">
                                Failed
                            </h1>
                        )}
                        </div>
                    </>
                )
            })}

            <p className="mt-5 text-sm text-white/60">note: Ketika sudah transfer chat <span className="font-semibold text-white">nomor whatsapp admin</span> diatas untuk mengkonfirmasi</p>
        </div>
        </>
    )
}

export async function getServerSideProps({ req, params }) {
    const { id } = params
    const { token } = req.cookies;
    if(!token) {
        return {
            redirect: {
                destination: "/sign-in",
                permanent: false
            }
        }
    }

    const jwtToken = Buffer.from(token, "base64").toString("ascii");
    const payload = jwtDecode(jwtToken);
    const userFromPayload = payload.user;
    const response = await getConfirmationDetail(id, jwtToken)
      
    return {
        props: {
            confirmationDetail: response.data,
            user: userFromPayload
        }
    }
}

export default DetailHistory;