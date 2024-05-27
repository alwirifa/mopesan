"use client"

import Heading from '@/app/components/Heading'
import Card from '@/app/components/fee/Card'
import AdminModal from '@/app/components/modal/admin/AdminModal'
import BannerModal from '@/app/components/modal/banner/BannerModal'
import { useAdminModal } from '@/app/hooks/admin/useAdminModal'
import { useBannerModal } from '@/app/hooks/banner/useBannerModal'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const bannerModal = useBannerModal()
  return (
    <div>
      <Heading title='Promotional Banner' subtitle='Active & Deactive promotional banner for customer' buttonTitle='+ Add Promotional Banner' onButtonClick={bannerModal.onOpen} />
      <BannerModal />
      <div className='grid grid-cols-3 gap-8'>


      </div>
    </div>
  )
}

export default page