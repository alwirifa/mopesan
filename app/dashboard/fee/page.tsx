"use client"

import Heading from '@/app/components/Heading'
import Card from '@/app/components/fee/Card'
import AdminModal from '@/app/components/modal/admin/AdminModal'
import { useAdminModal } from '@/app/hooks/admin/useAdminModal'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const adminModal = useAdminModal()
  return (
    <div>
      <Heading title='Additional Fee' subtitle='List of all additional fee' buttonTitle='+ Add Addtional Fee' onButtonClick={adminModal.onOpen} />
      <AdminModal />
      <div className='grid grid-cols-3 gap-8'>

      <Card/>
      <Card/>
      <Card/>
      
      </div>
    </div>
  )
}

export default page