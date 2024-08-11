// import { createElement } from "react";

const Name = ({ name }) => <h1>hi {name}</h1>;
const NameComp = ({ children }) => <h1>hi {children}</h1>;

export const NoJsxComponent = () => {
  //   return createElement("h1", null, "hello");

  const h1 = <h1>h1 here</h1>;

  const renderh1 = (name) => <h2>h2, hello {name}</h2>;

  return (
    <>
      {h1}
      {renderh1("Alex")}
      <Name name={"Alex"} />
      <NameComp>Alex</NameComp>
    </>
  );
};
