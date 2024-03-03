import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import AddArticle from "@/app/_components/admin/addArticle";
import {fetchEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import ArticlesListAdmin from "@/app/_components/admin/articlesListAdmin";

export default async function Admin() {
    const cookiesStorage = cookies();
    const aut = cookiesStorage.get("aut");

    if (!aut) {
        redirect("/admin/login");
    }

    const {articles, error} = await fetchEncyclopediaArticles();

    console.log(articles);

    return (
        <main className={"main"}>
            {articles && <ArticlesListAdmin articles={articles}/>}
            <AddArticle aut={aut.value}/>
        </main>
    )
}