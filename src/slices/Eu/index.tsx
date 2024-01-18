import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Eu`.
 */
export type EuProps = SliceComponentProps<Content.EuSlice>;

/**
 * Component for "Eu" Slices.
 */
const Eu = ({ slice }: EuProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for eu (variation: {slice.variation}) Slices
    </section>
  );
};

export default Eu;
