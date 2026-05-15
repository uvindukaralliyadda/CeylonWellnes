export default function Field({
  label,
  name,
  type = "text",
  textarea = false,
  ...props
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      {textarea ? (
        <textarea id={name} name={name} {...props} />
      ) : (
        <input id={name} name={name} type={type} {...props} />
      )}
    </div>
  );
}