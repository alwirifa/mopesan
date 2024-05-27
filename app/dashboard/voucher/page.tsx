import Pagination from '@/app/components/Pagination'
import Search from '@/app/components/Search'

import React, { Suspense } from 'react'
import Table from './Table'
import ModalButton from './ModalButton'
import { GetVoucher } from '@/app/api/_action'

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
    limit?: string
  }
}) {
  const search = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const limit = Number(searchParams?.limit) || 3
  const offset = (currentPage - 1) * limit

  const { data, totalPages } = await GetVoucher({ offset, limit, search })
  console.log(data)

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">Vouchers</h1>
          <p>All available vouchers</p>
        </div>
        <div>
          <ModalButton />
        </div>
      </div>
    
      <section className="flex flex-col gap-6 p-8 bg-white rounded-lg h-full relative">

        <div className="flex justify-between">
          {/* <div className="flex gap-4">
            <div className="flex gap-3 px-4 py-3 rounded-lg shadow-md">
              <img src="/icons/filter.svg" alt="" />
              <p>Filter</p>
            </div>
            <div className="flex gap-3 px-4 py-3 rounded-lg shadow-md">
              <img src="/icons/sort.svg" alt="" />
              <p>Sort</p>
            </div>
          </div> */}
          <div></div>
          <Search placeholder='search' />

        </div>
        <Suspense key={search + currentPage}>
          <Table data={data} />
        </Suspense>
        <div className='absolute bottom-8 right-8'>

        <Pagination totalPages={totalPages} />
        </div>
      </section>
    </div>
  )
}
