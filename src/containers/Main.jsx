import Footer from '../components/Footer'
import MetaHead from '../components/global/MetaHead'
import MainInformation from "../components/main/MainInformation"
import MainComplementTitle from "../components/main/MainComplementTitle"
import MainComplement from "../components/main/MainComplement"
import MainDonations from "../components/main/MainDonations"

const Main = () => {
    return (
        <>
            <MetaHead 
                title="Home"
                description="Descubre películas y series sin buscar por ti mismo."
                url="https://lucmania.co"
            />

            <main className="h-full min-h-screen bg-gray-100">
                <div className="mx-auto py-24 text-center">
                    <MainInformation />
                    
                    <MainComplementTitle />
                    
                    <MainComplement />
                    
                    <MainDonations />
                </div>
            </main>
            
            <Footer />
        </>
    )
}

export default Main
