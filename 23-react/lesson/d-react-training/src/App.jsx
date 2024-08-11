import './App.css'
import {Fragment, useRef, useState} from "react";
import {Header} from "./layout/Header.jsx";
import {CssBaseline} from "@mui/material";
import {PageTitleProvider} from "./context/PageTitle.jsx";
import {UserProvider} from "./context/User.jsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {LoginDialog} from "./features/user/components/LoginDialog.jsx";
import {ProductListPage} from "./features/productList/components/ProductListPage.jsx";
import {ProductPage} from "./features/product/components/ProductPage.jsx";

import * as yup from 'yup'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const BestForm = () => {
    const [controlled, setControlled] = useState("my default state");
    const uncontrolledRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handled submit ', e)

        console.log('uncontrolled ', uncontrolledRef.current?.value)

    }

    const myProps = {
        onChange: () => {}
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>controlled: {controlled}</label>
            <input
                value={controlled}
                onChange={e => setControlled(e.target.value)}
            />
            <br/>

            <label>uncontrolledRef: {uncontrolledRef.current?.value}</label>
            <input ref={uncontrolledRef}/>
            <br />

            <input type="submit"/>
        </form>
    )
}



const schema = yup
    .object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    })
    .required()

function HookFormExample() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <p>{errors.firstName?.message}</p>

            <input {...register("age")} />
            <p>{errors.age?.message}</p>

            <input type="submit" />
        </form>
    )
}

function App() {
    return (
        <PageTitleProvider>
            <UserProvider>
                <Fragment>
                    <CssBaseline/>
                    <Router>
                        <Header/>
                        <LoginDialog />
                        <Routes>
                            <Route path="/product-list" element={<ProductListPage/>}/>
                            <Route path="/product/:productId" element={<ProductPage/>}/>
                            <Route path="*" element={<Navigate to="/product-list" replace/>}/>
                        </Routes>
                    </Router>
                </Fragment>
            </UserProvider>
        </PageTitleProvider>
    )
}

export default App
