import styles from "@/styles/Home.module.css";
import { Button, Dropdown, Input, Spacer } from "@nextui-org/react";
import { useState } from "react";

const AddIncomeForm = () => {
  const [selectedCategrory, setSelectedCategory] = useState("general");

  const onCategoryChange = (e: any) => {
    setSelectedCategory(e.currentKey);
  };

  return (
    <div className={styles["expense-addition-form"]}>
      <Spacer y={2} />
      <Input
        labelPlaceholder="Amount"
        size="lg"
        bordered
        color="primary"
        type="number"
      />
      <Spacer y={2} />
      <Input
        labelPlaceholder="What is this Expense for"
        size="lg"
        bordered
        color="primary"
      />
      <Spacer y={2} />
      <Dropdown>
        <Dropdown.Button
          bordered
          size="lg"
          flat
          color="primary"
          css={{ tt: "capitalize" }}
        >
          Category: <b style={{ marginLeft: "4px" }}>{selectedCategrory}</b>
        </Dropdown.Button>

        <Dropdown.Menu
          aria-label="Single selection actions"
          color="primary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedCategrory}
          onSelectionChange={onCategoryChange}
        >
          <Dropdown.Item key="general">General</Dropdown.Item>
          <Dropdown.Item key="food">Food & Drinks</Dropdown.Item>
          <Dropdown.Item key="travel">Travel</Dropdown.Item>
          <Dropdown.Item key="entertainment">Entertainment</Dropdown.Item>
          <Dropdown.Item key="bills">Bills</Dropdown.Item>
          <Dropdown.Item key="groceries">Groceries</Dropdown.Item>
          <Dropdown.Item key="fuel">Fuel</Dropdown.Item>
          <Dropdown.Item key="shopping">Shopping</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Spacer y={2} />
      <Button size="lg" color="primary" auto>
        Create Income
      </Button>
    </div>
  );
};

export default AddIncomeForm;
