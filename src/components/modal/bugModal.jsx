import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useTransition } from "react";
import emailjs from "@emailjs/browser";
import { FaTrash } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { FaBugSlash } from "react-icons/fa6";

function BugModal() {
  const [formData, setFormData] = useState({ name:"",subject: "", desc: "" });
  const [isLoading,startTransition] = useTransition();
  const modalRef = useRef(null);
  const memoRef = useRef(null)
  const formRef = useRef(null);

  useGSAP(() => {
    const modal = modalRef.current;
    const memo = memoRef.current;

    const tl = gsap.timeline();
    tl.fromTo(
      modal,
      { opacity: 0, filter: "blur(5px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.3, ease: "power2.out" }
    ).fromTo(
      memo,
      { opacity:0,scale: 2 },
      { opacity:1,scale: 1, duration: 0.75, ease: "power2.out" }
    );
  }, []);

  function memoAnimation(callback){
    const tl = gsap.timeline();
    const memo = memoRef.current;
    tl.fromTo(memo, 
      { y:0,rotateZ:0,opacity: 1 },
      { y:-300,rotateZ:15,opacity: 0, duration: 0.5, ease: "power2.out",onComplete:()=>{
        if(callback){
          callback();
        }
      } })
    tl.fromTo(memo,
      { y:300,rotate:15,opacity: 0 },
      { y:0,rotate:0,opacity: 1, duration: 0.5, ease: "power2.out" }
    )
  }
  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  function reset() {
    setFormData({ name:"",subject: "", desc: "" });
    formRef.current.reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.desc.trim() || !formData.subject.trim()) return;


    startTransition(async()=>{
      await emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      )
      .then(
        () => {
          memoAnimation(reset)
        },
        (error) => {
          alert("Failed to send report: " + error.text);
        }
      );
    })
   
  }

  return (
    <div ref={modalRef} className="modal-back">
      <div ref={memoRef} className="memo-paper">
        <div className="memo-header">
           <p className="memo-title">
            <FaBugSlash/>
            <span>Rachmawan Bug Service</span>
          </p>
          <p className="memo-subtitle">Handling bug and problem since 2020.</p>
        </div>
        <form onSubmit={handleSubmit} ref={formRef} className="memo-form">
          <div className="memo-value">
            <div className="memo-input">
              <label htmlFor="name">
                <span>Name</span>
                <span>:</span>
                </label>
              <input disabled={isLoading} value={formData.name} name="name" id="name" type="text" onChange={handleInput}/>
            </div>
            <div className="memo-input">
              <label htmlFor="subject">
                <span>Subject</span>
                <span>:</span>
                </label>
              <input disabled={isLoading} value={formData.subject} name="subject" id="subject" type="text" onChange={handleInput}/>
            </div>
            <div className="memo-input">
              <label htmlFor="desc">
                <span>Desc</span>
                <span>:</span>
                </label>
              <input disabled={isLoading} value={formData.desc} name="desc" id="desc" type="text" onChange={handleInput}/>
            </div>
          </div>
              <div className="memo-buttons">
                <button disabled={isLoading} onClick={()=>memoAnimation(reset)} type="button" className="clear-button">
                  <FaTrash/>
                </button>
                <button disabled={isLoading} className="send-button" type="submit">
                  <MdSend/>
                </button>
              </div>
             <p className="memo-warning">Note: Please fill all the field before submitting!</p> 
        </form>
      </div>
    </div>
  );
}

export default BugModal;
