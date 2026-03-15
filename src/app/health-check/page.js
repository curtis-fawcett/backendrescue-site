import { put } from "@vercel/blob";
import { redirect } from "next/navigation";

export default function HealthCheckPage() {

  async function submitHealthCheck(formData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const github = formData.get("github");
    const issue = formData.get("issue");
    const file = formData.get("file");

    let fileUrl = "";

    if (file && file.size > 0) {
      const upload = await put(`health-checks/${Date.now()}-${file.name}`, file, {
        access: "private",
      });

      fileUrl = upload.url;
    }

    const submission = {
      name,
      email,
      github,
      issue,
      fileUrl,
      created: new Date().toISOString()
    };

    await put(
      `health-checks/submission-${Date.now()}.json`,
      JSON.stringify(submission, null, 2),
      {
        access: "private",
        contentType: "application/json"
      }
    );

    redirect("/health-check/success");
  }

  return (
    <main style={{maxWidth:"700px",margin:"60px auto",padding:"20px"}}>
      <h1>Free Backend Health Check</h1>

      <p>
        Upload a log file, small project zip, or GitHub link and describe the issue.
        I will review it and identify possible backend issues before recommending
        a full BackendRescue engagement.
      </p>

      <form action={submitHealthCheck} style={{display:"grid",gap:"14px",marginTop:"20px"}}>

        <input name="name" placeholder="Your name" required />

        <input name="email" type="email" placeholder="Your email" required />

        <input name="github" placeholder="GitHub repo (optional)" />

        <textarea
          name="issue"
          placeholder="Describe what is going wrong..."
          rows="6"
          required
        />

        <input name="file" type="file" />

        <button type="submit">
          Submit Health Check
        </button>

      </form>
    </main>
  );
}