import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {fetchAut} from "@/lib/asatruEncyclopediaAPI/adminAPI";
import {fetchEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import AddArticle from "@/app/_components/admin/addArticle";
import ArticlesListAdmin from "@/app/_components/admin/ArticlesListAdmin";

export default async function Admin() {
    const cookiesStorage = cookies();
    const aut = cookiesStorage.get("aut");

    if (!aut) {
        redirect("/admin/login");
    }

    const {ok} = await fetchAut(aut.value);

    if (!ok) {
        redirect("/admin/login");
    }

    const {articles, error} = await fetchEncyclopediaArticles();

    return (
        <main className={"main"}>
            {articles && <ArticlesListAdmin articles={articles}/>}
            <AddArticle aut={aut.value}/>
        </main>
    )
}