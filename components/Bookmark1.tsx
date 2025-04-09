import React from "react";

import {Bookmark} from  "@/services/models";
import Link from "next/link";



interface BookmarkProps {

    bookmark: Bookmark

}
const Bookmark1: React.FC<BookmarkProps> = ({bookmark}) => (

    <div>
        <div className="alert alert-primary" role="alert">
            <h5>
                <Link href={bookmark.url} target={"_blank"} className={'text-decoration-none'}>
                    {bookmark.title}
                </Link>
            </h5>
        </div>
    </div>


);
export default Bookmark1;