import { Fragment, useState, useEffect } from 'react'
import NFTCard from './NFTCard'
import Link from "next/link"
import { useMarketplace, useActiveListings, MediaRenderer, useNetwork, useNetworkMismatch } from "@thirdweb-dev/react"
import {useRouter} from "next/router"

const Listing = () => {

    const marketplace = useMarketplace("0xfDaf528C6bD56265d9c8a304d20A097810f41965")
    const [listings, setListings] = useState([])

    useEffect(() => {
        getListings()
    }, [])

    const getListings = async () => {
        try {
            const list = await marketplace.getActiveListings()
            setListings(list)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div>
                {listings.length > 0 ? (
                    <>
                    {listings?.map((listing, index)=> (
                        <Link
                            key = {index}
                            href={`/assets/${listing.assetContractAddress}/${listing.id}`}>

                            <a>
                                <NFTCard listing={listing}/>
                            </a>
                        </Link>
                    ))}
                </>
                ) : (
                    <div className='p-5'>Loading...</div>
                    )}
            </div>
        </div>
    )
}

export default Listing