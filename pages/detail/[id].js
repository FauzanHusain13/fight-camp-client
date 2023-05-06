import Image from "next/image"
import { useState, useEffect } from "react"
import { getTrainingItem, getDetailTraining } from "../../service/user"

const Detail = ({ training }) => {
    const [membership, setMembership] = useState({})
    const [bank, setBank] = useState({})

    const onMembershipChange = (data) => {
        setMembership(data)
    }

    const memberships = training.detail.memberships;
    const banks = training.bank;
    const discounts = training.discount
    return (
        <div className="px-4 md:px-16 lg:px-52 mt-[-40px] m-auto">
            <Image className="w-full h-[250px] object-cover rounded-md" src={`https://fight-camp-server-130806.up.railway.app/uploads/training/${training.detail.thumbnail}`} width={500} height={0} />
            <hr className="mt-10" />
            <div className="mt-10 text-white">
                <div className="">
                    <h1 className="text-2xl font-semibold tracking-wide">{training.detail.name}</h1>
                    <hr className="w-1/3 mt-3" />
                    <p className="mt-5 text-white/60 text-sm leading-loose">
                        {training.detail.desc}
                    </p>
                    <hr className="mt-16" />
                </div>
                <form action="/checkout" method="POST" className="mt-8">
                    <h1 className="text-2xl font-semibold">Membership</h1>
                    <div className="mt-8">
                        <label htmlFor="membership-select" className="block text-gray-300 text-sm font-bold mb-2">Pilih Membership:</label>
                        <div className="relative">
                            <select id="membership-select" className="block appearance-none w-full bg-black border border-gray-300 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-red-500">
                                <option>Pilih membership :</option>
                            {memberships.map((membership) => (
                                <option key={membership._id} value={membership._id} onChange={() => onMembershipChange(membership)}>
                                     {membership.package} / {membership.session} / {membership.price}
                                </option>
                            ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm14 0a6 6 0 10-12 0 6 6 0 0012 0z" clipRule="evenodd" />
                                    </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <label htmlFor="bank-select" className="block text-gray-300 text-sm font-bold mb-2">Pilih Bank:</label>
                        <div className="relative">
                            <select id="bank-select" className="block appearance-none w-full bg-black border border-gray-300 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-red-500">
                                <option>Pilih Bank :</option>
                            {banks.map((bank) => (
                                <option className="flex justify-between" key={bank._id} value={bank._id}>
                                    {bank.bankName} / {bank.noRekening} / {bank.name}
                                </option>
                            ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm14 0a6 6 0 10-12 0 6 6 0 0012 0z" clipRule="evenodd" />
                                    </svg>
                            </div>
                        </div>
                    </div>
                    
                    {discounts.length > 0 && (
                        <div className="mt-8">
                            <label htmlFor="discount-select" className="block text-gray-300 text-sm font-bold mb-2">Discount:</label>
                            <div className="relative">
                                <select id="discount-select" className="block appearance-none w-full bg-black border border-gray-300 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-red-500">
                                    <option>Pilih Discount :</option>
                                    {discounts.map((discount) => (
                                        <option className="flex justify-between" key={discount._id} value={discount._id}>
                                            {discount.discountName} / Potongan: {discount.discount}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                                    <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm14 0a6 6 0 10-12 0 6 6 0 0012 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="bg-red-600 text-center p-3 mt-8 rounded-md font-semibold cursor-pointer text-sm hover:bg-red-700 transition duration-200">
                        Checkout
                    </div>
                </form>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const training = await getTrainingItem()
    const paths = training.map(item => ({
        params: {
            id: item._id
        },
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { id } = params
    const training = await getDetailTraining(id)
    return {
        props: {
            training
        }
    }
}

export default Detail;