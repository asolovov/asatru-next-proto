'use server'

import {cookies} from "next/headers";

export async function setAut(aut: string) {
    cookies().set("aut", aut, {secure: true});
}