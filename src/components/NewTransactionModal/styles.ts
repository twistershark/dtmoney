import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    background: var(--input-background);

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;