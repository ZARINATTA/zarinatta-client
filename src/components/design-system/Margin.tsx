interface MarginProps {
  vertical?: boolean;
  horizontal?: boolean;
  size: number;
}

export default function Margin({ vertical = true, horizontal, size }: MarginProps) {
  return (
    <div
      style={
        vertical ? { marginTop: size } : horizontal ? { marginRight: size } : { marginTop: size }
      }
    />
  );
}
