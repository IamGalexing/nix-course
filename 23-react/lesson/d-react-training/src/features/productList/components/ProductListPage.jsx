import {ProductList} from "./ProductList.jsx";
import {useEffect} from "react";
import {usePageTitle} from "../../../context/PageTitle.jsx";
import {Page} from "../../../layout/Page.jsx";
import {useDispatch} from "react-redux";
import {fetchProductListThunk} from "../productListSlice.js";

export function ProductListPage() {
    const {setTitle} = usePageTitle();

    useEffect(() => {
        setTitle("Product List");
    }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductListThunk())
    }, [dispatch]);

    return (
        <Page>
            <ProductList />
        </Page>
    )
}
