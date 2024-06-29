import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {fetchAut} from "@/lib/asatruEncyclopediaAPI/adminAPI";
import {fetchEncyclopediaArticleCategories, fetchEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
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

    const getArticlesResp = await fetchEncyclopediaArticles();
    const getCategoriesResp = await fetchEncyclopediaArticleCategories();

    const articles = getArticlesResp.articles.sort((a, b) => {
        if (a && b) {
            const titleA = a.title.toLowerCase()
            const titleB = b.title.toLowerCase()

            if (titleA > titleB) {
                return 1
            }

            return -1
        }
        return 0
    })

    return (
        <main className={"main"}>
            {getArticlesResp.articles && <ArticlesListAdmin articles={articles}/>}
            {getCategoriesResp.categories && <AddArticle aut={aut.value} categories={getCategoriesResp.categories}/>}
        </main>
    )
}