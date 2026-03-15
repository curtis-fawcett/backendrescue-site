import Link from "next/link";

export default function HealthCheckSuccessPage() {
  return (
    <main style={{ maxWidth: "700px", margin: "60px auto", padding: "20px", textAlign: "center" }}>
      <h1>Submission received</h1>

      <p>
        Thanks for sending over your backend issue. I’ll review it and use it to
        decide whether a deeper BackendRescue engagement makes sense.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Link href="/">Back to homepage</Link>
      </div>
    </main>
  );
}