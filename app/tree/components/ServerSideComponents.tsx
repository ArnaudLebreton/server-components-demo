const ServerSideComponents = ({ children, Component }: any) => {
  console.log("This is Server Side");
  return <div>This is Client Side Component</div>;
};

export default ServerSideComponents;
