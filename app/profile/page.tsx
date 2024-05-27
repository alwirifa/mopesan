"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const [vouchers, setVouchers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/admins/user-profile`,
          { withCredentials: true }
        );

        const data = response.data.data
        setVouchers(data);
        console.log(data)
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchVouchers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function logout() {
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/admins/logout`, { withCredentials: true });
    router.push('/auth/login')
  }

  return (
    <div>
      {/* <h1>{vouchers.name}</h1>
      <h1>{vouchers.role_keyword}</h1> */}
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Page;
