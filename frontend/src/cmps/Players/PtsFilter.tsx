export default function PtsFilter({ value, onChange }: any) {
  return (
    <div>
      <input
        value={value || ""}
        onChange={onChange}
        placeholder="Search for player"
      />
    </div>
  );
}
