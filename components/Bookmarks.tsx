import React from "react";
import {BookmarksResponse} from "../services/models";
import Pagination from "./Pagination";
import Bookmark1 from "@/components/Bookmark1";


interface BookmarksProps {
    bookmarks: BookmarksResponse
    query?: string
}
const Bookmarks: React.FC<BookmarksProps> = ({bookmarks, query}) => (
    <div>
        <Pagination bookmarks={bookmarks} query={query}/>
        {bookmarks.data.map(bookmark => <Bookmark1 key={bookmark.id} bookmark={bookmark}/>)}
    </div>
);
export default Bookmarks;