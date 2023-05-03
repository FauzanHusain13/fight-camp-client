import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { getTrainingItem } from "../../../service/user";

const TrainingItem = () => {
    const [trainingItem, setTrainingItem] = useState([])

    const getTraining = useCallback(async() => {
        const data = await getTrainingItem()
        setTrainingItem(data);
    }, [getTrainingItem])

    useEffect(() => {
        getTraining();
    }, [])
    return (
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 md:flex md:justify-start lg:gap-5 mx-auto">
            {trainingItem.map(item => {
                return (
                    <Link href={`/detail/${item._id}`} key={item._id} className="bg-[url('/img/gambar-training.jpg')] rounded-md bg-left p-5 flex-initial w-full lg:w-64 lg:hover:w-96 transition-all duration-700 cursor-pointer">
                        <h1 className="text-xl text-white drop-shadow-lg shadow-inner font-semibold">{item.name}</h1>
                    </Link>
                )
            })}
        </div>
    )
}

export default TrainingItem;