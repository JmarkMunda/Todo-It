import {
  InputGroup,
  InputLeftElement,
  Input,
  InputGroupProps,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

interface ISearchBarProps extends InputGroupProps {
  placeholder: string;
}

const Searchbar = ({ placeholder, ...others }: ISearchBarProps) => {
  return (
    <InputGroup {...others}>
      <InputLeftElement children={<SearchIcon color="gray.400" />} />
      <Input placeholder={placeholder} variant="filled" />
    </InputGroup>
  );
};

export default Searchbar;
