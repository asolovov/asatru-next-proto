import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {fetchAut} from "@/lib/asatruEncyclopediaAPI/adminAPI";
import {fetchEncyclopediaArticleByID} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import EditArticle from "@/app/_components/admin/editArticle";

export default async function EditArticleByID({params}:{params: {articleID: string}}) {
    const cookiesStorage = cookies();
    const aut = cookiesStorage.get("aut");

    if (!aut) {
        redirect("/admin/login");
    }

    const {ok} = await fetchAut(aut.value);

    if (!ok) {
        redirect("/admin/login");
    }

    const {article, error} = await fetchEncyclopediaArticleByID(params.articleID);

    return (
        <main className={"main"}>
            {article && <EditArticle article={article} aut={aut.value}/>}
        </main>
    )
}