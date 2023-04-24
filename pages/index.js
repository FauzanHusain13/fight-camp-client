import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fight camp</title>
        <meta name="description" content="Gym fight makassar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto pb-20">
        {/* Jumbotron */}
        <div className="px-20 flex justify-evenly">
          <div className="text-[190px] hidden lg:block w-[350px]">
            <Image src="/img/jumbotron.jpg" width={350} height={0} />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl text-white font-semibold">Train Like a <br /> <span className="text-[#CF0A0A]">Championship</span></h1>
            <p className="mt-6 text-[#b7b7b7]">
              The First & Largest <span className="font-semibold">Fight Camp</span> in Makassar, <span className="font-semibold">Indonesia</span>
            </p>
            <button className="mt-8 bg-[#CF0A0A] hover:bg-[#b90707] px-4 md:px-5 py-3 text-sm text-white rounded-sm font-semibold">
              Join now
            </button>
          </div>
          <div className="hidden xl:flex flex-col text-white justify-center gap-5 text-2xl">
            <Link href="/" className="hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link href="/" className="hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link href="/" className="hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="flex xl:hidden flex-row mt-20 text-white justify-evenly w-1/2 md:1/3 lg:w-1/4 mx-auto gap-5 text-xl md:text-2xl">
          <Link href="/" className="hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-instagram"></ion-icon>
          </Link>
          <Link href="/" className="hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-twitter"></ion-icon>
          </Link>
          <Link href="/" className="hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-facebook"></ion-icon>
          </Link>
        </div>
        <hr className="mt-16 md:mt-18 lg:mt-26 xl:mt-32 w-1/2 mx-auto" />

        {/* Training */}
        <div className="px-4 lg:px-20 mt-20">
          <h1 className="text-3xl font-semibold text-white tracking-wide">Our Training</h1>

          <div className="mt-14 flex justify-between gap-5 mx-auto">
            <div className="bg-[url('/img/gambar-training.jpg')] rounded-md bg-left p-5 flex-initial w-64 hover:w-96 transition-all duration-700">
              <h1 className="text-xl text-white drop-shadow-lg shadow-inner font-semibold">Muay Thai</h1>
            </div>
            <div className="bg-[url('/img/gambar-training.jpg')] rounded-md bg-left p-5 flex-initial w-64 hover:w-96 transition-all duration-700">
              <h1 className="text-xl text-white font-semibold">Boxing</h1>
            </div>
            <div className="bg-[url('/img/gambar-training.jpg')] rounded-md bg-left p-5 flex-initial w-64 hover:w-96 transition-all duration-700">
              <h1 className="text-xl text-white font-semibold">MMA</h1>
            </div>
            <div className="bg-[url('/img/gambar-training.jpg')] rounded-md bg-left p-5 flex-initial w-64 hover:w-96 transition-all duration-700">
              <h1 className="text-xl text-white font-semibold">BJJ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
