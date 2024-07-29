import React, { useRef } from "react";
import { ColumnType } from "../../types/table";
import { dataTypes } from "../config";
import {
  ErrorMsg,
  FormGroup,
  PopupContainer,
  PopupContent,
  PopupTitle,
  FormLabel,
  FormInput,
  FormSelect,
  FormActions,
  SubmitButton,
  CloseButton,
} from "../styles/style";

type NewColumnFormProps = {
  onClose: () => void;
  columns: ColumnType[];
  onAddColumn: (newColumn: ColumnType) => void;
};

const NewColumnForm: React.FC<NewColumnFormProps> = ({
  onClose,
  onAddColumn,
  columns,
}) => {
  const [error, setError] = React.useState<string>("All fields are required");
  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const widthRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameRef.current && typeRef.current && widthRef.current) {
      const newColumn: ColumnType = {
        id: nameRef.current.value.toLowerCase().replace(/\s+/g, "_"),
        ordinalNo: columns.length,
        title: nameRef.current.value,
        type: typeRef.current.value,
        width: parseInt(widthRef.current.value, 10),
      };
      if (columns.some((col) => col.id === newColumn.id)) {
        setError("Column Name already exists");
        return;
      }

      onAddColumn(newColumn);
      onClose();
    }
  };

  return (
    <PopupContainer>
      <PopupContent>
        <PopupTitle>Add New Column</PopupTitle>
        <ErrorMsg>{error}</ErrorMsg>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Column Name:</FormLabel>
            <FormInput type="text" ref={nameRef} required max={50} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Column Type:</FormLabel>
            <FormSelect ref={typeRef}>
              {dataTypes.map((type) => (
                <option key={type} value={type.toLocaleLowerCase()}>
                  {type}
                </option>
              ))}
            </FormSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel>Column Width (in characters):</FormLabel>
            <FormInput
              type="number"
              defaultValue={10}
              ref={widthRef}
              required
              min={1}
              max={50}
            />
          </FormGroup>
          <FormActions>
            <SubmitButton type="submit">Create</SubmitButton>
            <CloseButton type="button" onClick={onClose}>
              Cancel
            </CloseButton>
          </FormActions>
        </form>
      </PopupContent>
    </PopupContainer>
  );
};

export default NewColumnForm;
