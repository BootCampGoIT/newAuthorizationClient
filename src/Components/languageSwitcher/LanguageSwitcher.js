import React, { useContext } from "react";
import { LangContext } from "../App";
import { SwitcherWrapper } from "./LanguageSwitcherStyled";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LangContext);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };
  return (
    <SwitcherWrapper>
      <select
        defaultValue={language.value}
        onChange={changeLanguage}
        className='switcherSelect'>
        {language.languages.map(({ name, value }) => (
          <option value={value} key={value} className='languageOption'>
            {name}
          </option>
        ))}
      </select>
    </SwitcherWrapper>
  );
};

export default LanguageSwitcher;
