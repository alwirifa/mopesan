"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAdminModal } from "@/app/hooks/admin/useAdminModal";
import { useEditAdminModal } from "@/app/hooks/admin/useEditAdminModal";
import { Admin } from "@/app/types/types";
import { getAdmins } from "@/app/api/admin";
import { formatDate } from "@/app/lib/formatter";
import EditAdminModal from "@/app/components/modal/admin/EditAdminModal";
import AdminModal from "@/app/components/modal/admin/AdminModal";
import Heading from "@/app/components/Heading";

const Page: React.FC = () => {
  const router = useRouter();
  const [admins, setAdmins] = useState<Admin[]>([]);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const adminsData = await getAdmins();
        setAdmins(adminsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => { };
  }, []);


  const adminModal = useAdminModal()
  const editAdminModal = useEditAdminModal()

  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null)

  const handleEditAdmin = (admin: Admin) => {
    setSelectedAdmin(admin);
    editAdminModal.onOpen()
  }

  return (
    <div className="flex flex-col gap-6 ">
      <Heading title='Admin' subtitle='List of all admin' buttonTitle='+ Add Admin' onButtonClick={adminModal.onOpen} />
{/* 
      <section className="flex gap-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 w-full">
          {
            admins.map((admin) => (
              <div
                key={admin.id}
                className="flex flex-col gap-2 group relative shadow-md rounded-lg"
              >
                <div
                  className="flex gap-6 justify-between p-4 items-center border rounded-lg bg-white z-40"
                >
                  <div>
                    <p className=" font-medium">{admin.email}</p>
                    <p className="text-sm text-textGray">
                      Last Login:{" "}
                      <span className="italic">
                        {formatDate(admin.last_login)}
                      </span>
                    </p>
                  </div>
                  <div>
             
                    <button>
                      {admin.is_active ? (
                        <p className="bg-green-400 text-green-500 px-4 py-2 rounded-full">Active</p>
                      ) : (
                        <p>Deactived</p>
                      )}
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 transition-all group-hover:translate-y-6 duration-300 w-full z-20 rounded-b-xl bg-white shadow-md">
                  <div className="flex w-full justify-end items-center px-6">
                    <button className="px-4 py-1 text-xs text-blue-600" onClick={() => handleEditAdmin(admin)}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )
            )}


        </div>
      </section> */}
      <AdminModal />
      <EditAdminModal selectedAdmin={selectedAdmin} />
    </div>
  );
};

export default Page;
