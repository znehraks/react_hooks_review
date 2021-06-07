import React, { useState } from "react";

const content = [
  { tab: "Section 1", content: "Content 1 of the Section 1" },
  { tab: "Section 2", content: "Content 1 of the Section 2" },
  { tab: "Section 3", content: "Content 1 of the Section 3" },
];

// const useTabs = (initialTab, allTabs) => {
//   if (!allTabs || !Array.isArray(allTabs)) {
//     return;
//   }
//   const [currentIndex, setCurrentIndex] = useState(initalTab);
//   return {
//     currentItem: allTabs[currentIndex],
//     changeItem: setContentIndex
//   };
// };

//Functional Component
const App = () => {
  const [contentIndex, setContentIndex] = useState();
  console.log(contentIndex);
  //   const tabs = useTabs(0, content);
  return (
    <div>
      <h1>useTabs Component</h1>
      {content.map((section, index) => (
        <button onClick={() => setContentIndex(index)}>{section.tab}</button>
      ))}
      {contentIndex !== undefined && (
        <span>content is{content[contentIndex].content}</span>
      )}
    </div>
  );
};

export default App;
