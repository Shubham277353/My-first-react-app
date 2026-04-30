function Card({ about, children }) {
  return (
    <div>
      <div className="card">{children}</div>
      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div>
      <Card about="Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.">
        <div className="card">
          <div className="card-content">
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
