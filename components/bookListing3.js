import { Fragment, useState, useEffect } from 'react'
import NFTCard from './NFTCard'
import Link from "next/link"
import { useMarketplace, useActiveListings, MediaRenderer, useNetwork, useNetworkMismatch } from "@thirdweb-dev/react"
import {useRouter} from "next/router"

const Listing3 = () => {

    const marketplace = useMarketplace("0x17a06bba84f4550e1c4A8b02e6DB8F811e63c252")
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
                            href={`/assets3/${listing.assetContractAddress}/${listing.id}`}>

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

export default Listing3