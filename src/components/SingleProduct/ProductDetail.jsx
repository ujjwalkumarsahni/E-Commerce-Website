import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../AllCard/ProductDetailsCard";
import RatingsReviews from "../RatingsAndReviews/RatingsReviews";
import MultiCoursorProduct from "../Slider/MultiCoursorProduct.jsx";
import Footer from "../Footer/Footer.jsx";
import "./ProductDetail.css";
import SingleProductEffect from "../ShimmerEffect/SingleProductEffect.jsx";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (prod) => prod.id === parseInt(id)
        );
        setProduct(foundProduct);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <SingleProductEffect />;
  }

  // console.log(product);

  return (
    <>
      <div className="productDetail">
        <ProductDetailsCard
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
          rating={product.rating}
          reviewlength={product.reviews.length}
          discountPercentage={product.discountPercentage}
          brand={product.brand}
          category={product.category}
          stock={product.stock}
          returnPolicy={product.returnPolicy}
          warrantyInformation={product.warrantyInformation}
        />
        <div className="rating-detail">
          <RatingsReviews
            rating={product.rating}
            reviewlength={product.reviews.length}
            reviews={product.reviews}
          />
        </div>
        <MultiCoursorProduct
          title="Similar Products"
          category={product.category}
        />
        <Footer />
      </div>
    </>
  );
};
