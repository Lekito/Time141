import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicComponentWithNoSSR = dynamic(() => import('./Map'),{
  ssr: false
});

export default function CarregarMap () {
    return(
        <div>
            <div>
                <Head>
                    <title>Gopharmes</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                    href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
                    rel="stylesheet"
                    />
                </Head>
            </div>

            <div className="py-2 px-4  md:py-4  flex justify-center">
                <DynamicComponentWithNoSSR />
            </div>
        </div>
    )
}

