import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({showCart}) => {
    const {cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price;
    }, 0);

    return (
        <S.Container showCart={showCart}>
            <S.Title>Carrinho</S.Title>

            <S.CartProductsList>
                {cart.map((product) => (
                    <S.CartProductItem key={product.id}>{product.title} - ${product.price}</S.CartProductItem>
                ))}
            </S.CartProductsList>

            <S.CartTotal>Total: ${total}</S.CartTotal>
        </S.Container>
    )
}