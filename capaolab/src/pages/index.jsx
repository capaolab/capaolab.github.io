import CapaoNav from "@/components/Navbar/CapaoNav"
import ShowCase from "@/components/ShowCase"
import Work from "@/components/Work"
import Equipe from "@/components/Equipe"

const Home = () => {
    return (
        <main className="w-full h-full">
            <CapaoNav />
            <ShowCase />
            <div className="w-full h-[80rem] sm:h-[40rem] invisible"></div>
            <Work />
            <Equipe />
        </main>
    )
}

export default Home
