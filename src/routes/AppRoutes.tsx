import React from "react";

import { Layout } from "../components/layout";


import { Outlet } from "react-router-dom";


const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

export default AppRoutes;