import { styled } from "../../styled-system/jsx";

export const Thumbnail = styled("img", {
  base: {
    mt: 4,
    borderRadius: 8,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "left",
  },
});
