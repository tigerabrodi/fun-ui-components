import "./Buttons.css";

export const Buttons = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="move-up-button">Move up</button>
      <button className="move-side-button">Move side</button>
      <button className="underline-button">Underline</button>
      <button className="three-d-button">3D Button</button>
    </div>
  );
};
