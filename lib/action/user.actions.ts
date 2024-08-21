'use server';

import { z } from 'zod';
import { createSessionClient, createAdminClient } from '../appwrite';
import { ID } from 'node-appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';

export const signIn = async ({email, password} : signInProps) => {
    try {
        const { account } = await createAdminClient();

        const session = await account.createEmailPasswordSession(email, password);
        return parseStringify(session);

    }
    catch (e) { 
        console.error(e);
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        const { account } = await createAdminClient();

        const newUserAcc = await account.create(ID.unique(), userData.email, userData.password, `${userData.firstName} ${userData.lastName}`);
        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("my-appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAcc);

    }
    catch (e) {
        console.error(e);
    }
} 

// ... your initilization functions

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();
        const user =  await account.get();
        return parseStringify(user);
    } catch (error) {
        return null;
    }
}

export const logout = async () => {
    try {
        const { account } = await createSessionClient();
        cookies().delete("my-appwrite-session");
        await account.deleteSession('current');
            


    } catch (error) {
        console.error(error);
    }
}


