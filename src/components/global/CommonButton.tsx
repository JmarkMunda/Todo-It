import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButtonProps extends ButtonProps {
  children: string | ReactNode;
}

const CommonButton = ({ children, ...others }: IButtonProps) => {
  return (
    <Button colorScheme="gray" {...others}>
      {children}
    </Button>
  );
};

export default CommonButton;
