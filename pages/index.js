import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fight camp</title>
        <meta name="description" content="Gym fight makassar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto mt-[190px]">
        <div className="px-20 flex justify-around">
          <div className="mt-9">
            <h1 className="text-6xl font-semibold">Train Like a <br /> <span className="text-red-700">Championship</span></h1>
            <p className="mt-6">
              The First & Largest <span className="font-semibold">Fight Camp</span> in Makassar
            </p>
            <button className="mt-8 bg-red-700 hover:bg-red-800 px-5 py-3 text-sm text-white rounded-sm font-semibold">
              Daftar sekarang
            </button>
          </div>
          <div className="text-[190px] text-red-700">
            <ion-icon name="logo-ionic"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
