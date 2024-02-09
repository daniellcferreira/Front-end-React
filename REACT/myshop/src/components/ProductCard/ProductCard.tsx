import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";


export const ProductCard: React.FC = () => {
    return (
        <S.Card>
            <S.ProductImage src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt=""/>

            <S.ProductTitle>Teste</S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>Teste</S.Review>

                <S.Price>0</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                <S.AddToCartButton>
                    Adicionar
                    <FiShoppingCart />    
                </S.AddToCartButton>
            </S.AddToCartButtonWrapper>
        </S.Card>
    )
}