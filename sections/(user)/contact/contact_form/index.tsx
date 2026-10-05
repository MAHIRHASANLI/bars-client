import FormFeedbackComponent from "@/components/(user)/contact/form_feedback";
import PageHeader from "@/utils/page_header";

const ContactForm = () => {

  return (
    <section className="main-container flex flex-col gap-8 pt-10 pb-28  ">
       <PageHeader title="BARS-a müraciət edin" description="Müraciət mövzusunu seçin və formanı doldurun. Sorğunuzu diqqətlə nəzərdən keçirəcək və uyğun həll təklif etmək üçün sizinlə əlaqə saxlayacağıq"/>
     
     
       <FormFeedbackComponent/>
    </section>
  );
};

export default ContactForm;
