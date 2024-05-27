"use client"

import Heading from '@/app/components/Heading'
import Table from '@/app/components/staff/Table'
import AdminModal from '@/app/components/modal/admin/AdminModal'
import { useAdminModal } from '@/app/hooks/admin/useAdminModal'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const adminModal = useAdminModal()
  return (
    <div>
      <Heading title='Staff' subtitle='List of all staff' buttonTitle='+ Add Staff' onButtonClick={adminModal.onOpen} />
      <AdminModal />

      <Table/>
    </div>
  )
}

export default page