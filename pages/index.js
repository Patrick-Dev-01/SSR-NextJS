import React from 'react';
import "isomorphic-fetch";

import Link from 'next/link';

const Home = ({ cep_s }) => {

    return(
        <div>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
           <h1>{ cep_s.address_name }</h1>
        </div>
    );    
}; 

Home.getInitialProps = async () => {
    const response = await fetch('https://cep.awesomeapi.com.br/json/05424020')
    const cep_s = await response.json();

    return { cep_s };
};

export default Home;