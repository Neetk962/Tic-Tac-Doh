import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_USER);
    const userData = data?.me || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div>
                <div>
                    <div>
                        <h2>
                            This is the home page!
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
