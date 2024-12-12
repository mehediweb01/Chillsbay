import { Accordion, AccordionItem } from "@nextui-org/react";
import Add from "/Add.png";
const AddIcon = () => {
  return <img src={Add} alt="Add" />;
};
function FAQs() {
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-[#26395C] text-[32px] leading-9 font-RedHotDisplay font-bold">
          Frequently Asked Questions
        </h1>
        <p className="max-w-xl mx-auto text-[#656B89] text-base leading-7 tracking-[1%] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus nunc,
          purus est sem volutpat at at. Ultricies erat leo risus, eget venenatis
          tristique morbi.
        </p>
      </div>
      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          indicator={<AddIcon />}
          title="Do you offer refunds for purchased products?"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </AccordionItem>
        <AccordionItem
          key="2"
          indicator={<AddIcon />}
          aria-label="Accordion 2"
          title="How does Chillsbay work?"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </AccordionItem>
        <AccordionItem
          key="3"
          indicator={<AddIcon />}
          aria-label="Accordion 3"
          title="Can I pay with Crypto on Chillsbay.com? "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </AccordionItem>
        <AccordionItem
          key="4"
          indicator={<AddIcon />}
          aria-label="Accordion 4"
          title="How can I become a Chillsbay Host?"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          adipiscing tristique ut blandit massa tellus amet at. Amet, arcu
          tellus cursus leo. Eget malesuada a enim, at at cursus ornare et nunc.
          Enim ultrices platea morbi.
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FAQs;
