import React from "react";
import { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import Checkbox from "./CheckBox";

function App() {
  const [skill, setSkill] = useState([","]);
  return (
    <div className="grid">
      <article>
        <header>
          <h3>체크박스 그룹</h3>
        </header>
        <CheckboxGroup
          label="Skill"
          values={skill}
          onChange={setSkill}
        >
          <Checkbox value="Java">Java</Checkbox>
          <Checkbox value="Python">Python</Checkbox>
          <Checkbox value="C">C</Checkbox>
          <Checkbox value="C#">C#</Checkbox>
          <Checkbox value="C++">C++</Checkbox>
          <Checkbox value="Javascript">Javascript</Checkbox>
        </CheckboxGroup>
        <div>[{skill} ]</div>
      </article>
    </div>
  );
}

export default App;
