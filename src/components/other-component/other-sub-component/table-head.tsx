type propsType = {
  values: string[];
};

export default function TableHead({ values }: propsType) {
  return (
    <>
      <thead>
        <tr>
          {values.map((values, index) => (
            <th key={index} className="font-light">{values}</th>
          ))}
        </tr>
      </thead>
    </>
  );
}
