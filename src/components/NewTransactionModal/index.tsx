import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

import closeIcon from '../../assets/close.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');

  function handleNewTransactionFormSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      transactionType,
      category
    };

    api.post('transactions', data);
  }

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

        <Container onSubmit={handleNewTransactionFormSubmit}>
          <h2>Cadastrar transação</h2>

          <input 
            type="text" 
            placeholder="Título" 
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          
          <input 
            type="number" 
            placeholder="Valor" 
            value={value}
            onChange={event => setValue(Number(event.target.value))}
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
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}