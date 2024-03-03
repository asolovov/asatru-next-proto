import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {fetchEncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import EditArticle from "@/app/_components/admin/editArticle";
import LogClient from "@/app/_components/alert/logClient";
import {isDebug} from "@/app/_serverHelpers/envCheck";
import {unAuthorisedErr} from "@/lib/asatruEncyclopediaAPI/errors";

export default async function ArticleChange({params}: {params: {articleID: string}}) {
    const cookiesStorage = cookies();
    const aut = cookiesStorage.get("aut");
    let isLogClient = isDebug();
    let logMsg = "";

    if (!aut) {
        redirect("/admin/login");
    }

    const {article, error} = await fetchEncyclopediaArticle(params.articleID);

    if (error) {
        logMsg = error.debug;
        if (error.err === unAuthorisedErr) {
            redirect("/");
        }
     }

    return (
        <main className={"main"}>
            {isLogClient && logMsg &&  <LogClient msg={logMsg}/>}
            {article && <EditArticle aut={aut.value} article={article}/>}
        </main>
    )
}