import React, { Component } from 'react';
import { apiURL } from '../../Constant/Constant';
import { makeAPICall } from '../../utils/API';
import './Home.scss';
class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            productCatogeries: [],
            products: []
        };
    }


    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        let productCatogeries = await makeAPICall('getRequest', apiURL.getProductCategory)
        let products = (await makeAPICall('getRequest', apiURL.getProducts)).productList
        this.setState({ productCatogeries, products });
    }

    onCategoryItemClick = event => {
        console.log(event.target.getAttribute('value'))
    }

    render() {
        const { productCatogeries, products } = this.state
        console.log(products)
        return (
            <div className='homePageLayout'>
                <header>
                    <h1>Welcome to Product Seller Site</h1>
                </header>

                <div className='bodyLayout' >
                    <nav className='navLayout' >
                        <h3>Products</h3>
                        <ul>
                            {productCatogeries.map((item, index) =>
                                <li
                                    onClick={this.onCategoryItemClick}
                                    key={item.productCategoryId}
                                    value={item.productCategoryId}
                                >
                                    {item.name}
                                </li>
                            )}
                        </ul>
                    </nav>

                    <section className='sectionLayout' >
                        {products.map((product) =>
                            <ProductCard key={product.productId} product={product} />)}
                    </section>
                </div>

            </div>
        );
    }
}

export default Home;


const ProductCard = props => {
    const { product } = props
    return (
        <div>
            <h2>{product.name}</h2>
        </div>
    )
}