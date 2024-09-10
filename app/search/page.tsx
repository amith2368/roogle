import {AppSearchPage} from "@/components/app-search-page";
import {Suspense} from "react";

export default function Search() {
    return (
        <Suspense>
            <AppSearchPage />
        </Suspense>
    );
}