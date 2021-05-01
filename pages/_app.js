import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    // return <Component {...pageProps} />
    return (
        <div data-scroll-container className="container">
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
