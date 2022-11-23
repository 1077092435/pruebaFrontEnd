
import React from 'react';

import { useModal } from '../../hooks/useModal';

import {Modal} from '.';

import { css } from 'aphrodite';

import './styles.css'
import {styles} from '../body/styles';


export const Modals = ({ children }) => {

  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>

      <div className={css(styles.containerButton)}>
          <li>
          <div className={css(styles.containerSizeButton)}>
            <button className={css(styles.button)} onClick={openModal2}>Add to Favorite</button>
          </div>
          </li>
          <li>
          <div className={css(styles.containerSizeButton)}>
            <button className={css(styles.button2)} onClick={openModal}>Add to Cart</button>
          </div>
          </li>
        </div>

      <Modal  isOpen={isOpenModal} closeModal={closeModal} >
        <h1>shopping cart</h1>
        {children}
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h1>Your Favorites</h1>
        {children}
      </Modal>
    </div>
  )
}


