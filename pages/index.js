import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Listing from '../components/bookListing'
import Listing1 from '../components/bookListing1'
import Listing2 from '../components/bookListing2'
import Listing3 from '../components/bookListing3'
import { Tab } from '@headlessui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Book Store | Decentrala</title>
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
      </Head>
      <Navbar />
      <div>
            <div className='p-10 font-extralight flex justify-center'>
                Diversed books, diversed audience.
            </div>
            <div className='font-extralight flex justify-center text-sm pb-5'>
                Note: Want to exchange with a different currency? <a className="underline" href="https://decentrala.netlify.app/contact.html"> contact us.</a>
            </div>
            <Tab.Group>
                <Tab.List className="flex justify-between px-5 bg-white text-black p-3 rounded-3xl text-sm">
                    <Tab>Science & Math Textbooks</Tab>
                    <Tab className="px-5">Lvl. 1 & 2 Books</Tab>
                    <Tab>Chapter Books</Tab>
                    <Tab>Comic Books</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <Listing1 />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Listing />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Listing2 />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Listing3 />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    </div>
  )
}
