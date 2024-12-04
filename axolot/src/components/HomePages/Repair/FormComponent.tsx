const FormComponent = () => {
  return (
    <section
      id="contact"
      className="repair-subscribe-area ptb-100"
      style={{ marginBottom: 0 }}
      data-aos="fade-right"
      data-aos-duration="800"
    >
      <div className="container">
        <div className="repair-subscribe-content">
          <h2>Напишіть нам</h2>
          <form className="newsletter-form">
            <div className="form-wrapper">
              <div className="form-group">
                <input
                  type="text"
                  className="input-newsletter"
                  placeholder="Імʼя"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="input-newsletter"
                  placeholder="Телефон"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Email*"
                  name="EMAIL"
                  required
                />
              </div>

              <textarea
                required
                className="input-newsletter"
                placeholder="Ваше повідомлення"
                rows={5}
                style={{
                  width: "100%",
                  resize: "none",
                  padding: "10px",
                  fontSize: "14px",
                  lineHeight: "1.5",
                  border: "1px solid #ffffff",
                  backgroundColor: "transparent",
                    color: "white",
                  outline:0
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "fit-content" }}
            >
              Надіслати <i className="icofont-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormComponent;
