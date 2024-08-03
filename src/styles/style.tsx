import { styled } from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--shadow-mid));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupContent = styled.div`
  background: #fbf8fd;
  padding: 4rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgba(var(--muted));
  width: 400px;
  max-width: 90%;
`;

export const PopupTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ErrorMsg = styled.h4`
  background-color: var(--destructive);
  color: var(--destructive-foreground);
  font-weight: 600;
  padding: 0rem 0.25rem;
  border-radius: 0.25rem;
  text-align: center;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: 20 5.9% 90%;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: 20 5.9% 90%;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  margin-left: 10px;
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const SubmitButton = styled(ActionButton)`
  background-color: var(--success);
  color: var(--success-foreground);
  outline: 1px solid var(--success);

  &:hover {
    background-color: var(--success-foreground);
    color: var(--success);
  }
`;

export const CloseButton = styled(ActionButton)`
  background-color: var(--destructive);
  color: var(--destructive-foreground);
  outline: 1px solid var(--destructive);

  &:hover {
    background-color: var(--destructive-foreground);
    color: var(--destructive);
  }
`;
