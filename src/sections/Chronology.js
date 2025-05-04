/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { experience } from "../info";
import ChronologyDetails from "../components/ChronologyDetails";

const Chronology = () => {
  const data = experience;

  const chronologyContainerStyle = css`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-left: 5em;
    margin-bottom: 1em;

    @media (max-width: 850px) {
      margin-left: 1em;
    }
  `;

  return (
    <section className="flex flex-col md:mt-24 lg:mt-10 w-[80vw] md:w-[70vw] self-center">
      <div css={chronologyContainerStyle} className="mx-1 md:mx-0">
        <div className="text-4xl font-extrabold text-red lg:text-5xl 2xl:text-6xl">
          Parcours
        </div>
        {/* Vertial Line */}
        <ol className="border-l-2 border-pink mt-8">
          {data.map((experience) => (
            <ChronologyDetails experience={experience} />
          ))}
        </ol>
        {/* Last experience and chronology bottom */}
        <ol class="border-l-2 border-transparent">
          <li>
            <div class="flex flex-start items-center">
              {/* Point */}
              <div className="bg-pink w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-4 md:-mt-2"></div>
              <div className="text-very-dark-grey leading-5 font-semibold text-lg md:text-xl 2xl:text-2xl md:-mt-2 -mt-4 flex flex-wrap">
                Baccalauréat scientifique
              </div>
            </div>
            <div className="ml-6 mb-2 pb-6">
              <p className="inline-block text-middle-pink uppercase text-xs font-medium md:font-light md:text-base 2xl:text-lg">
                2011
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Chronology;
