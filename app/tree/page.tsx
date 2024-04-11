import ClientSideComponents from "./components/ClientSideComponents";
import ServerSideComponents from "./components/ServerSideComponents";

const Tree = () => {
  console.log("This is the Tree");
  return (
    <div>
      <ClientSideComponents>
        {/* <ClientSideComponents Component={<ServerSideComponents />}> */}
        <div>Foobar</div>
        <ServerSideComponents />
      </ClientSideComponents>
    </div>
  );
};

export default Tree;
