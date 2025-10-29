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
      { opacity: 0, filter: "blur(5px)" },
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
      <div className="memo-paper">
        <p className="memo-title">Rachmawan Bug Service</p>
        <p className="memo-subtitle">Handling bug and problem since 2020.</p>
        <form className="memo-form">
          <div>
            <div className="memo-input">
              <label htmlFor="name">Name:</label>
              <input name="name" id="name" type="text" />
            </div>
            <div className="memo-input">
              <label htmlFor="subject">Subject:</label>
              <input name="subject" id="subject" type="text" />
            </div>
            <div className="memo-input">
              <label htmlFor="desc">Desc:</label>
              <textarea name="desc" id="desc" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BugModal;
