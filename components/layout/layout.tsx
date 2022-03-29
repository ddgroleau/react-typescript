import Head from 'next/head';

const Layout = ({pageTitle, metaDescription, children}:any) => {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
