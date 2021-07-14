    const MainDonationsCafecito = () => {
    return (
        <div className="flex flex-col justify-center items-center sm:flex-row mt-6">
            <p className="max-w-xs mb-4 sm:mr-4 sm:mb-0 text-lg font-normal text-gray-700">Puedes apoyarme donandome un Cafecito mediante el siguiente enlace</p>
            <a href='https://cafecito.app/mxrold' rel='noopener' target='_blank'>
                <img srcset='https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_6.png' alt='Invitame un café en cafecito.app' />
            </a>
        </div>
    )
}

export default MainDonationsCafecito
