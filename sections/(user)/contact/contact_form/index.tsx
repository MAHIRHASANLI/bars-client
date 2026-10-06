import FormFeedbackComponent from "@/components/(user)/contact/form_feedback";
import PageHeader from "@/utils/heading_component";

const ContactForm = () => {
  const pageHeader = {
    title: "BARS-a müraciət edin",
    description:
      "Müraciət mövzusunu seçin və formanı doldurun. Sorğunuzu diqqətlə nəzərdən keçirəcək və uyğun həll təklif etmək üçün sizinlə əlaqə saxlayacağıq",
  };
  return (
    <section className="main-container flex flex-col gap-8 pt-10 pb-28  ">
      <PageHeader {...pageHeader} />

      <FormFeedbackComponent />
    </section>
  );
};

export default ContactForm;
