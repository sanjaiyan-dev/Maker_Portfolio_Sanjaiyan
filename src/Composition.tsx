import { NotebookPaper } from "./notebook-paper.element";
import { CalculateMetadataFunction, Composition, IFrame, Sequence } from "remotion";
import { Website_IndexPage } from "./Projects/Digital_Tamizh/Website_indexpage";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={60}
      fps={30}
      width={1280}
      height={720}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MyComponent: React.FC<Props> = () => {
  return (
    <>
  
    </>
  );
};
