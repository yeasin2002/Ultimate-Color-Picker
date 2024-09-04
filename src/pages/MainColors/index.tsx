import { cn } from "@/src/utils";
import { Crosshair, Trash } from "../../components/icons";
import { ShowColorList } from "./ShowColorList";
import { useLocalStorage } from "@uidotdev/usehooks";

export const MainColors = () => {
  const [colors, setColor] = useLocalStorage<string[]>("colors", []);
  const recentColor = colors?.at(-1) || "#000000";
  const [selectedColors, setSelectedColors] = useLocalStorage<string>(
    "selected-colors",
    recentColor
  );

  const openEyeDropper = async () => {
    if ("EyeDropper" in window) {
      const eyeDropper = new (window as any).EyeDropper();

      try {
        const result = await eyeDropper.open();
        setColor([...colors, result.sRGBHex]);
        setSelectedColors(result.sRGBHex);
      } catch (error) {
        console.error("EyeDropper error:", error);
      }
    } else {
      console.warn("EyeDropper API is not supported in this browser.");
    }
  };
  const deleteAllColorHandler = () => setColor([]);

  return (
    <div>
      <section className="grid grid-cols-2 items-center gap-x-2">
        <div
          className="flex items-center justify-center flex-col bg-yellow-400 size-full rounded-md cursor-pointer"
          onClick={openEyeDropper}
        >
          <Crosshair />
          <p className="text-center  px-2  py-4 ">
            Click to pic color from web
          </p>
        </div>
        <div className="space-y-4">
          <ShowColorList hexColor={recentColor} title="New" />
          <ShowColorList hexColor={selectedColors} title="Picked" />
        </div>
      </section>

      {/* Recent Colors  */}
      <div
        className={cn("mt-4 space-y-2", {
          hidden: colors.length === 0,
        })}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Colors</h3>
          <Trash
            className="text-red-500 size-5 cursor-pointer"
            onClick={deleteAllColorHandler}
          />
        </div>
        <div className="grid grid-cols-10 gap-2 ">
          {colors.slice(0, 30).map((value, i) => {
            return (
              <div
                key={value + i}
                className="min-h-5 w-full bg-zinc-300 rounded-md border border-zinc-400"
                style={{ background: value }}
                onClick={() => setSelectedColors(value)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
