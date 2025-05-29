import { contact } from "../info";
import { about } from "../info";
import UnfilledButton from "../components/Buttons/UnfilledButton";
import FilledButton from "../components/Buttons/FilledButton";

const Contact = () => {
  if (!contact.email) return null;
  const { social } = about;
  return (
    <section
      className="md:mt-6 2xl:mt-8 h-auto w-[90vw] flex flex-col self-center"
      id="contact"
    >
      <div className="2xl:mt-6 2xl:mb-6 flex flex-col justify-between h-[90vh]">
        <div className="text-4xl font-extrabold text-red lg:text-5xl 2xl:text-6xl">
          Let's keep{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-red">
            in touch
          </span>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col items-center gap-4">
            <UnfilledButton
              title="Email Me"
              url={`mailto:${contact.email}`}
              color="red"
              transitionColor="middle-pink"
              gradient={true}
            />
            <FilledButton
              title="Linkedin"
              color="blue"
              url={social.linkedin}
              filledLogo={true}
            />
            <FilledButton title="Github" color="black" url={social.github} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
