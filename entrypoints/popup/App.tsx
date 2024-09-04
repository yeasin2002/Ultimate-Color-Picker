import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../src/components/ui";
import { routes } from "../../src/data";

function App() {
  return (
    <Tabs defaultValue={routes[0].value} className="min-w-[18rem] ">
      {routes?.map((val) => (
        <TabsContent value={val.value} key={val.value} className="p-2">
          <val.components />
        </TabsContent>
      ))}

      <TabsList className="flex items-center justify-between ">
        {routes?.map((val) => (
          <TabsTrigger key={val.value} value={val.value}>
            <val.icon />
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default App;
