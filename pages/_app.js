import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (
        <div data-scroll-container>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
