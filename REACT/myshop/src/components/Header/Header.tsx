import * as S from "./styles";
import {FiLogIn, FiLogOut, FiShoppingCart} from 'react-icons/fi';


export const Header: React.FC = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>MyShop.</S.HeaderTitle>

                <S.ButtonsWrapper>
                    <S.AuthButton>
                        Login
                        <FiLogIn />
                    </S.AuthButton>
                    <S.CartButton>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonsWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}