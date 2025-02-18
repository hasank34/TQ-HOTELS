type Props = {
  children?: JSX.Element | JSX.Element[];
  design?: string;
};
const Container = ({ children, design }: Props) => {
  return (
    <div className={` max-w-[1440px] mx-auto p-5 ${design}`}>{children}</div>
  );
};

export default Container;
