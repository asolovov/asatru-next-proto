import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {fetchAut} from "@/lib/asatruEncyclopediaAPI/autAPI";
// import AddArticle from "@/app/_components/admin/addArticle";
// import {fetchEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
// import ArticlesListAdmin from "@/app/_components/admin/articlesListAdmin";

export default async function Admin() {
    const cookiesStorage = cookies();
    const aut = cookiesStorage.get("aut");

    if (!aut) {
        redirect("/admin/login");
    }

    const {ok} = await fetchAut(aut.value);

    if (!ok) {
        redirect("/amin/login");
    }

    // const {articles, error} = await fetchEncyclopediaArticles();
    //
    // console.log(articles);

    return (
        <main className={"main"}>
            Admin page ok
            {/*{articles && <ArticlesListAdmin articles={articles}/>}*/}
            {/*<AddArticle aut={aut.value}/>*/}
        </main>
    )
}