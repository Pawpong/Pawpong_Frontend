export default function Container({ ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex">
      <div
        className="m-auto w-full max-w-360 lg:px-12 md:px-8 px-5"
        {...props}
      />
    </div>
  );
}
