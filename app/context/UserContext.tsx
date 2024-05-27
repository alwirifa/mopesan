"use client"

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    // useEffect(() => {
    //     if (!user) {
    //         axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/admins/user-profile`).then(({ data }) => {
    //             setUser(data);
    //             setReady(true);
    //             console.log(data)
    //         });
    //     }
    // }, []);


    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}