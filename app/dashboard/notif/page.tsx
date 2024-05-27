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
      <Heading title='Promotional Notifications' subtitle='List of all available voucher' buttonTitle='+ Blast Notification' onButtonClick={adminModal.onOpen} />
      <AdminModal />
    </div>
  )
}

export default page