import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fight camp</title>
        <meta name="description" content="Gym fight makassar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <div className="px-20 flex justify-evenly">
          <div className="text-[190px] hidden lg:block text-[#F05454] w-[300px]">
            <Image src="/img/jumbotron.jpg" width={300} height={0} />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl text-white font-semibold">Train Like a <br /> <span className="text-[#F05454]">Championship</span></h1>
            <p className="mt-6 text-white">
              The First & Largest <span className="font-semibold">Fight Camp</span> in Makassar
            </p>
            <button className="mt-8 bg-[#F05454] hover:bg-red-800 px-5 py-3 text-sm text-white rounded-sm font-semibold">
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
