import styles from "./TabSelector.module.css";

const TabSelector = ({
  className,
  optionClassName,
  options,
  onTabChange,
  activeIndex,
  ...restProps
}: {
  className?: string;
  optionClassName?: string;
  options: { label: string; value: string }[];
  onTabChange: Function;
  activeIndex: number;
}) => {
  if (options?.length > 0)
    return (
      <div
        className={`${styles["lsq-tabmenu-container"]} ${className ? className : ""}`}
        {...restProps}
      >
        <div className={styles["lsq-tabmenu"]}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`${styles["lsq-tabmenu-item"]} ${
                activeIndex === index ? styles["selected"] : ""
              } ${optionClassName ? optionClassName : ""}`}
              onClick={() => onTabChange({ index, value: option })}
              role="presentation"
            >
              <div style={{height: "30px"}}>{option.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  else {
    return null;
  }
};

export default TabSelector;
