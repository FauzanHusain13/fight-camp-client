import Image from "next/image";
import Head from "next/head";

const Gallery = () => {
    return (
        <>
        <Head>
            <title>Fight Camp || Gallery</title>
            <meta name="description" content="Gym fight makassar" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="px-4 sm:px-8 md:px-20 text-white">
            <h1 className="text-2xl md:text-3xl text-center tracking-wide font-semibold">Gallery</h1>
            <hr className="w-1/3 mx-auto mt-5" />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-14">
                <div>
                    <Image src="/img/gambar-training.jpg" width={400} height={0} className="rounded-md cursor-pointer" alt="Gallery" />
                </div>
                <div>
                    <Image src="/img/gambar-training.jpg" width={400} height={0} className="rounded-md cursor-pointer" alt="Gallery" />
                </div>
                <div>
                    <Image src="/img/gambar-training.jpg" width={400} height={0} className="rounded-md cursor-pointer" alt="Gallery" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Gallery;