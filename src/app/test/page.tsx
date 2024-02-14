export default function Page() {
  const foo = [11, 2, 3, 4, 5];
  return (
    <div>
      {foo.map((x, i) => {
        return <div key={x + i}>{x}</div>;
      })}
    </div>
  );
}
