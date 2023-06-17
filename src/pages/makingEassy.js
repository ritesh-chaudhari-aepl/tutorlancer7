import React from 'react'
import img1 from '@/assets/makingEassy1.png'
import img2 from '@/assets/makingEassy2.png'
import img3 from '@/assets/makingEassy3.png'
import img4 from '@/assets/makingEassy4.png'
import MakingEassyCard from '@/components/cards/makingEassyCard'

const MakingEassy = () => {
  return (
    <div className='container bg-blue-bgLight py-8 sm:py16 lg:py-20'>
        <div className='max-w-screen-2xl flex flex-col mx-auto'>
            <div className='mx-auto text-center'>
                <h2 className='font-semibold'>Making ease for everyone</h2>
                <h1 className='font-bold text-2xl py-3'>We made it in easy way</h1>
                <p className='text-sm pb-8 font-sans'>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
            <div className='items-center mx-auto px-8 sm:px-32 grid sm:grid-flow-row grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                   <MakingEassyCard btnBg="bg-[#f97316]  px-3 py-1 w-fit flex rounded-md mb-2" img={img1} step="Step 01" title="Post a tution job" msg="aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten."/>
                   <MakingEassyCard btnBg="bg-[#6366f1]  px-3 py-1 w-fit flex rounded-md mb-2" img={img2} step="Step 02" title="Hire your best match" msg="aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten."/>
                   <MakingEassyCard btnBg="bg-[#eaa60e]  px-3 py-1 w-fit flex rounded-md mb-2" img={img3} step="Step 03" title="Post a tution job" msg="aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten."/>
                   <MakingEassyCard btnBg="bg-[#22c55e]  px-3 py-1 w-fit flex rounded-md mb-2" img={img4} step="Step 04" title="Post a tution job" msg="aeccusamus et iusto odiomae dignissimos ducimus quistames blanditiis praesentium voluptatum loramkes anuten."/>
            </div>
        </div>
    </div>
  )
}

export default MakingEassy