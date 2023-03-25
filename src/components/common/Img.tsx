import { useIsImgLoaded } from "../../hooks/image/useIsImgLoaded";

export type ImgProps = {
  src: string;
  alt: string;
  lazy: boolean;
  className: string;
};

export default function Img(props: ImgProps) {
  const { src, alt, lazy, className } = props;
  const { elementRef, isLoaded } = useIsImgLoaded(lazy);

  return (
    <img
      className={className}
      ref={elementRef}
      alt={alt}
      src={isLoaded ? src : sizify(src)}
    />
  );
}

function sizify(src: string): string {
  return src.replaceAll("w350", "w72");
}
