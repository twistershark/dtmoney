import { useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeIcon from '../../assets/close.svg';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState('deposit');

  return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"  
      >
        <button type="button" className="react-modal-close">
          <img src={closeIcon} alt="Fechar" onClick={onRequestClose} />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>

          <input 
            type="text" 
            placeholder="Título" 
          />
          
          <input 
            type="number" 
            placeholder="Valor" 
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={() => { setTransactionType('deposit') }}
              isActive={transactionType === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox 
              type="button"
              onClick={() => { setTransactionType('withdraw') }}
              isActive={transactionType === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            type="text" 
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}