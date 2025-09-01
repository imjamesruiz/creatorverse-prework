import "./CreatorCard.css";

export default function CreatorCard({ name, url, description, imageURL }) {
  return (
    <div className="card">
      {/* optional image */}
      {imageURL && (
        <img src={imageURL} alt={name} className="card-img" />
      )}

      {/* content */}
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-desc">{description}</p>

        {/* clickable link */}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Visit Profile →
          </a>
        )}
      </div>
    </div>
  );
}
