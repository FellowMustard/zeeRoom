import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function BugModal() {
  const [formData, setFormData] = useState({ subject: "", desc: "" });
  const modalRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    const modal = modalRef.current;
    gsap.fromTo(
      modal,
      { opacity: 0, filter: "blur(10px)" },
      { opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
    );
  }, []);
  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function reset() {
    setFormData({ subject: "", desc: "" });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.desc.trim() || !formData.subject.trim()) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(
        () => {
          alert("Bug report sent successfully!");
          reset();
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send report: " + error.text);
        }
      );
  }

  return (
    <div ref={modalRef} className="modal-back">
      <div className="modal-content">
        <p className="modal-title">Bug Report</p>
        <p>Could you describe the bug you ran into?</p>

        <form ref={formRef} onSubmit={handleSubmit} className="modal-body">
          <div></div>
          <div>
            <div className="form-element">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Short title of the bug"
                value={formData.subject}
                onChange={handleInput}
                required
              />
            </div>

            <div className="form-element">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                name="desc"
                placeholder="Describe what happened..."
                value={formData.desc}
                onChange={handleInput}
                required
              />
            </div>
          </div>
          <button type="submit" className="visit-button">
            Send Report
          </button>
        </form>
      </div>
    </div>
  );
}

export default BugModal;
