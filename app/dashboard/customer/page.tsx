import Pagination from '@/app/components/Pagination'
import Search from '@/app/components/Search'

import React, { Suspense } from 'react'
import Table from './Table'
import { GetCustomer } from '@/app/api/_action'
import Heading from '@/app/components/Heading'


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
  const limit = Number(searchParams?.limit) || 8
  const offset = (currentPage - 1) * limit

  const { data, totalPages } = await GetCustomer({ offset, limit, search })

  return (
    <div className="flex flex-col gap-6 h-full ">
      <Heading title='Customers' subtitle='List of all customer' />
      <section className="flex flex-col gap-6 p-8 bg-white rounded-lg h-full relative">

        <div className="flex justify-between">

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
