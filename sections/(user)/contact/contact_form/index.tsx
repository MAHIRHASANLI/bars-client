import FormFeedbackComponent from "@/components/(user)/contact/form_feedback";
import PageHeader from "@/components/(user)/shared/page_heading_component_h1";

const ContactForm = () => {
  const pageHeader = {
    title: "BARS-a müraciət edin",
    description:
      "Müraciət mövzusunu seçin və formanı doldurun. Sorğunuzu diqqətlə nəzərdən keçirəcək və uyğun həll təklif etmək üçün sizinlə əlaqə saxlayacağıq",
  };
  return (
    <main>
      <section className="main-container pt-10 pb-28  ">
        <PageHeader {...pageHeader} align="center"/>

        <FormFeedbackComponent />
      </section>
    </main>
  );
};

export default ContactForm;
