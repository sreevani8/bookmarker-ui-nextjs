import {GetServerSideProps, NextPage} from "next";
import {fetchBookmarks} from "@/services/api";
import {BookmarksResponse} from "@/services/models";
import Bookmarks from "@/components/Bookmarks";

interface HomeProps {
    bookmarks: BookmarksResponse
}

const Home: NextPage<HomeProps> = (props) => {

    return (
      <div>


              <h1>Welcome Bookmarker-ui</h1>
         <Bookmarks bookmarks = {props.bookmarks}/>

      </div>
  )

}
export const getServerSideProps: GetServerSideProps = async (context) => {

    const {page = 1} = context.query
    const bookmarks = await fetchBookmarks(parseInt(String(page)))
    return {
        props: {
            bookmarks
        }
    }
}
export default Home
