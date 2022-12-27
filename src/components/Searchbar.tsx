import {
  InputGroup,
  InputLeftElement,
  Input,
  InputGroupProps,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { ChangeEvent } from "react";

// Types
interface ISearchBarProps extends InputGroupProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  placeholder: string;
}
// Component
const Searchbar = (props: ISearchBarProps) => {
  const { placeholder, value, onChange, reset, ...others } = props;

  return (
    <InputGroup {...others}>
      <InputLeftElement children={<SearchIcon color="gray.400" />} />
      <Input
        placeholder={placeholder}
        variant="filled"
        value={value}
        onChange={onChange}
      />
      {value.length > 0 && (
        <InputRightElement
          children={
            <CloseIcon
              color="gray.400"
              cursor="pointer"
              fontSize={8}
              onClick={() => reset()}
            />
          }
        />
      )}
    </InputGroup>
  );
};

export default Searchbar;
