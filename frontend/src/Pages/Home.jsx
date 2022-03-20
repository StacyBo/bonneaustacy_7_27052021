import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Posts from '../components/Posts';

function Home() {

    return (
        <>
            < Navbar />
            <main>
                <section>
                        <CreatePost />

                    <div className="container card h-100 w-75 mb-4 pt-2">
                        < Posts />
                        <span className="border-top mt-2 mb-2"></span>
                    </div>
                </section>
            </main>
        </>)
}

export default Home;