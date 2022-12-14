import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  max-width: 450px;

  > h1 {
    font-size: 22px;
    color: ${({ danger, theme }) => (danger ? theme.colors.danger.main : theme.colors.dark[900])};
  }

  > div {
    margin-top: 32px;

  }

  footer {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .cancel-button {
      background: transparent;
      border: none;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.gray[200]};
      margin-right: 24px;

      &[disabled] {
        cursor: default;
      }
  }
`;
