import { Text } from "@nextui-org/react";

const Header = () => {
  return (
    <Text
      h2
      css={{
        textGradient: "45deg, $blue600 -20%, $pink600 50%",
        width: "100%"
      }}
      weight="bold"
    >
      Expense Tracker
    </Text>
  );
};

export default Header;
