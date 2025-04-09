import { BookmarksResponse } from "@/services/models";
import Link from "next/link";

interface PaginationProps {
    bookmarks: BookmarksResponse;
}

const Pagination: React.FC<PaginationProps> = ({ bookmarks }) => {
    const path = "/bookmarks";
    const firstPage = { pathname: path, query: { page: 1 } };
    const previousPage = { pathname: path, query: { page: bookmarks.currentPage - 1 } };
    const nextPage = { pathname: path, query: { page: bookmarks.currentPage + 1 } };
    const lastPage = { pathname: path, query: { page: bookmarks.totalPages } };

    return (
        <div>
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">

                    <li className={"page-item" + (bookmarks.hasPrevious ? "" : " disabled")}>
                        {bookmarks.hasPrevious ? (
                            <Link href={firstPage}
                                className="page-link">First
                            </Link>
                        ) : (
                            <span className="page-link">First</span>
                        )}
                    </li>

                    <li className={"page-item" + (bookmarks.hasPrevious ? "" : " disabled")}>
                        {bookmarks.hasPrevious ? (
                            <Link href={previousPage}
                                 className="page-link">Previous
                            </Link>
                        ) : (
                            <span className="page-link">Previous</span>
                        )}
                    </li>

                    <li className={"page-item" + (bookmarks.hasNext ? "" : " disabled")}>
                        {bookmarks.hasNext ? (
                            <Link href={nextPage}
                                 className="page-link">Next
                            </Link>
                        ) : (
                            <span className="page-link">Next</span>
                        )}
                    </li>

                    <li className={"page-item" + (bookmarks.hasNext ? "" : " disabled")}>
                        {bookmarks.hasNext ? (
                            <Link href={lastPage}
                                 className="page-link">Last
                            </Link>
                        ) : (
                            <span className="page-link">Last</span>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
