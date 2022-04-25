import React, { useRef } from 'react';
import styled from 'styled-components';
import ProductDetail from './ProductDetail';
<<<<<<< HEAD
import RelatedProduct from './RelatedProduct';
=======
>>>>>>> 20453a3f14d2d0bb70491fa5d4b30b37292b9d6a

const ModalWrap = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(73, 68, 68, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PopupBox = styled.div`
  width: 960px;
  height: 994px;
  background-color: #ffffff;
  border: 2px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PopupCloseButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 32px 48px 18px 48px;
  height: 76px;
`;
const PopupCloseButton = styled.button`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #777777;
`;

function Modal({ dishes }) {
  // const relatedDishes = dishes.related_dishes;
  const modal = useRef();
  function closeModal(e) {
    if (e.target !== e.currentTarget) {
      return;
    } // 질문해보기!
    modal.current.style = 'display:none';
  }
  return (
    <ModalWrap ref={modal} onClick={closeModal}>
      <PopupBox>
        <PopupCloseButtonWrap>
          <PopupCloseButton onClick={closeModal}>닫기</PopupCloseButton>
        </PopupCloseButtonWrap>
        <ProductDetail dishes={dishes}></ProductDetail>
        <RelatedProduct dishes={relatedDishes}></RelatedProduct>
      </PopupBox>
    </ModalWrap>
  );
}

export default Modal;