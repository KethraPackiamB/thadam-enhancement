import { extractUrlId, formatEmail, formatPhone } from "../../../utils/formatters";

const FieldRender = ({ type = "text", value }) => {
  if (!value) return " ";

  const formattedLink = value.startsWith("http") ? value : `https://${value}`;
  const formattedDate = new Date(value).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  switch (type) {
    case "link":
      if (!value) return null;

      return (
        <img
          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${formattedLink}`}
          alt="icon"
          width={35}
          height={35}
          className="rounded-circle border p-2"
          style={{ background: "#fff", cursor: "pointer" }}
          onClick={() => window.open(formattedLink, "_blank")}
          onError={(e) => {
            e.target.src = "/default-icon.png";
          }}
        />
      );

    case "email":
      return (
        <a href={formatEmail(value)} style={{ color: "white" }}>
          {value}
        </a>
      );
    case "phone":
      return (
        <a href={formatPhone(value)} style={{ color: "white" }}>
          {value}
        </a>
      );
    case "date":
      return <span>{formattedDate}</span>;

    default:
      return <span>{value}</span>;
  }
};

export default FieldRender;
