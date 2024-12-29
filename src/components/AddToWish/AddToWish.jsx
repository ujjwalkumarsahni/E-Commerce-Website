import { useOutletContext } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import emptyCard from "../../assets/Card/eeeeeee.webp";
import CartItemWish from "./CartItemWish.jsx";

const AddToWish = () => {
  const { wishlistItems, removeFromWishlist } = useOutletContext();
  return (
    <>
      <div className="addToCardHeader">
        {wishlistItems.length === 0 ? (
          <img className="empty-img" src={emptyCard} alt="Empty Wishlist" />
        ) : (
          <ul className="ul-container">
            <h1 className="Cart-header">Wishlist Cart</h1>
            {wishlistItems.map((item) => (
              <CartItemWish
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                reviewlength={item.reviewlength}
                discountPercentage={item.discountPercentage}
                removeFromWishlist={removeFromWishlist}
              />
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AddToWish;

