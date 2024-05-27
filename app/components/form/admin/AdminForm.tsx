"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createAdmin } from '@/app/api/admin';

const AdminForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleID, setRoleID] = useState('');
  const [merchantID, setMerchantID] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await createAdmin({
        name,
        email,
        password,
        roleID,
        merchantID
      });
      alert('Admin added successfully!');
      router.push('/dashboard/admin');
    } catch (error) {
      console.error("Error creating admin:", error);
      setError('Failed to add admin. Please try again.');
    }
  };

  return (
    <div className="rounded-lg bg-white p-6">
      <form onSubmit={handleSubmit}>
        <div className="py-4 pb-10 flex flex-col gap-4 w-full border-b border-t border-primary">
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-name" className="block font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="admin-name"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:leading-6 placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-email" className="block font-medium leading-6 text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="admin-email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:leading-6 placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-password" className="block font-medium leading-6 text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="admin-password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:leading-6 placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-roleID" className="block font-medium leading-6 text-gray-900">
              Role ID
            </label>
            <input
              type="number"
              id="admin-roleID"
              placeholder='Merchnat Admin'
              value={roleID}
              onChange={(e) => setRoleID(e.target.value)}
              className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:leading-6 placeholder:italic"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="admin-merchantID" className="block font-medium leading-6 text-gray-900">
              Merchant ID
            </label>
            <input
              type="number"
              id="admin-merchantID"
              placeholder="Merchant Name"
              value={merchantID}
              onChange={(e) => setMerchantID(e.target.value)}
              className="block w-full rounded-md border-0 px-4 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary focus:outline-none sm:leading-6 placeholder:italic"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button type="submit" className="px-4 py-2 rounded-md bg-primary font-semibold text-white">
            Add New Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
