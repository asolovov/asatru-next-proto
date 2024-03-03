import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import AdminLogin from "@/app/_components/admin/login";

export default function Login() {
    const cookiesStorage = cookies();
    const aut = cookiesStorage.get("aut");

    if (aut) {
        redirect("/admin");
    }

    return (
        <main className={"main"}>
            <AdminLogin/>
        </main>
    )
}