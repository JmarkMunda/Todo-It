import { Button, ButtonProps } from "@chakra-ui/react";

interface IButtonProps extends ButtonProps {
  children: string;
}

const CommonButton = ({ children, ...others }: IButtonProps) => {
  return (
    <Button colorScheme="gray" {...others}>
      {children}
    </Button>
  );
};

export default CommonButton;
