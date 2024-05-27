import React from 'react'

type Props = {}


const status = () => {

}

const Card = (props: Props) => {
  return (
    <div>

      <div className='bg-white rounded-lg shadow-custom mt-6'>
        <div className='p-4'>

          <div className='flex justify-between '>
            <p>last Update: 12 January 2024 13:03</p>
            <div>
              <div className='px-3 py-1 rounded-full bg-secondary text-primary text-sm'>Fixed</div>
            </div>
          </div>
          <h1 className='text-xl'>Biaya Pelayanan</h1>
        </div>

        <div className='flex flex-col gap-2 p-4'>
          <p className='italic'>Value</p>
          <h1 className='text-3xl'>IDR 11.000</h1>
        </div>

      </div>

    </div>
  )
}

export default Card