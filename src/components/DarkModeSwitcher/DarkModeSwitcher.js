import React, { useContext } from "react";
import { Switch, FormControlLabel } from "@material-ui/core";
import ThemeContext from "../../contexts/themeContext";

const DarkModeSwitcher = ({ onClose }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <FormControlLabel
      control={
        <Switch
          checked={isDarkMode}
          name="checkedDarkMode"
          color="primary"
          onChange={() => {
            if (onClose) {
              onClose();
            }
            setIsDarkMode(!isDarkMode);
          }}
        />
      }
      label={"Тёмная тема"}
    />
  );
};

export default DarkModeSwitcher;
