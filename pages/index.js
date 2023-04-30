import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TrainingItem from '../components/organisms/trainingItem'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fight camp</title>
        <meta name="description" content="Gym fight makassar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto pb-20">
        {/* Jumbotron */}
        <div className="px-20 flex justify-evenly">
          <div className="text-[190px] hidden lg:block w-[350px]">
            <Image src="/img/jumbotron3.jpg" width={350} height={0} alt="Chokbulls" />
          </div>
          <div className="text-center my-auto lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-semibold">Train Like a <br /> <span className="text-[#CF0A0A]">Championship</span></h1>
            <p className="mt-6 text-[#b7b7b7] text-sm sm:text-base">
              The First & Largest <span className="font-semibold">Fight Camp</span> in Makassar, <span className="font-semibold">Indonesia</span>
            </p>
            <button className="mt-8 bg-[#CF0A0A] hover:bg-[#b90707] px-4 md:px-5 py-3 text-xs sm:text-sm text-white rounded-md font-semibold">
              Join now
            </button>
          </div>
          <div className="hidden xl:flex flex-col justify-center gap-5 text-2xl">
            <Link href="/" className="text-[#d73fe4] hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link href="/" className="text-[#4295f5] hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
            <Link href="/" className="text-[#325af9] hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </div>
        </div>
        <div className="flex xl:hidden flex-row mt-20 justify-evenly w-1/2 md:1/3 lg:w-1/4 mx-auto gap-5 text-xl md:text-2xl">
          <Link href="/" className="text-[#d73fe4] hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-instagram"></ion-icon>
          </Link>
          <Link href="/" className="text-[#4295f5] hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-twitter"></ion-icon>
          </Link>
          <Link href="/" className="text-[#325af9] hover:text-[#bababa] transition duration-300">
              <ion-icon name="logo-facebook"></ion-icon>
          </Link>
        </div>
        <hr className="mt-16 md:mt-18 lg:mt-26 xl:mt-32 w-1/2 mx-auto" />

        {/* Training */}
        <div className="px-4 lg:px-20 mt-28 md:mt-20">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-wide">Our Training</h1>

          <TrainingItem />
        </div>

        {/* About */}
        <div className="px-8 lg:px-20 flex justify-evenly gap-2 flex-col md:flex-row mt-48 md:mt-[240px]">
          <div className="text-white flex flex-col m-auto">
            <h1 className="text-3xl lg:text-4xl tracking-wide">Welcome to <span className="font-semibold">Chokbulls</span></h1>
            <hr className="w-1/2 mt-10" />
            <p className="mt-10 text-sm text-[#b7b7b7] leading-loose tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="mt-10 md:mt-0 m-auto">
            <Image src="/img/chokbulls.jpg" width={400} height={0} alt="Chokbulls" className="rounded-md"/>
          </div>
        </div>
      </div>
    </>
  )
}
