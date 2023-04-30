import Image from "next/image";
import Head from "next/head";
import GalleryItem from "../components/organisms/galleryItem";

const Gallery = () => {
    return (
        <>
        <Head>
            <title>Fight Camp || Gallery</title>
            <meta name="description" content="Gym fight makassar" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="px-4 sm:px-8 md:px-20 text-white mt-[-30px] sm:mt-0">
            <h1 className="text-2xl md:text-3xl text-center tracking-wide font-semibold">Gallery</h1>
            <hr className="w-1/3 mx-auto mt-5" />

            <GalleryItem />
        </div>
        </>
    )
}

export default Gallery;