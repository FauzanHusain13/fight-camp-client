import Image from "next/image"
import { useState, useEffect, useCallback } from "react";
import { getGalleryItem } from "../../../service/user";

const GalleryItem = () => {
    const [gallery, setGallery] = useState([])

    const getGallery = useCallback(async() => {
        const data = await getGalleryItem()
        setGallery(data)
    }, [getGalleryItem])

    useEffect(() => {
        getGallery()
    }, [])
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-14">
            {gallery.map(item => {
                return (
                    <div key={item._id}>
                        <Image src={`https://fight-camp-server-130806.up.railway.app/uploads/gallery/${item.image}`} width={400} height={0} className="rounded-md cursor-pointer" alt="Gallery" />
                    </div>
                )
            })}
        </div>
    )
}

export default GalleryItem