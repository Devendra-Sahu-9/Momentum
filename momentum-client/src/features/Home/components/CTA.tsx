import { Button } from "../../../shared/components/ui/Button";

function CTA() {
  return (
    <section style={{ textAlign: "center", padding: "40px" }}>
      <h2>Ready to manage your tasks efficiently?</h2>
      <p>Start organizing your work today.</p>
      <div className="flex justify-center p-2 m-2">
        <Button variant="primary" to="/login">
          Get Started
        </Button>
        <Button variant="secondary">Learn More</Button>
      </div>
    </section>
  );
}

export default CTA;
